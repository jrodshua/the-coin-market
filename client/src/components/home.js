const Home = ({ handleData }) => {
  return (
    <div>
      <h2>Check Cryptocurrency prices</h2>
      <button onClick={handleData}>fetch data</button>
    </div>
  );
};

export default Home;
