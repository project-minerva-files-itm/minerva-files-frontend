import { LoaderContextProps } from "bm-react-lib";
import { useContext } from "react";
import { LoaderContext } from "../../context/loader_context";


export const useLoader = (): LoaderContextProps => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};



