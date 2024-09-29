import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/language_context";

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguageState] = useState<string>(i18n.language);

    const setLanguage = (language: string) => {
        setLanguageState(language);
        i18n.changeLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}