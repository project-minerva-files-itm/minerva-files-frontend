import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; // Asegúrate de que esto esté habilitado
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';

const resources = {
    en: { translation: en },
    es: { translation: es },
};

i18n
    .use(LanguageDetector)  // Detecta el idioma del navegador
    .use(initReactI18next)  // Esto es necesario si estás usando react-i18next
    .init({
        supportedLngs: ['en', 'es'],  // Idiomas soportados
        resources,
        fallbackLng: 'en',  // Idioma a usar si el idioma detectado no es soportado
        detection: {
            // Configuración adicional para mejorar la detección
            order: ['navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false, // React ya previene XSS por defecto
        },
    }).then(() => {
        console.log("i18next inicializado correctamente");
    })
    .catch((err) => {
        console.error("Error al inicializar i18next:", err);
    });

i18n.on('languageChanged', (lng) => {
    console.log(`El idioma detectado es: ${lng}`);
});

export default i18n;
