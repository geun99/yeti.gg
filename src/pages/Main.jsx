import SearchBox from "../Components/Main/SearchBox";

const Main = () => {
  return (
    <>
      <div className="bg-container">
        <h1 className="main-title">YETI.GG</h1>
        <img src="/yeti.png" alt="yeti" className="yeti" />
        <SearchBox />
      </div>
    </>
  );
};

export default Main;
