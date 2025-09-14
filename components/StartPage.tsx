import React, { useState } from 'react';
import { TECHNIQUES } from '../constants';

interface StartPageProps {
    userName: string;
    onSaveUserName: (name: string) => boolean;
    onStartTechnique: (step: number) => void;
    onShowFaq: () => void;
    completedSteps: Set<number>;
}

const NameInput: React.FC<{ userName: string, onSaveUserName: (name: string) => boolean }> = ({ userName, onSaveUserName }) => {
    const [name, setName] = useState(userName);
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        if (onSaveUserName(name)) {
            setIsSaved(true);
            setTimeout(() => setIsSaved(false), 2000);
        }
    };
    
    return (
         <div className="max-w-md mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">👋 Mari Berkenalan</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Anda:</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={isSaved ? `Selamat datang, ${name}! 🎉` : "Masukkan nama anda..."} 
                            disabled={isSaved}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                        />
                    </div>
                    <button onClick={handleSave} disabled={isSaved} className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 ${isSaved ? 'opacity-75' : ''}`}>
                        {isSaved ? '✅ Nama Disimpan' : '✅ Simpan & Teruskan'}
                    </button>
                </div>
            </div>
        </div>
    );
};


const TechniqueCard: React.FC<{ technique: any, isLocked: boolean, onClick: () => void }> = ({ technique, isLocked, onClick }) => (
    <div 
        className={`relative bg-gradient-to-br ${technique.gradient} text-white rounded-xl p-6 shadow-lg card-hover transition-all duration-300 ${isLocked ? 'opacity-60 grayscale cursor-not-allowed' : 'cursor-pointer'}`} 
        onClick={!isLocked ? onClick : () => {}}
        aria-disabled={isLocked}
    >
        {isLocked && <div className="absolute top-4 right-4 text-3xl opacity-80">🔒</div>}
        <div className="text-4xl mb-4">{technique.icon}</div>
        <h4 className="text-xl font-bold mb-2">{technique.title}</h4>
        <h5 className="text-lg font-semibold mb-3">{technique.subtitle}</h5>
        <p className="text-sm opacity-90">{technique.description}</p>
        {!isLocked && (
            <div className="mt-4 text-right">
                <span className="text-sm opacity-80">Klik untuk mula →</span>
            </div>
        )}
    </div>
);


const StartPage: React.FC<StartPageProps> = ({ userName, onSaveUserName, onStartTechnique, onShowFaq, completedSteps }) => {
    return (
        <div className="fade-in">
            <div className="text-center mb-12">
                <div className="bounce-in">
                    <div className="text-8xl mb-6">🏠</div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Selamat Datang!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Aplikasi ini akan membimbing anda melalui 7 langkah mudah untuk mencipta ebook interaktif yang menarik dan berkesan.
                    </p>
                    <NameInput userName={userName} onSaveUserName={onSaveUserName} />
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📖 7 Teknik Menulis Ebook Interaktif</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {TECHNIQUES.map(tech => {
                        const isLocked = tech.id > completedSteps.size + 1;
                        return (
                            <TechniqueCard 
                                key={tech.id} 
                                technique={tech} 
                                isLocked={isLocked}
                                onClick={() => onStartTechnique(tech.id)} 
                            />
                        );
                    })}
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6 shadow-lg card-hover cursor-pointer" onClick={onShowFaq}>
                        <div className="text-4xl mb-4">❓</div>
                        <h4 className="text-xl font-bold mb-2">FAQ</h4>
                        <h5 className="text-lg font-semibold mb-3">Soalan Lazim</h5>
                        <p className="text-orange-100 text-sm">Jawapan kepada soalan yang kerap ditanya tentang penulisan ebook interaktif.</p>
                        <div className="mt-4 text-right">
                            <span className="text-orange-200 text-sm">Klik untuk lihat →</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
