import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Body from "./Componet/Body";
import Login from "./Componet/Login";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";
import Feed from "./Componet/Feed";
import Profile from "./Componet/profile";


function App() {
  return (
    <Provider store={AppStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Navigate to="feed" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="feed" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="signup" element={<div>Signup</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
