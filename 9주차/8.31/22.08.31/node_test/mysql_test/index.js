const express = require("express");
const cors = require("cors");
const { pool } = require("./db");
const morgan = require("morgan");
const app = express();
const PORT = 8080;

app.use(morgan("dev"));

//Post요청시 body 데이터(JSON)받아오는방법
app.use(express.json());
app.use(cors());
//해당 라우터 테스트
//1. 클라이언트예시 /api/menus
app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    // if (data[0]){
    //   return res.json(data[0])
    // }
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

app.post("/api/menus", async (req, res) => {
  try {
    //요청을 두가지 방식
    console.log(req.body);

    // const data = await pool.query(
    //   `
    //     INSERT INTO menus (menu_name, menu_description)
    //     VALUES
    //     ("${req.body.menu_name}", "${req.body.menu_description}")
    //   `
    // );
    const data = await pool.query(
      "INSERT INTO menus (menu_name,menu_description) VALUES (?, ?) ",
      [req.body.menu_name, req.body.menu_description]
    );
    return res.json(data);
    // return res.json(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
