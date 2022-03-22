import { useState } from "react";
import { Link, Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

export default function App() {
  // const [keyword, setKeyword] = useState('panda');
  return (
    <div className="App">
      <h1>Molto gif!</h1>
      <section className="App-content">
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/ecuador">Gifs de Ecuador</Link>
        <Link to="/gif/chile">Gifs de Chile</Link>
        <Link to="/gif/colombia">Gifs de Colombia</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}
