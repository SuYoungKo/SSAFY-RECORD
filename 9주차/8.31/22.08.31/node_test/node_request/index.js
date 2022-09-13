const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const PORT = 8080;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//모든 유저에 대한 정보
// app.get("/api/users");

//:id 유저에 대한 정보

app.get("/api/users/:id", (req, res) => {
  //path(http명칭 ) -params(express에서 답기는 값)에 담긴다
  console.log(req.params);

  console.log(req.query);
  return res.json({
    params: req.params,
    query: req.query,
  });
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  return res.json({
    body: req.body,
  });
});

//body의 데이터를 받아오기 위한 셋팅

app.listen(PORT, () => console.log(`${PORT} 가동중`));
