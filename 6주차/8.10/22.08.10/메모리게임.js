// const flip = (location) => {
//   console.log(location);
// };

const cardArray = [
  {
    name: "1",
    img: "./img/1.jpg",
    id: null,
    done: false,
  },
  {
    name: "1",
    img: "./img/2.jpg",
    id: null,
    done: false,
  },
  {
    name: "2",
    img: "./img/3.jpg",
    id: null,
    done: false,
  },
  {
    name: "2",
    img: "./img/4.jpg",
    id: null,
    done: false,
  },
  {
    name: "3",
    img: "./img/5.jpg",
    id: null,
    done: false,
  },
  {
    name: "3",
    img: "./img/6.jpg",
    id: null,
    done: false,
  },
  {
    name: "4",
    img: "./img/7.jpg",
    id: null,
    done: false,
  },
  {
    name: "4",
    img: "./img/8.jpg",
    id: null,
    done: false,
  },
  {
    name: "5",
    img: "./img/9.jpg",
    id: null,
    done: false,
  },
  {
    name: "5",
    img: "./img/10.jpg",
    id: null,
    done: false,
  },
  {
    name: "6",
    img: "./img/11.jpg",
    id: null,
    done: false,
  },
  {
    name: "6",
    img: "./img/12.jpg",
    id: null,
    done: false,
  },
];

const gameDOM = [];

const getGameDOM = () => {
  // console.log("getGameDOM 함수 실행");
  const rows = document.querySelectorAll(".row"); // ".containor.row" // ".column"
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
    // DOM정보를 변수로 가져온거면 이후 document를 안쓰고 DOM조작 가능 (querySelectorAll 가능)
    // gameDOM으로 다시 받아서 앞으로는 gameDOM에 접근해서 DOM조작을 할 수 있음
  }
  //console.log(rows);
  //console.log(gameDOM); // 단순히 복사된 변수가 아님
};

const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
};

let clickFirst = -1;
let clickSecond = -1;
let clickCount = 0;
let cnt = 0;

const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./img/물음표.jpg");
      gameDOM[i][j].appendChild(card);
    }
  }
};

const setClickHistory = (location) => {
  if (clickFirst == -1) {
    clickFirst = location;
  } else {
    clickSecond = location;
  }
};

const backFlip = () => {
  const parsedIdFirst = cardArray[clickFirst].id.split("-");
  const parsedIdSecond = cardArray[clickSecond].id.split("-");
  setTimeout(() => {
    gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src =
      "./img/물음표.jpg";
    gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
      "./img/물음표.jpg";
  }, 500);
};

const isCorrect = () => {
  if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
    cardArray[clickFirst].done = true;
    cardArray[clickSecond].done = true;
    cnt++;
    console.log(cnt);
    

  } else {
    console.log("X");
    backFlip();
  }
};

const flip = (location) => {
  if (!cardArray[location].done) {
    setClickHistory(location);

    // console.log(cardArray[location].id.split("-"));

    const parsedId = cardArray[location].id.split("-");
    gameDOM[parsedId[0]][parsedId[1]].querySelector("img").src =
      cardArray[location].img;

    clickCount++;
    if (clickCount === 2) {
      clickCount = 0;
      isCorrect();
      
    }

    console.log(clickCount);

    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1;
      clickSecond = -1;
    }
  }

  if (cnt === 6) {
    alert("완성!");
  }
};

//======프로그램 시작 ======================
getGameDOM();
cardArray.sort(() => 0.5 - Math.random());
setIDtoCardArray(cardArray);
createBoard();
