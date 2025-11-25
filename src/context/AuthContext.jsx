import React, { createContext, useContext, useEffect, useState } from "react";
import { save, load, remove } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => load("smartshop_user", null));
  const navigate = useNavigate();

  useEffect(() => {
    save("smartshop_user", user);
  }, [user]);

  const login = async ({ email, password }) => {
    // MOCK authentication
    // In real app call backend to validate and get JWT
    if (!email || !password) throw new Error("Invalid credentials");

    const fakeToken = "jwt-" + Math.random().toString(36).slice(2);
    const u = { email, token: fakeToken, name: email.split("@")[0] };
    setUser(u);
    return u;
  };

  const logout = () => {
    setUser(null);
    remove("smartshop_user");
    navigate("/");
  };

  const register = async ({ email, password }) => {
    // Mock register — simply logs in
    return login({ email, password });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
