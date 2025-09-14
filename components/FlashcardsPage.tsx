import React, { useState } from 'react';
import { FLASHCARD_DATA } from '../constants';

interface FlashcardProps {
    card: { q: string; a: string; q_grad: string; a_grad: string };
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="flashcard-container h-52 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                <div className={`flashcard-front bg-gradient-to-br ${card.q_grad} text-white rounded-xl p-6 shadow-lg`}>
                    <div className="text-center">
                        <div className="text-4xl mb-4">❓</div>
                        <h3 className="text-lg font-bold mb-4">Soalan</h3>
                        <p className="opacity-90">{card.q}</p>
                    </div>
                </div>
                <div className={`flashcard-back bg-gradient-to-br ${card.a_grad} text-white rounded-xl p-6 shadow-lg`}>
                    <div className="text-center">
                        <div className="text-4xl mb-4">✅</div>
                        <h3 className="text-lg font-bold mb-4">Jawapan</h3>
                        <p className="opacity-90">{card.a}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface FlashcardsPageProps {
    currentTechniqueId: number;
    onBackToActivity: () => void;
}

const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ currentTechniqueId, onBackToActivity }) => {
    const data = FLASHCARD_DATA[currentTechniqueId];

    if (!data) {
        return (
            <div className="fade-in">
                 <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                    <div className="text-5xl mb-4">🚧</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Flashcard Tidak Tersedia</h3>
                    <p className="text-gray-600">Flashcard untuk teknik ini masih dalam pembangunan.</p>
                </div>
                <div className="text-center mt-8">
                     <button onClick={onBackToActivity} className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        ↩️ Kembali ke Aktiviti
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h2>
                <p className="text-gray-600">Klik pada kad untuk melihat jawapan</p>
            </div>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {data.cards.map((card, index) => (
                    <Flashcard key={index} card={card} />
                ))}
            </div>

            <div className="text-center mt-8">
                <button onClick={onBackToActivity} className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    ↩️ Kembali ke Aktiviti
                </button>
            </div>
        </div>
    );
};

export default FlashcardsPage;
