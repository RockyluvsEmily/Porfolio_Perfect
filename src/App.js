
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Resume' element={<Resume />} />




      </Routes>

      
      
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
