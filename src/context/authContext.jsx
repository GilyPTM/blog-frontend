import axios from "axios";
import { createContext, useEffect, useState } from "react";
import configData from "../config.json";
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const login = async (inputs) => {
    const res = await axios.post(
      configData.API_BASE_URL + "/users/" + "veifyLogin",
      inputs
    );
    setCurrentUser(res.data);
    localStorage.setItem("user", JSON.stringify(currentUser));
    setauthenticated(true);
    localStorage.setItem("authenticated", true);
  };

  const logout = async (inputs) => {
    alert("doriti sa va delogati?");
    const res = await axios.post(
      configData.API_BASE_URL + "/users/" + "logout"
    );
    setauthenticated(false);
    localStorage.setItem("authenticated", false);
    setCurrentUser(null);
    console.log(res.data);
  };

  useEffect(() => {
    // alert('context');
    if (currentUser != null) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
    } else {
      localStorage.setItem("user", null);
      setauthenticated(false);
      localStorage.setItem("authenticated", false);
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
