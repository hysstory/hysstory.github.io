import AnimatedCursor from 'react-animated-cursor'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="app">
      <AnimatedCursor color='128, 128, 128' />
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
