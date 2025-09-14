
import React, { useEffect } from 'react';

interface CompletionCelebrationProps {
    onClose: () => void;
}

const CompletionCelebration: React.FC<CompletionCelebrationProps> = ({ onClose }) => {
    
    useEffect(() => {
        const confettiContainer = document.createElement('div');
        document.body.appendChild(confettiContainer);
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.zIndex = '9999';
                confetti.style.pointerEvents = 'none';
                confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
                
                const style = document.createElement('style');
                style.innerHTML = `
                  @keyframes fall {
                    to {
                      transform: translateY(100vh) rotate(${Math.random() * 720}deg);
                      opacity: 0;
                    }
                  }
                `;
                document.head.appendChild(style);
                confetti.appendChild(style);
                confettiContainer.appendChild(confetti);

                setTimeout(() => confetti.remove(), 4000);
            }, i * 50);
        }

        return () => {
            confettiContainer.remove();
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center bounce-in">
                <div className="text-8xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">HEBAT SEKALI!</h3>
                <p className="text-gray-600 mb-6">Anda telah berjaya menyelesaikan kesemua 7 teknik penulisan ebook interaktif!</p>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg mb-6">
                    <div className="text-4xl mb-2">🏆</div>
                    <div className="font-bold text-lg">EBOOK MASTER</div>
                    <div className="text-sm">Pencapaian Tertinggi Dibuka!</div>
                </div>
                <button onClick={onClose} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all">
                    Lihat Rumusan Lengkap 📊
                </button>
            </div>
        </div>
    );
};

export default CompletionCelebration;
