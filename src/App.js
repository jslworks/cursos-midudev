import { useState } from "react";
import { Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

export default function App() {
  // const [keyword, setKeyword] = useState('panda');
  return (
    <div className="App">
      <h1>Molto gif!</h1>
      <section className="App-content">
        <a href="/gif/panda">Gifs de pandas</a>
        <a href="/gif/ecuador">Gifs de Ecuador</a>
        <a href="/gif/chile">Gifs de Chile</a>
        <a href="/gif/colombia">Gifs de Colombia</a>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}
