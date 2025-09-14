
import React, { useEffect } from 'react';

interface AchievementNotificationProps {
    message: string;
    onDismiss: () => void;
}

const AchievementNotification: React.FC<AchievementNotificationProps> = ({ message, onDismiss }) => {
    useEffect(() => {
        const timer = setTimeout(onDismiss, 4000);
        return () => clearTimeout(timer);
    }, [onDismiss]);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className="fade-in bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                    <div className="text-2xl mr-3">🎉</div>
                    <div>
                        <h4 className="font-bold">Tahniah!</h4>
                        <p className="text-sm">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementNotification;
