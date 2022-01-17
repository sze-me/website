import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Manatee from "../Manatee/Manatee";
import Narwhal from "../Narwhal/Narwhal";
import Whale from "../Whale/Whale";
import NotFound from "../NotFound/NotFound";

function App() {
  const birds = useSelector((state) => state.birds);
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      {/* Anything outside of this BrowserRouter component will render on every page.
      in adiition, if there is site--wide context or Link store like Redux, place that outside the Router*/}
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Manatee</Link>
            </li>
            <li>
              <Link to="/narwhal">Narwhal</Link>
            </li>
            <li>
              <Link to="/whale">Whale</Link>
            </li>
            <li>
              <Link to="/whale/beluga">Beluga Whale</Link>
            </li>
            <li>
              <Link to="/whale/blue">Blue Whale</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route path="/narwhal" element={<Narwhal />} />
          <Route path="/whale/*" element={<Whale />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>Views: {bird.views}</div>
            <button>
              <span role="img" aria-label="add">
                ➕
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
