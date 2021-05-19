import { useState } from "react";
import Home from "./home";

const CoinIndex = () => {
  const [data, setData] = useState(null);

  const handleData = async () => {
    const result = await fetch("/api/coins", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setData(result.data);
  };

  if (!data) {
    return <Home handleData={handleData} />;
  }

  return (
    <div>
      <h1>data received</h1>
      <button onClick={() => console.log(data)}>test data</button>
    </div>
  );
};

export default CoinIndex;
