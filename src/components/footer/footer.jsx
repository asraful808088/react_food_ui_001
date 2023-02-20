import React from "react";
import style from "./style.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.items}>
        <h1>Link & Address</h1>
        <hr />

        <p>Address:Oli-Goli 5/1A</p>
        <p>Shop-No:level 5 / 501</p>
        <p>Narayanganj,Dhaka</p>
      </div>
      <div className={style.items}>
        <h1>Contact Us</h1>
        <hr />
        <p>email:foodgate@gmail.com</p>
        <p> hotmail:foodgate@hotmail.com</p>
        <p> hotline:+00801914482221</p>
        <p> hotline:+00801914482222</p>
      </div>
      <div className={style.items}>
        <h1>Stay Connect</h1>

        <hr />
        <div className={style.imageContainer}>
          <div className={style.icon}>
            <img
              src={require("../../components/icon/fb.png")}
              alt=""
              height={"70%"}
              width="70%"
            />
          </div>
          <div className={style.icon}>
            <img
              src={require("../../components/icon/what.png")}
              alt=""
              height={"70%"}
              width="70%"
            />
          </div>
          <div className={style.icon}>
            <img
              src={require("../../components/icon/tw.png")}
              alt=""
              height={"50%"}
              width="60%"
            />
          </div>
          <div className={style.icon}>
            <img
              src={require("../../components/icon/youtube.png")}
              alt=""
              height={"40%"}
              width="60%"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
