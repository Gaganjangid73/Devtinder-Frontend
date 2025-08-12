
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Componet/Body";

function App() {
  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>} /> 

    </Routes>
    
    </BrowserRouter>
    {/* <Navbar/> */}
    </>
  );
}

export default App;
