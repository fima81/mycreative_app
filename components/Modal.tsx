
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-sm mx-4 text-center bounce-in shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pemberitahuan</h3>
                <p className="text-gray-600 mb-6">{message}</p>
                <button onClick={onClose} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Tutup</button>
            </div>
        </div>
    );
};

export default Modal;
