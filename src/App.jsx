import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { DigitalLending } from "./Pages/DigitalLending";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>

    </div>
 
      

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/DigitalLending" element={ <DigitalLending/> } />
          
          
        </Routes>

      
    
    </BrowserRouter>
  );
}

export default App;
