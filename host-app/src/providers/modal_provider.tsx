import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ModalState {
    isOpen: boolean;
    data?: unknown;
}

export interface ModalContextProps {
    modalState: { [key: string]: ModalState };
    openModal: (modalName: string, data?: unknown) => void;
    closeModal: (modalName: string, data?: unknown) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

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


export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
