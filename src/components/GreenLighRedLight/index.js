import { useState, useEffect } from "react";
import NavBar from "../NavBar";
import LeaderBoard from "../LeaderBoard";
import "./index.css";
import React from "react";

let timeInterval;
let v;
const colorItems = ["red", "green"];
const levelIndex = { easy: 10, medium: 15, hard: 25 };

const GreenLightRedLight = () => {
  const [timer, setTimer] = useState(40);
  const [reg, setReg] = useState(true);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [isgame, setIsGame] = useState(true);
  const [index, setIndex] = useState(1);
  const [scoreList, setScoreList] = useState([]);

  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    level: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const userRegDetails = () => {
    let isUser = scoreList.some((e) => e.name === data.username);
    if (!isUser) {
      setScoreList([
        ...scoreList,
        { name: data.username, score: score, level: data.level },
      ]);
    }
  };

  const dataSubmit = (e) => {
    e.preventDefault();
    if (!data.username || !data.email || !data.mobile || !data.level) {
      alert("Please fill in all fields");
      return;
    }

    clearInterval(timeInterval);
    timerFunc();
    setReg(false);
    userRegDetails();
  };

  const registerForm = () => {
    return (
      <div className="style-class">
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center pb-4">
            <div class="card card-1  w-75 mt-5 shadow ">
              <div class="row justify-content-center">
                <div class="col-11 col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mt-auto">
                  <p class="text-center fw-bold h3 mx-1 mx-md-4">
                    Register Here
                  </p>

                  <form class="mx-md-4" onSubmit={dataSubmit}>
                    <div class="d-flex flex-row align-items-center mt-auto mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="username"
                        onChange={handleChange}
                        value={data.username}
                      />
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder=" Your Email"
                        onChange={handleChange}
                        value={data.email}
                      />
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        placeholder="Mobile Number"
                        onChange={handleChange}
                        value={data.mobile}
                      />
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <select
                        className="form-control"
                        onChange={handleChange}
                        value={data.level}
                        name="level"
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>

                    <div class="d-flex justify-content-center mb-1  mb-lg-4">
                      <button type="submit" class="btn btn-primary mb-2 mt-3">
                        Start Game
                      </button>
                    </div>
                  </form>
                </div>
                <div class=" col-11 col-md-10 col-lg-5 col-xl-7 d-flex align-items-center order-1 order-lg-2 w-100">
                  <img
                    src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?size=626&ext=jpg&ga=GA1.1.1581710395.1680750078&semt=sph"
                    class="w-100"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gameFun = () => {
    return (
      <>
        <div className="d-flex justify-content-end mt-3 mr-5">
          <LeaderBoard scoreList={scoreList} />
        </div>
        {isgame ? (
          <div className=" parent col-11 col-lg-12 d-flex flex-column justify-content-center align-items-center ">
            <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: colorItems[index],
                cursor: "pointer",
              }}
              onClick={boxClick}
              className="box-class mt-5"
            ></div>
          </div>
        ) : (
          <div>{win ? WonGame() : lostGame()}</div>
        )}
      </>
    );
  };

  const timerFunc = () => {
    timeInterval = setInterval(() => {
      setIndex(Math.floor(Math.random() * 2));

      setTimer((prevState) => {
        if (prevState == 0) {
          clearInterval(timeInterval);
          setTimer(40);
          setWin(false);
          setIsGame(false);
        } else {
          return prevState - 1;
        }
      });
    }, 1000);
  };

  const userUpdate = () => {
    v = scoreList.map((e) => {
      if (e.name === data.username) {
        if (e.score < score) {
          return { ...e, score: score, level: data.level };
        }
      }
      return e;
    });

    setScoreList(v);
  };

  const boxClick = () => {
    if (colorItems[index] === "green") {
      setScore(score + 1);
      console.log("index");
      if (score >= levelIndex[data.level]) {
        console.log("win");
        setWin(true);
      }
    } else {
      setIsGame(false);
      clearInterval(timeInterval);
      userUpdate();
      setTimer(40);
      userRegDetails();
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setTimer(0);
      setIsGame(false);
      setWin(false);
    }
  }, []);

  const lostGame = () => {
    return (
      <>
        <div className="d-flex  justify-content-center align-items-center  m-1 w-100 h-75 col-11">
          <div className=" card d-flex  flex-column justify-content-center align-items-center mt-3 p-2 shadow">
            <img
              src="https://img.freepik.com/free-vector/game-message-cartoon-style_1284-53135.jpg?size=626&ext=jpg&ga=GA1.1.1581710395.1680750078&semt=ais"
              className="w-50"
              alt="loss card"
            />
            <h3 className="font-weight-bold text-danger">You Lost the Game</h3>
            <h5 className="text-primary font-weight-bold">
              Your Score:{score}
            </h5>
            <div className="d-flex ">
              <button className="btn btn-dark m-2 mb-2" onClick={restartGame}>
                Restart
              </button>
              <button
                className="btn btn-dark m-2 mb-2"
                onClick={() => setReg(true)}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const WonGame = () => {
    return (
      <div className="d-flex  justify-content-center align-items-center  m-2 w-100 h-75 col-11">
        <div className=" card d-flex  flex-column justify-content-center align-items-center mt-3 p-2 shadow">
          <img
            src="https://img.freepik.com/free-vector/employees-celebrating-business-success-with-huge-trophy_1150-37475.jpg?size=626&ext=jpg&ga=GA1.1.1581710395.1680750078&semt=sph"
            className="w-75"
          />
          <h3 className="font-weight-bold text-success">You Won the Game</h3>
          <h5 className="font-weight-bold text-primary">Score:{score}</h5>
          <div className="d-flex ">
            <button className="btn btn-dark m-2 mb-2 " onClick={restartGame}>
              Restart
            </button>
            <button
              className="btn btn-dark m-2 mb-2"
              onClick={() => setReg(true)}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
  };

  const restartGame = () => {
    setIsGame(true);
    setScore(0);
    setTimer(40);
    clearInterval(timeInterval);
    timerFunc();
    setWin(false);
    userUpdate();
  };

  scoreList.sort((a, b) => b.score - a.score);

  return (
    <>
      <NavBar score={score} timer={timer} name={data.username} />

      {reg ? registerForm() : gameFun()}
    </>
  );
};

NavBar.defaultProps = {
  name: "User",
  timer: 40,
  score: 0,
};

export default GreenLightRedLight;
