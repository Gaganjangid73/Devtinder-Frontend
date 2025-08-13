import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Componet/Body";
import Login from "./Componet/Login";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";


function App() {
  return (
    <Provider store={AppStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<div>Signup</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
