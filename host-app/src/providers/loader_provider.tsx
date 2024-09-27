import React, { useState, ReactNode } from 'react';
import { LoaderContext } from '../context/loader_context';


export const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};