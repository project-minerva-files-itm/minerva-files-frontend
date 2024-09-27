import { LoaderContextProps } from 'bm-react-lib';
import { createContext } from 'react';

export const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);
