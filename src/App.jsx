import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Search from "./components/Search";
import "./App.css"
import { useState } from "react";
import More from "./components/Movies/MovieDetail";

export default function App() {

  const [films, setFilms] = useState();
  

  return (
    <Router>
      <div>
        <h1>Movies</h1>
        <Search setFilms={setFilms}/>
        <Routes>
          <Route path="/" element={<Movies movies={ films }/>} />
          <Route path="/:id" element={<More />}/>
        </Routes>
      </div>
    </Router>
  );
}
