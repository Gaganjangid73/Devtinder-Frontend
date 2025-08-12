import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("gaganjangid02@gmail.com");
  const [password, setPassword] = useState("Athrav@122");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId :Email,
        password:password,
      },{withCredentials:true});
    //   console.log(res.data); // Optional: log response
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center my-16">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">Login</h2>
          <div className="pt-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">E-mail</legend>
              <input
                type="email"
                value={Email}
                className="input"
                placeholder="xyz@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center pt-5">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
