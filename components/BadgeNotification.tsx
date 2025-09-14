import React, { useEffect } from 'react';

interface BadgeNotificationProps {
    badge: {
        name: string;
        icon: string;
    };
    onDismiss: () => void;
}

const BadgeNotification: React.FC<BadgeNotificationProps> = ({ badge, onDismiss }) => {
    useEffect(() => {
        const timer = setTimeout(onDismiss, 5000); // Longer duration for badges
        return () => clearTimeout(timer);
    }, [onDismiss]);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className="fade-in bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-2xl border-2 border-white">
                <div className="flex items-center">
                    <div className="text-3xl mr-3 animate-bounce">{badge.icon}</div>
                    <div>
                        <h4 className="font-extrabold">Lencana Diperoleh!</h4>
                        <p className="text-sm font-semibold">{badge.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BadgeNotification;
