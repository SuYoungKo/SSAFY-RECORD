const express = require("express");
const app = express();

const PORT = 8080;
const cors = require("cors");
const { info } = require("console");
app.use(cors());

const infos = [
  {
    name : "kosu",
    age : 18,
  },
  {
    name : "ww",
    age : 1128,
  },
  {
    name : "asd",
    age : 1833,
  }
]

app.get("/api/names", (req, res) => { 
  const names = infos.map((info) =>info.name);
  return res.json(names);
});

app.get("/api/ages", (req, res) => { 
  const names = infos.map((info) =>info.age);
  return res.json(names);
});

app.get("/infos/:id", (req, res) => { 
  const id = Number(req.params.id)
  {
    return res.json(infos[id])
  }
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
