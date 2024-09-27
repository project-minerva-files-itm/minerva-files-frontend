import { ModalContextProps } from 'bm-react-lib';
import { createContext } from 'react';

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);