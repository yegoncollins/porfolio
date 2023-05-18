import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer"




function App() {
  return (
    
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>



      <Sociallinks/>
    </div>
  );
}

export default App;
