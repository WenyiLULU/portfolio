import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import History from "./components/history";
import Tibistory from "./components/tibistory";
import Hobbies from "./components/hobbies";

function App() {
  return (
    <div className="relative bg-gradient-to-b from-secondary-focus to-secondary min-h-screen flex flex-col font-thin">
        <Header/>
        <main className="w-full grow">
            <Main name="Wenyi" />

            <div className="md:px-8 lg:px-[10%] md:py-4 lg:py-8"> <div className="bg-primary-focus grid grid-cols-1 gap-24">
                <History />
                <Hobbies />
                <Tibistory />
            </div></div>
        </main>
        <a href="#top" className="btn btn-outline btn-circle btn-primary btn-sm fixed bottom-4 right-4">
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
