import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {
  return (
    <div className="bg-gradient-to-br from-primary to-neutral h-screen flex flex-col font-thin">
        <Header/>
        <main className="w-screen grow px-2 md:px-8 lg:px-[10%] py-2 md:py-4 lg:py-8">
            <div className="bg-neutral/[.9] h-full rounded-box p-4">
                <Main />
            </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
