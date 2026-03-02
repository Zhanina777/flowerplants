//import './App.css'
//import Header from './components/Header';
//import Footer from './components/Footer';
//import { Routes, Route } from 'react-router-dom';
//import About from './views/About';
//import Plants from './views/Plants';
//import DefaultPage from './views/DefaultPage';

//function App() {
  //return (
    //<>
      //<Header />
      //<div style={{ margin: '7rem 0 7rem 0' }}>
        //<Routes>
          //<Route path="/" element={<DefaultPage />} />
          //<Route path="/plants" element={<Plants />} />
          //<Route path="/about" element={<About />} />
        //</Routes>
      //</div>
      //<Footer />
    //</>
  //);
//}

//export default App
// in App.jsx or main.jsx

import Header from './components/Header';
import Footer from './components/Footer';
import DefaultPage from './views/DefaultPage';
import Plants from './views/Plants';
import About from './views/About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ margin: '7rem 0 7rem 0' }}>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;