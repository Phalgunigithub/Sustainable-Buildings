import { useState } from "react";
import { Card } from "./components/Card";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { NotFound } from "./components/NotFound";
import { Window } from "./components/Window";
import Home from "./components/Home";
import { Favorites } from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/cards"
          element={
            <Card
              imgSrc="https://picsum.photos/200/300"
              title="Title"
              description="this is very long description"
              link="card page"
              id="1"
            ></Card>
          }
        ></Route>

        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        
        <Route path="/popup" element={<Window></Window>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
