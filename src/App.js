import "./App.css";
import Monster from "./routes/Monster";
import Item from "./routes/Item";
import Main from "./routes/Main";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-main">
          YETI.GG
        </a>
        <a href="/monster">Monster</a>
        <a href="/item">Item</a>
      </nav>

      <div className="container">
        <></>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/monster" element={<Monster />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
