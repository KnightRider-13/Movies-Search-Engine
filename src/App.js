import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MoviesInfo from "./Pages/MovieInfo";

function App() {

  return (
    <Router>
    <div className="App">
     <Nav />
     <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/movies" exact element={<Movies />}></Route>
      <Route path="/:id" element={<MoviesInfo />}></Route>
     </Routes>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
