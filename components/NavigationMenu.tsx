
import React from 'react';
import { Page } from '../types';

interface NavigationMenuProps {
    page: Page;
    onNavigate: (page: Page) => void;
    currentStep: number;
}

const NavButton: React.FC<{
    label: string, 
    icon: string, 
    isActive: boolean, 
    onClick: () => void,
    activeClasses: string,
    inactiveClasses: string
}> = ({ label, icon, isActive, onClick, activeClasses, inactiveClasses }) => (
    <button onClick={onClick} className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 border-b-4 ${isActive ? activeClasses : inactiveClasses}`}>
        <div className="text-2xl mb-1">{icon}</div>
        <div className="text-sm">{label}</div>
    </button>
);


const NavigationMenu: React.FC<NavigationMenuProps> = ({ page, onNavigate }) => {
    return (
        <div className="fade-in">
            <div className="bg-white shadow-lg rounded-xl mb-8 overflow-hidden">
                <div className="flex">
                    <NavButton
                        label="Utama"
                        icon="🏠"
                        isActive={page === Page.Formula}
                        onClick={() => onNavigate(Page.Start)}
                        activeClasses="border-gray-400 bg-gray-100 text-gray-700"
                        inactiveClasses="border-transparent hover:bg-gray-50 text-gray-600"
                    />
                    <NavButton
                        label="Flashcard"
                        icon="🎯"
                        isActive={page === Page.Flashcards}
                        onClick={() => onNavigate(Page.Flashcards)}
                        activeClasses="border-purple-600 bg-purple-500 text-white"
                        inactiveClasses="border-transparent hover:bg-purple-50 text-gray-600"
                    />
                    <NavButton
                        label="Rumusan"
                        icon="📊"
                        isActive={page === Page.Summary}
                        onClick={() => onNavigate(Page.Summary)}
                        activeClasses="border-indigo-600 bg-indigo-500 text-white"
                        inactiveClasses="border-transparent hover:bg-indigo-50 text-gray-600"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;