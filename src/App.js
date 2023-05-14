import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Content from './Components/Content';
// import {Landing} from './Components/Landing';

import Contact from "./Pages/Contact";
import Services from './Pages/Services';
import Resume from './Pages/Resume';
import Portifolio from './Pages/Portifolio';
import Hireme from './Pages/Hireme';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />}> */}

        <Route path='/' element={<><Navbar /> <Main /> <Footer /> <Content /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/hireme" element={<Hireme/>} />
        <Route path="/portifolio" element={<Portifolio/>} />
        <Route path="/resume" element={<Resume/>} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
