import React, { useState, ReactNode } from 'react';
import { ModalContext } from '../context/modal_context';

export interface ModalState {
    isOpen: boolean;
    data?: unknown;
}

export interface ModalContextProps {
    modalState: { [key: string]: ModalState };
    openModal: (modalName: string, data?: unknown) => void;
    closeModal: (modalName: string, data?: unknown) => void;
}

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalState, setModalState] = useState<{ [key: string]: ModalState }>({ "": { isOpen: false, data: null } });

    const openModal = (modalName: string, data?: unknown) => setModalState(prev => ({ ...prev, [modalName]: { isOpen: true, data: data } }));
    const closeModal = (modalName: string, data?: unknown) => setModalState(prev => ({ ...prev, [modalName]: { isOpen: false, data: data } }));

    return (
        <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};


