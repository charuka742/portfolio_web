import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Content from './Components/Content';
// import {Landing} from './Components/Landing';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />}> */}

        <Route index element={<Navbar />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/content" element={<Content />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
