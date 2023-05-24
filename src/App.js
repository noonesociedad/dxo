import React from 'react'
import Header from './components/Header'
import './App.css';
import Banner from './components/Banner';
import Courses from './components/Courses';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Courses/>
      <Videos/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
