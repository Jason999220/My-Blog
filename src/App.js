import "./css/app.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Leetcode from "./pages/Leetcode";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="container">
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/project"} element={<Project />}></Route>
          <Route path={"/leetcode"} element={<Leetcode />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
