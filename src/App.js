import './App.css';
import {useState} from "react";

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import History from "./components/history";
import Hobbies from "./components/hobbies";
import Skills from "./components/skills";
import Cookies from 'universal-cookie';

const LANGS = ["en", "fr", "cn"];
export let cookie = new Cookies();

export function getDefaultLang() {
    let cookieLang = cookie.get('lang');

    if (LANGS.includes(cookieLang)) {
        return cookieLang;
    } else {
        return "en";
    }
}

function App() {
    //let cookieLang = cookie.get('lang');

    
    const [lang, setLang] = useState(getDefaultLang());

    // let defaultLang = "en";
    // if (cookieLang != null && LANGS.includes(cookieLang)) {
    //     defaultLang = cookieLang;
    // }

    // const [lang, setLang] = useState(defaultLang);

    function handleLanguage (langValue) {
        cookie.set("lang", langValue, {
            path: '/', // maxAge: 60 * 60 * 24 * 7,
            sameSite: 'lax'
        });
        setLang(langValue);
    }

    return (
        <div className="relative flex flex-col min-h-screen font-thin bg-gradient-to-b from-primary-focus to-secondary">
            <Header onSelectLanguage={handleLanguage} lang={lang}/>
            <main className="w-full grow">
                <Main lang={lang} />

                <div className="md:px-8 lg:px-[10%] md:py-8 lg:py-16">
                    <History lang={lang} />
                </div>
                <div className="md:px-8 lg:px-[10%] md:py-8 lg:py-16">
                    <Skills lang={lang} />
                </div>
                

            </main>
            <a href="#me" className="fixed btn btn-circle glass btn-sm bottom-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 11l7-7 7 7M5 19l7-7 7 7"/>
                </svg>
            </a>
            <Footer/>
        </div>
    );
}

export default App;
