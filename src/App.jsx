import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderMegaMenu } from "./Components/Newnavbar";
import Home from "./Pages/Home";
import { DigitalLending } from "./Pages/DigitalLending";
import Kyc from "./Pages/Kyc";
import { NotFoundImage } from "./Components/Errorpage";

function App() {
  return (
    <BrowserRouter>
    <HeaderMegaMenu />

        <Routes>

          <Route path="/" element={ <Home/> } />
          <Route path="/digitalLending" element={ <DigitalLending/> } />
          <Route path="/kyc" element={ <Kyc/> } />
          <Route path="*" element={ <NotFoundImage/> } />

    
        </Routes>

    </BrowserRouter>
  );
}

export default App;
