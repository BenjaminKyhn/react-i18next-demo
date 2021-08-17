import './App.css';
import {useTranslation, Trans, initReactI18next} from "react-i18next";
import React, { useState, Suspense } from "react";
import i18next from "i18next";

const App = () => {
    const { t } = useTranslation();
    const [count, setCount] = useState(0);
    const onChange = (event) => {
        i18next.changeLanguage(event.target.value);
        setCount((previousCount) => previousCount + 1);
    };
    return (
        <Suspense fallback={"Loading..."}>
            <div className="App">
                <header className="App-header">
                    <h1>{t("reminder.title", {module: 'ticketing'})}</h1>
                    <p>
                        <Trans components={{ bold: <strong />, italic: <i /> }}>
                            sample-text
                        </Trans>
                    </p>
                    <p>
                        <Trans count={count}>
                            changed
                        </Trans>
                    </p>
                    <p>{t("changed", { count })}</p>
                    <select name="language" onChange={onChange}>
                        <option value="en">English</option>
                        <option value="da">Danish</option>
                    </select>
                </header>
            </div>
        </Suspense>
    );
};

export default App;
