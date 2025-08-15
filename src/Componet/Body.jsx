import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/UserSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((store) => store.data);
  const fetchuser = async () => {
    if(User) return;
    try {
         const res = await axios.get(BASE_URL + "/profile", {
          withCredentials: true,
        });
        dispatch(addUser(res.data));
      
    } catch (err) {
      navigate("/login");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchuser();
  }, []);
 
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
