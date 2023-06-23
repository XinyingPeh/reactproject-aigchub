import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tools from "./components/Tools";
import Follow from "./components/Follow";
import Navigations from "./components/Navigations";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="app">
      <Navigations />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/tools" Component={Tools} />
        <Route path="/follow" Component={Follow} />
        <Route path="/contactus" Component={ContactUs} />
      </Routes>
    </div>
  );
}
export default App;