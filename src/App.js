import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/navbar";
// import About from "./Components/about";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
      <div className="AppWrapper">
       <Home />
        <Navbar />
        {/* <About/> */}
        <Contact/>
       
      </div>
    </div>
  );
}

export default App;
