import {BrowserRouter} from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Trainers from './pages/trainers/Trainers';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import NoFound from './pages/noFound/NoFound';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
        <Trainers/>
        <Gallery/>
        <NoFound/>
        <Plans/>
      </BrowserRouter>
      
    </>
  )
}

export default App