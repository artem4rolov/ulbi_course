import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        // have a common namespace used around the full app
        ns: ['translationsNS'],
        defaultNS: 'translationsNS',
        debug: false,
    });

export {i18n as is18nForTests};