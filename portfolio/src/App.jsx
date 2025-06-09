import { Route,Routes } from "react-router-dom"
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Footer from "./components/footer/Footer"
function App() {

  return (

    <>
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
