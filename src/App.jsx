import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Education from './components/Education/Education'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner/Spinner'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);


  return (
    <div>
      {loading ? <Spinner /> :
        <div><Header />
          <Home />
          <Education />
          <Portfolio />
          <Contact />
          <Footer /></div>}

    </div>
  )
}

export default App