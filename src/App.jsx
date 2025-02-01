import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about';
import Animation from './components/Animation';


 
 
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Animation />} />
     
      </Routes>
    </Router>
    </>
  )
}

export default App
