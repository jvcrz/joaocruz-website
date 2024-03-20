import './App.css';
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ActiveLinkProvider } from './components/context/ActiveLinkContext';



import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './Pages/home'
import About from './Pages/about'
import Contact from './Pages/contact'



function App() {
  return (
    <ActiveLinkProvider> {}
      <BrowserRouter>
        <Navbar />
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ActiveLinkProvider> 
  );
}

export default App;
