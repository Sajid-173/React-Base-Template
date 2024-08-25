import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import AppLayout from "./Pages/AppLayout";


const App = () => {

  return (
    <div
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        background: "whitesmoke",
        height: "100%",
      }}
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
