import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SearcBar from "./Components/SearcBar";

import About from "./Components/About";

import data from "./Data.json";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/about"
            element={<About placeholder={"Enter a book name..."} adat={data} />}
          />
          <Route
            path="/search"
            element={
              <SearcBar placeholder={"Enter a Book name..."} data={data} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
