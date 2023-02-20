import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/icon/delete.png";
import { default as profile } from "../../assets/icon/profile.png";
import update from "../../assets/icon/update.png";
import yellowDelete from "../../assets/icon/yellow-delete.png";
import yellowProfile from "../../assets/icon/yellow-profile.png";
import yellowUpdate from "../../assets/icon/yellow-update.png";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import TextFileds from "../../components/TextInput/textInput";
import style from "./style.module.css";
export default function Settings() {
  const navigation = useNavigate();
  const [activeTab, setActiveTab] = useState({
    profile: true,
    update: false,
    delete: false,
  });
  return (
    <div className={style.root}>
      <header
        onClick={() => {
          navigation("/");
        }}
      >
        THE FOOD GATE
      </header>
      <main>
        <div className={style.subContainer}>
          <div className={style.items}>
            <div className={style.header}>Settings</div>
            <OptionItems
              isActive={activeTab.profile}
              icon={iconOption.profile}
              name="profile"
              onClick={() => {
                setActiveTab({
                  profile: true,
                  update: false,
                  delete: false,
                });
              }}
            />
            <OptionItems
              icon={iconOption.update}
              name="update"
              isActive={activeTab.update}
              onClick={() => {
                setActiveTab({
                  profile: false,
                  update: true,
                  delete: false,
                });
              }}
            />
            <OptionItems
              isActive={activeTab.delete}
              icon={iconOption.delete}
              name="delete"
              onClick={() => {
                setActiveTab({
                  profile: false,
                  update: false,
                  delete: true,
                });
              }}
            />
          </div>
          <div className={style.items}>
            {activeTab.profile ? (
              <Profile />
            ) : activeTab.update ? (
              <UpdateForm />
            ) : (
              <DeleteForm />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Profile({ username, email }) {
  return (
    <div className={style.tabItems}>
      <div className={style.head}>Profile</div>
      <div className={style.tabItem}>Email : someone@gmail.com{email}</div>
      <div className={style.tabItem}>User name : someone909099{username}</div>
    </div>
  );
}
function UpdateForm() {
  return (
    <div className={style.tabItems}>
      <div className={style.head}>Update</div>
      <div className={style.form}>
        <TextFileds iconType={"email"} type="email" placeholder={"email"} />
        <TextFileds
          iconType={"username"}
          type="text"
          placeholder={"username"}
        />
        <TextFileds
          iconType={"password"}
          type="password"
          placeholder={"password"}
        />
        <TextFileds
          iconType={"password"}
          type="password"
          placeholder={"co-password"}
        />
        <TextFileds
          iconType={"password"}
          type="password"
          placeholder={"old-password"}
        />
        <div className={style.button}>
          <Button name="Update" />
        </div>
      </div>
    </div>
  );
}
function DeleteForm() {
  return (
    <div className={style.tabItems}>
      <div className={style.head}>Delete</div>
      <div className={style.form}>
        <TextFileds
          iconType={"password"}
          type="password"
          placeholder={"old-password"}
        />
        <div className={style.button}>
          <Button name="Update" />
        </div>
      </div>
    </div>
  );
}

function OptionItems({ isActive, icon, name, onClick }) {
  return (
    <div
      className={`${style.items} ${isActive ? style.activeItems : ""}`}
      onClick={onClick}
    >
      <div className={style.icon}>
        <img
          src={
            icon === iconOption.profile
              ? isActive
                ? profile
                : yellowProfile
              : icon === iconOption.update
              ? isActive
                ? update
                : yellowUpdate
              : icon === iconOption.delete
              ? isActive
                ? deleteIcon
                : yellowDelete
              : ""
          }
          alt=""
          height={"100%"}
          width="100%"
        />
      </div>

      <div className={style.text}>{name}</div>
    </div>
  );
}
const iconOption = {
  profile: "profile",
  update: "update",
  delete: "delete",
};

export {};
