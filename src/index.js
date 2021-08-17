import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import {initReactI18next, I18nextProvider} from "react-i18next";
import ticketing_en from "./language/en/ticketing.json";
import ticketing_da from "./language/da/ticketing.json";

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: ticketing_en},
            da: {translation: ticketing_da},
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {escapeValue: false},
    });

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
