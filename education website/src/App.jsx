import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonails/Testimonials";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle='Testimonails' title='What Students Say' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch' /> 
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
