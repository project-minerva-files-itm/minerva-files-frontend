import { ThemeContextProps } from "bm-react-lib";
import { useContext } from "react";
import { DarkContext } from "../../context/dart_context";


export const useTheme = (): ThemeContextProps => {
    const context = useContext(DarkContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};



