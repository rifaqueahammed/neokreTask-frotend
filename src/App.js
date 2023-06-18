import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Authorization from "./Validaion/Authorization";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Authorization><Login/></Authorization>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/profile" element={<Authorization><Profile/></Authorization>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
