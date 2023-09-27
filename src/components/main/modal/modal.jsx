import React from 'react';

function Modal({ isOpen, onClose, imageUrl, altText, description}) {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={stopPropagation}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={imageUrl} alt={altText} />
                <p className="modal-description">{description}</p>
            </div>
        </div>
    );
}

export default Modal;