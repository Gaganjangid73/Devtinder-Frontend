import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Componet/Body";
import Login from "./Componet/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<div>Signup</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
