import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="h-screen flex flex-col font-thin bg-gradient-to-br from-primary to-secondary-focus">
        <Header/>
        <main className="w-screen grow bg-gradient-to-r from-primary to-secondary px-2 md:px-8 lg:px-[10%] py-2 md:py-4 lg:py-8">

        </main>
        <Footer/>
    </div>
  );
}

export default App;
