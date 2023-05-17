import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio"



function App() {
  return (
    
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>



      <Sociallinks/>
    </div>
  );
}

export default App;
