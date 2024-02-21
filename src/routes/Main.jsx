const Main = () => {
  return (
    <>
      <div className="bg-container">
        <h1 className="main-title">YETI.GG</h1>
        <img src="/yeti.png" alt="yeti" className="yeti" />
        <input
          type="text"
          className="search"
          placeholder="몬스터나 아이템 이름을 입력하세요🔍"
        />
      </div>
    </>
  );
};

export default Main;
