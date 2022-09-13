const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    //업로드 되는 파일 저장의 목적지
    destination: (req,file,done) => {
        done(null,"public/")
    },
    // 업로드 되는 파일의 이름 지정
    filename: (req,file,done) => {
        done(null,file.originalname)
    },
    //업로드 되는 파일의 사이즈 limit
    // limits: {},
  }),
});

const PORT = 8080;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//public 경로로 오면 express의 public폴더를 보여주겠다
app.use("/public", express.static("public"));

//upload.single('key값')

app.post("/api/file",upload.single('file'),(req,res)=>{
    return res.json({test: "OK"})
})

app.listen(PORT, () => console.log(`${PORT} 가동중`));
