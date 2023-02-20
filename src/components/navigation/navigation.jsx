import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "./../../assets/icon/close.png";
import home from "./../icon/home.svg";
import items from "./../icon/items.svg";
import logout from "./../icon/logout.svg";
import phone from "./../icon/phone.svg";
import settings from "./../icon/settings.svg";
import yellowhome from "./../icon/yellow-home.svg";
import yellowitems from "./../icon/yellow-items.svg";
import yellowlogout from "./../icon/yellow-logout.svg";
import yellowphone from "./../icon/yellow-phone.svg";
import yellowsettings from "./../icon/yellow-settings.svg";
import style from "./style.module.css";
export default function Navigation({
  active,
  onClick,
  isActiveNav,
  closeCall,
}) {
  const navigation = useNavigate();
  const [activeSize, setActiveSize] = useState(true);
  const isActiveResize = () => {
    if (window.innerWidth < 900) {
      setActiveSize(true);
    } else {
      setActiveSize(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      isActiveResize();
    });
  }, []);
  useEffect(() => {
    isActiveResize();
  }, []);
  return (
    <nav
      className={style.nav}
      style={{
        transform: !activeSize
          ? "translateX(0px)"
          : isActiveNav
          ? "translateX(0px)"
          : "translateX(-310px)",
      }}
    >
      <div className={style.box}>
        <div
          className={style.closeBox}
          onClick={() => {
            if (closeCall) {
              closeCall();
            }
          }}
        >
          <img src={close} alt="" height={"100%"} width={"100%"} />
        </div>
        <div className={style.header}>THE FOOD GATE</div>

        <Items
          icon={active === activeOption.home ? yellowhome : home}
          name={"home"}
          onClick={onClick}
          isActive={active === activeOption.home}
        />
        <Items
          icon={active === activeOption.items ? yellowitems : items}
          name="items"
          onClick={onClick}
          isActive={active === activeOption.items}
        />
        <Items
          icon={active === activeOption.phone ? yellowphone : phone}
          name="contact us"
          onClick={onClick}
          isActive={active === activeOption.phone}
        />
        <Items
          icon={active === activeOption.settings ? yellowsettings : settings}
          name="settings"
          onClick={() => {
            navigation("/settings");
          }}
          isActive={active === activeOption.settings}
        />
        <Items
          icon={active === activeOption.logout ? yellowlogout : logout}
          name="logout"
          onClick={() => {
            navigation("/login");
          }}
          isActive={active === activeOption.logout}
        />
      </div>
    </nav>
  );
}

function Items({ isActive, name, onClick, icon }) {
  return (
    <div
      className={`${isActive ? style.activeContainer : ""} ${style.container}`}
      onClick={onClick}
    >
      <div className={style.icon}>
        <img src={icon} alt="" height={"100%"} width="100%" />
      </div>
      <div className={style.name}>{name}</div>
    </div>
  );
}
const activeOption = {
  home: "home",
  items: "items",
  logout: "logout",
  phone: "phone",
  settings: "settings",
};

export { activeOption };
