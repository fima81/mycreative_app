import React, { useState, useEffect, useCallback } from 'react';
import { Page, UserData, WallPost, Badge } from './types';
import * as dataService from './services/dataService';
import { BADGES } from './constants';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import StartPage from './components/StartPage';
import NavigationMenu from './components/NavigationMenu';
import FormulaPage from './components/FormulaPage';
import FlashcardsPage from './components/FlashcardsPage';
import FaqPage from './components/FaqPage';
import SummaryPage from './components/SummaryPage';
import AchievementNotification from './components/AchievementNotification';
import BadgeNotification from './components/BadgeNotification';
import CompletionCelebration from './components/CompletionCelebration';
import Modal from './components/Modal';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>(Page.Start);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [userName, setUserName] = useState<string>('');
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [userData, setUserData] = useState<UserData>({});
    const [wallPosts, setWallPosts] = useState<WallPost[]>([]);
    const [earnedBadges, setEarnedBadges] = useState<Set<string>>(new Set());
    
    const [achievementText, setAchievementText] = useState<string | null>(null);
    const [badgeNotification, setBadgeNotification] = useState<{name: string, icon: string} | null>(null);
    const [showCompletion, setShowCompletion] = useState<boolean>(false);
    const [modal, setModal] = useState<{ isOpen: boolean; message: string }>({ isOpen: false, message: '' });

    useEffect(() => {
        const loadedData = dataService.loadUserData();
        if (loadedData) {
            setUserData(loadedData.userData || {});
            setUserName(loadedData.userName || '');
            setCompletedSteps(new Set(loadedData.completedSteps || []));
            setEarnedBadges(new Set(loadedData.earnedBadges || []));
        }
        setWallPosts(dataService.loadWallPosts());
    }, []);

    const saveData = useCallback(() => {
        dataService.saveUserData({ userName, completedSteps: Array.from(completedSteps), userData, earnedBadges: Array.from(earnedBadges) });
    }, [userName, completedSteps, userData, earnedBadges]);

    useEffect(() => {
        saveData();
    }, [saveData]);

    const showModal = (message: string) => setModal({ isOpen: true, message });

    const handleSaveUserName = (name: string) => {
        if (!name.trim()) {
            showModal('Sila masukkan nama anda terlebih dahulu!');
            return false;
        }
        setUserName(name);
        return true;
    };

    const handleStartTechnique = (step: number) => {
        if (!userName) {
            showModal('Sila masukkan nama anda terlebih dahulu untuk memulakan perjalanan anda!');
            return;
        }
        if (step > completedSteps.size + 1) {
            showModal('Sila selesaikan teknik sebelumnya terlebih dahulu untuk membuka kunci langkah ini!');
            return;
        }
        setCurrentStep(step);
        setPage(Page.Formula);
    };

    const handleNavigate = (newPage: Page) => {
        setPage(newPage);
    };

    const handleDataChange = (step: number, data: any) => {
        setUserData(prev => ({ ...prev, [`step${step}`]: data }));
    };

    const awardBadge = (badge: Badge) => {
        setEarnedBadges(prev => new Set(prev).add(badge.id));
        setBadgeNotification({ name: badge.name, icon: badge.icon });
    };

    const markStepCompleted = useCallback((stepNumber: number) => {
        setCompletedSteps(prev => {
            const newSet = new Set(prev);
            if (!newSet.has(stepNumber)) {
                newSet.add(stepNumber);
                const stepNames: { [key: number]: string } = {
                    1: 'Teknik 1: Tetapkan Sasaran Pengguna', 2: 'Teknik 2: Kumpul Sumber Rujukan', 3: 'Teknik 3: Pemilihan Tajuk Buku',
                    4: 'Teknik 4: Rancang Idea Penulisan', 5: 'Teknik 5: Susun Atur Aset Interaktif', 6: 'Teknik 6: Jadual Isi Kandungan',
                    7: 'Teknik 7: Proses Edaran & Promosi'
                };
                setAchievementText(`Anda telah selesai ${stepNames[stepNumber]}!`);

                const newBadge = BADGES.find(b => b.stepToUnlock === stepNumber);
                if (newBadge && !earnedBadges.has(newBadge.id)) {
                    awardBadge(newBadge);
                }
            }
            return newSet;
        });
    }, [earnedBadges]);

    const handleNextStep = (nextStep: number) => {
        markStepCompleted(currentStep);
        setCurrentStep(nextStep);
    };
    
    const handlePrevStep = (prevStep: number) => {
        setCurrentStep(prevStep);
    };

    const handleCompleteAll = () => {
        markStepCompleted(currentStep);
        // Ensure all steps are marked as completed, including the final badge check
        for(let i=1; i<=7; i++) {
            markStepCompleted(i);
        }
        setTimeout(() => setShowCompletion(true), 500);
    };

    const handleAddPost = (text: string) => {
        if (!text.trim()) {
            showModal('Sila tulis sesuatu sebelum hantar!');
            return;
        }
        const newPost = {
            userName: userName || 'Pengguna Tanpa Nama',
            text,
            timestamp: new Date().toISOString()
        };
        const updatedPosts = dataService.addWallPost(newPost);
        setWallPosts(updatedPosts);
    };

    const handleSaveReflection = (reflection: {learning: string; nextSteps: string}) => {
         if (!reflection.learning.trim() || !reflection.nextSteps.trim()) {
            showModal('Sila lengkapkan kedua-dua bahagian refleksi!');
            return;
        }
        setUserData(prev => ({...prev, reflection: {...reflection, date: new Date().toISOString()}}));
        showModal('✅ Refleksi anda telah disimpan!');
    };

    const renderPage = () => {
        switch (page) {
            case Page.Start:
                return <StartPage userName={userName} onSaveUserName={handleSaveUserName} onStartTechnique={handleStartTechnique} onShowFaq={() => setPage(Page.Faq)} completedSteps={completedSteps} />;
            case Page.Formula:
                return <FormulaPage currentStep={currentStep} userData={userData} onDataChange={handleDataChange} onNextStep={handleNextStep} onPrevStep={handlePrevStep} onCompleteAll={handleCompleteAll} />;
            case Page.Flashcards:
                return <FlashcardsPage currentTechniqueId={currentStep} onBackToActivity={() => setPage(Page.Formula)} />;
            case Page.Faq:
                return <FaqPage onBackToHome={() => setPage(Page.Start)} />;
            case Page.Summary:
                return <SummaryPage userName={userName} userData={userData} completedSteps={completedSteps} wallPosts={wallPosts} onAddPost={handleAddPost} onSaveReflection={handleSaveReflection} showModal={showModal} onBackToActivity={() => setPage(Page.Formula)} />;
            default:
                return <StartPage userName={userName} onSaveUserName={handleSaveUserName} onStartTechnique={handleStartTechnique} onShowFaq={() => setPage(Page.Faq)} completedSteps={completedSteps} />;
        }
    };

    const showProgress = page === Page.Formula;

    return (
        <div>
            <Header />
            {showProgress && <ProgressBar currentStep={currentStep} completedSteps={completedSteps} userName={userName} earnedBadges={earnedBadges} />}
            <main className="max-w-6xl mx-auto p-6">
                {page !== Page.Start && page !== Page.Faq && <NavigationMenu page={page} onNavigate={handleNavigate} currentStep={currentStep} />}
                {renderPage()}
            </main>
            {achievementText && <AchievementNotification message={achievementText} onDismiss={() => setAchievementText(null)} />}
            {badgeNotification && <BadgeNotification badge={badgeNotification} onDismiss={() => setBadgeNotification(null)} />}
            {showCompletion && <CompletionCelebration onClose={() => { setShowCompletion(false); setPage(Page.Summary); }} />}
            <Modal isOpen={modal.isOpen} message={modal.message} onClose={() => setModal({ isOpen: false, message: '' })} />
        </div>
    );
};

export default App;