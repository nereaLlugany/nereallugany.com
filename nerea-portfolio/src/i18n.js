import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translation using http -> see /public/locales
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'ca', 'zh', 'ko'],
    
    // Path where resources get loaded from
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    interpolation: {
      escapeValue: false, // React handles escaping
    },
    
    // React Suspense is needed for the backend to work properly
    react: {
      useSuspense: true, 
    }
  });

export default i18n;