require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const KEY = process.env.CMC_API_KEY;
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api/coins", (req, res) => {
  axios({
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": KEY,
    },
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  }).then((response) => res.send(response.data));
});

app.listen(PORT, () => {
  console.log("server listening on 3001");
});
