import Navbar from "./Navbar/Navbar";
import "./All.css"
import Body from "./Components/Body";
import Services from "./Components/Services";
import AutoPlay from "./Components/Slider";
import Companions from "./Components/Companions";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <AutoPlay/>
      <Services/>
      <Companions/>
      <Footer/>
    </div>
  );
}

export default App;
