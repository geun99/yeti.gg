import "./App.css";
import Monster from "./pages/Monster";
import Item from "./pages/Item";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import MonsterDetail from "./pages/MonsterDetail";
import ItemDetail from "./pages/ItemDetail";
import Navbar from "./Components/Common/Navbar";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/monster" element={<Monster />} />
        <Route path="/monster/:monsterId" element={<MonsterDetail />} />
        <Route path="/item/:itemId" element={<ItemDetail />} />
        <Route path="/item" element={<Item />} />
        <Route path="/search/:search" element={<SearchResult />} />
      </Routes>
    </div>
  );
};

export default App;
