import React from 'react';
import { STEP_NAMES, BADGES } from '../constants';

interface ProgressBarProps {
    currentStep: number;
    completedSteps: Set<number>;
    userName: string;
    earnedBadges: Set<string>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, completedSteps, userName, earnedBadges }) => {
    const percentage = Math.round((completedSteps.size / 7) * 100);
    const userBadges = BADGES.filter(b => earnedBadges.has(b.id));

    return (
        <div className="bg-white shadow-sm p-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                        {userName ? `Selamat Belajar, ${userName}! 🌟` : 'Selamat Belajar!'}
                    </h3>
                    <p className="text-sm text-gray-600">Mari kita mulakan perjalanan penulisan ebook anda</p>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <span className="text-lg font-bold text-gray-800">Langkah {currentStep} daripada 7</span>
                        <p className="text-sm text-gray-600">{STEP_NAMES[currentStep]}</p>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">{percentage}%</span>
                        <p className="text-xs text-gray-500">Selesai</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                    {[...Array(7)].map((_, i) => {
                        const stepNum = i + 1;
                        const isCompleted = completedSteps.has(stepNum);
                        const isActive = stepNum === currentStep && !isCompleted;
                        return (
                            <React.Fragment key={stepNum}>
                                <div 
                                    className={`progress-step w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500 ${
                                        isCompleted ? 'bg-gradient-to-br from-green-500 to-emerald-600 scale-110 shadow-lg' : 
                                        isActive ? 'bg-gradient-to-br from-blue-500 to-indigo-600 active' : 
                                        'bg-gray-300'
                                    }`}
                                >
                                    {isCompleted ? '✓' : stepNum}
                                </div>
                                {stepNum < 7 && (
                                    <div className={`flex-1 h-1 mx-2 transition-all duration-500 ${completedSteps.has(stepNum) ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gray-300'}`}></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>

                {userBadges.length > 0 && (
                    <div className="mt-4 text-center border-t pt-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Lencana Dimenangi:</h4>
                        <div className="flex justify-center gap-4">
                            {userBadges.map(badge => (
                                <div key={badge.id} className="group relative">
                                    <span className="text-3xl cursor-default">{badge.icon}</span>
                                    <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none left-1/2 -translate-x-1/2">
                                        {badge.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
