import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import History from "./components/history";
import Tibistory from "./components/tibistory";
import Hobbies from "./components/hobbies";
import {useState} from "react";


const langs = ["en", "fr", "cn"]
let random = Math.floor(Math.random() * langs.length);

function changeLanguage() {
    random = random + 1
    return langs[random % langs.length]
}

function App() {
    const [lang, setLang] = useState(changeLanguage())

    function handleLanguage (langValue) {
        setLang(langValue);
    }

    return (
        <div className="relative bg-gradient-to-b from-primary-focus to-secondary min-h-screen flex flex-col font-thin">
            <Header onSelectLanguage={handleLanguage} lang={lang}/>
            <main className="w-full grow">
                <Main name="Wenyi" />

                <div className="md:px-8 lg:px-[10%] md:py-4 lg:py-8">
                    <div className="bg-secondary/75 grid grid-cols-1 gap-24">
                        <History lang={lang} />
                        <Hobbies />
                        <button onClick={() => setLang(changeLanguage)} className="btn btn-accent">Click me</button>

                        <Tibistory lang={lang} />
                    </div>
                </div>
            </main>
            <a href="#top" className="btn btn-circle glass btn-sm fixed bottom-8 right-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 11l7-7 7 7M5 19l7-7 7 7"/>
                </svg>
            </a>
            <Footer/>
        </div>
    );
}

export default App;
