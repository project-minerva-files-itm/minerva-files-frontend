import { useTranslation as originalUseTranslation, UseTranslationResponse } from 'react-i18next';

export const useTranslation = (): UseTranslationResponse<'translation', undefined> => {
    return originalUseTranslation();
};
