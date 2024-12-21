import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./pages/SignIn";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
