import React from "react";
import Home from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./pages/Singup";
import Blog from "./pages/Blog";
import Category from "./pages/Category";
import Login from "./pages/Login";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="category/:slug" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
