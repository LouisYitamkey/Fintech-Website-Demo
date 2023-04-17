import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { DigitalLending } from "./Pages/DigitalLending";
import Kyc from "./Pages/Kyc";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/digitalLending" element={ <DigitalLending/> } />
          <Route path="/kyc" element={ <Kyc/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
