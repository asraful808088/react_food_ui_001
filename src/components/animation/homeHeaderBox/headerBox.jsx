import React, { useEffect, useState } from "react";
import barger1 from "../../../assets/bg/home/burger1.png";
import barger2 from "../../../assets/bg/home/burger2.png";
import barger3 from "../../../assets/bg/home/burger3.png";
import barger4 from "../../../assets/bg/home/burger4.png";
import food from "../../../assets/bg/home/food.png";
import food3 from "../../../assets/bg/home/food1.png";
import food2 from "../../../assets/bg/home/food2.png";
import food4 from "../../../assets/bg/home/food6.png";
import style from "./style.module.css";
export default function HeaderBox() {
  const [barger, setbarger] = useState(false);
  const [imageCounter, setCounter] = useState(0);
  useEffect(() => {
    setbarger(true);
    setInterval(() => {
      setCounter((s) => {
        if (s === 5) {
          return 0;
        }
        return s + 1;
      });
    }, 5000);
  }, []);
  return (
    <div className={style.items}>
      <div className={style.headerText}>THE FOOD GATE</div>
      <div className={style.pic}>
        <div
          className={style.changer}
          style={{
            transition: `${imageCounter === 0 ? "none" : "1s"}`,
            position: "relative",
            left: `-${imageCounter * "100"}%`,
          }}
        >
          <div
            className={style.imageBox}
            style={{
              flexDirection: "column",
              transition: ".5s",
              opacity: `${imageCounter === 0 ? "1" : "0"}`,
            }}
          >
            <img
              src={barger1}
              alt=""
              height={"25%"}
              width={"80%"}
              style={{
                transition: "1s",
                zIndex: "1112",
                transform: `translateY( ${barger ? "120% " : ""}) `,
              }}
            />
            <img
              src={barger2}
              alt=""
              height={"25%"}
              width={"100%"}
              style={{
                transition: "1s",
                zIndex: "111",
                transform: `translateY(${barger ? "80% " : ""})`,
              }}
            />
            <img
              src={barger3}
              alt=""
              height={"16%"}
              width={"80%"}
              style={{
                transition: "1s",
                transform: `translateY(${barger ? "45%" : ""}) translateX(-1%)`,
              }}
            />
            <img
              src={barger4}
              alt=""
              height={"25%"}
              width={"100%"}
              style={{}}
            />
          </div>
          <div
            className={style.imageBox}
            style={{
              transition: ".5s",
              opacity: `${imageCounter === 1 ? "1" : "0"}`,
            }}
          >
            <img src={food2} alt="" height={"100%"} width={"100%"} />
          </div>
          <div
            className={style.imageBox}
            style={{
              transition: ".5s",
              opacity: `${imageCounter === 2 ? "1" : "0"}`,
            }}
          >
            <img src={food3} alt="" height={"100%"} width={"100%"} />
          </div>
          <div
            className={style.imageBox}
            style={{
              transition: ".5s",
              opacity: `${imageCounter === 3 ? "1" : "0"}`,
            }}
          >
            <img src={food} alt="" height={"100%"} width={"100%"} />
          </div>
          <div
            className={style.imageBox}
            style={{
              transition: ".5s",
              opacity: `${imageCounter === 4 ? "1" : "0"}`,
            }}
          >
            <img src={food4} alt="" height={"80%"} width={"100%"} />
          </div>
          <div
            className={style.imageBox}
            style={{
              transition: ".5s",
              flexDirection: "column",
              opacity: `${imageCounter === 5 ? "1" : "0"}`,
            }}
          >
            <img
              src={barger1}
              alt=""
              height={"25%"}
              width={"80%"}
              style={{
                transition: "1s",
                zIndex: "1112",
                transform: `translateY( ${barger ? "120% " : ""}) `,
              }}
            />
            <img
              src={barger2}
              alt=""
              height={"25%"}
              width={"100%"}
              style={{
                transition: "1s",
                zIndex: "111",
                transform: `translateY(${barger ? "80% " : ""})`,
              }}
            />
            <img
              src={barger3}
              alt=""
              height={"16%"}
              width={"80%"}
              style={{
                transition: "1s",
                transform: `translateY(${barger ? "45%" : ""}) translateX(-1%)`,
              }}
            />
            <img
              src={barger4}
              alt=""
              height={"25%"}
              width={"100%"}
              style={{}}
            />
          </div>
        </div>
      </div>
      <div className={style.counter}>
        <div
          className={`${
            imageCounter !== 0 && imageCounter !== 5
              ? style.dot
              : style.activeDot
          }`}
          onClick={() => {
            setCounter(0);
          }}
        ></div>
        <div
          className={`${imageCounter !== 1 ? style.dot : style.activeDot}`}
          onClick={() => {
            setCounter(1);
          }}
        ></div>
        <div
          className={`${imageCounter !== 2 ? style.dot : style.activeDot}`}
          onClick={() => {
            setCounter(2);
          }}
        ></div>
        <div
          className={`${imageCounter !== 3 ? style.dot : style.activeDot}`}
          onClick={() => {
            setCounter(3);
          }}
        ></div>
        <div
          className={`${imageCounter !== 4 ? style.dot : style.activeDot}`}
          onClick={() => {
            setCounter(4);
          }}
        ></div>
      </div>
    </div>
  );
}
