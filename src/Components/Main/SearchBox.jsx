import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <form className="searchBox" onSubmit={handleSearch}>
      <input
        type="text"
        className="search"
        placeholder="몬스터나 아이템 이름을 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="searchButton">
        🔍
      </button>
    </form>
  );
};

export default SearchBox;
