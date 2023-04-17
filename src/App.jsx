import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import { DigitalLending } from "./Pages/DigitalLending";
import Kyc from "./Pages/Kyc";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digitalLending" element={<DigitalLending />} />
        <Route path="/kyc" element={<Kyc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
