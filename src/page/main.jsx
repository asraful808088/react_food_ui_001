import React, { useState } from "react";
import food from "../assets/icon/food.png";
import CreateUser from "./createUser/createUser";
import Login from "./login/login";
import style from "./style.module.css";
export default function Main() {
  const [isLogin, setLoginStatus] = useState(true);
  const loginstatusChanger = () => {
    setLoginStatus(!isLogin);
  };
  return (
    <div className={style.root}>
      <div className={style.subContainer}>
        <div className={style.items}>
          <div className={style.header}>THE FOOD GATE</div>
          <div className={style.image}>
            <img src={food} alt="" height={"90%"} width="100%" />
          </div>
        </div>
        <div className={style.items}>
          <div className={style.card}>
            {isLogin ? (
              <Login onClick={loginstatusChanger} />
            ) : (
              <CreateUser onClick={loginstatusChanger} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
