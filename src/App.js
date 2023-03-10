import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
        <Navbar/>
        <Container customClass="min-height">
          <Routes >
            <Route path='/' element={<Home/>}></Route>
            <Route path='/company' element={<Company/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/newproject' element={<NewProject/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
          </Routes>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
