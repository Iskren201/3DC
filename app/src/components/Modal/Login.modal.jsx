import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div
            id="modal-overlay"
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
            <div
                className="relative rounded-3xl p-8 w-96 shadow-2xl"
                style={{
                    background: 'linear-gradient(152.64deg, rgba(255, 255, 255, 0.3) 2.54%, rgba(153, 153, 153, 0.5) 96.85%)',
                    border: '1px solid #FFFFFF',
                }}
            >
                <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl hover:text-gray-400"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
