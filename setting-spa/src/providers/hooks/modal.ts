import { ModalContextProps } from "bm-react-lib";
import { useContext } from "react";
import { ModalContext } from "../../context/modal_context";

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

