const { a, b } = require("./member");
//모듈애서 다른 js파일을 가져올떄 확장자를 안쓰는 관습이 있다.

const result = {
  c : (a+b),
}

module.exports = result;
