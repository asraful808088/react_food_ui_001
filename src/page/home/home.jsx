import React, { useState } from "react";
import delivery from "../../assets/bg/delivery.png";
import des1 from "../../assets/bg/home/items/des1.png";
import des2 from "../../assets/bg/home/items/des2.png";
import items from "../../assets/bg/home/items/items1.png";
import items2 from "../../assets/bg/home/items/items2.png";
import items3 from "../../assets/bg/home/items/items3.png";
import items4 from "../../assets/bg/home/items/items4.png";
import items5 from "../../assets/bg/home/items/items5.png";
import items6 from "../../assets/bg/home/items/items6.png";
import items7 from "../../assets/bg/home/items/items7.png";
import items8 from "../../assets/bg/home/items/items8.png";
import pickup from "../../assets/bg/pickup.png";
import HeaderBox from "../../components/animation/homeHeaderBox/headerBox";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Navigation, {
  activeOption,
} from "../../components/navigation/navigation";
import style from "./home.module.css";

export default function Home() {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className={style.root}>
      <div className={style.headerContainer}>
        <div
          className={style.navButton}
          onClick={() => {
            setNavActive(!navActive);
          }}
        >
          <img
            src={require("../../assets/icon/nav.png")}
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </div>
        <Navigation
          active={activeOption.home}
          isActiveNav={navActive}
          closeCall={() => {
            setNavActive(false);
          }}
        />
        <HeaderBox />
        <div className={style.items}>
          <h1>Be The Fastest</h1>
          <h1>In Delivering Your</h1>
          <h1>
            <span>Food</span>
          </h1>
          <div className={style.hr}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            soluta quibusdam suscipit. Assumenda non, vero, at, aliquam
            similique dolores nisi incidunt dolor unde in exercitationem
            architecto nobis? Dolore, natus vel.
          </p>
        </div>
      </div>
      <main className={style.main_container}>
        <h1>CHOOSE & ENJOY</h1>

        <div className={style.itemsBox}>
          <Card
            itemName={"Burger and  Sandwich"}
            price="7"
            offer={"-10%"}
            image={items}
          />
          <Card
            itemName={"Lamb and Tomato Stuffed Burger"}
            price="2.5"
            offer={"-5"}
            image={items2}
          />
          <Card
            itemName={"Perfect Lamb Satay Burger"}
            price="3.4"
            offer={"-9"}
            image={items3}
          />
          <Card
            itemName={"Veggie Burrito"}
            price="3"
            offer={"-13"}
            image={items4}
          />
          <Card
            itemName={" Crunchy Chicken and Fish Burger"}
            price="2.1"
            offer={"-21"}
            image={items5}
          />
          <Card
            itemName={"Korean Burrito"}
            price="4.1"
            offer={"-25"}
            image={items6}
          />
          <Card
            itemName={"Guisado-Style Burrito"}
            price="5"
            offer={"-18"}
            image={items7}
          />
          <Card
            itemName={"Submarine Sandwich"}
            price="4.5"
            offer={"-12"}
            image={items8}
          />
        </div>
        <div className={style.foodDes}>
          <div className={style.image}>
            <img src={des1} alt="" height={"80%"} width="80%" />
          </div>
          <div className={style.des}>
            <h1>Upcoming Item</h1>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              necessitatibus ullam recusandae porro amet facere atque fugiat ab?
              Odit alias omnis ex dolore distinctio inventore sit minus odio
              expedita magnam. Totam adipisci ratione architecto earum modi et
              tempore. Ab pariatur deserunt nihil vero cumque libero dolore qui,
              saepe nesciunt expedita atque recusandae. Aliquid mollitia atque
              corporis, perspiciatis beatae quasi incidunt? Earum doloribus
              quaerat corporis? Iure quasi odit deleniti, impedit reprehenderit
              quod dolores a ipsam saepe quidem aliquam assumenda earum, aliquid
              soluta temporibus architecto quos veritatis nulla! Dolores minima
              explicabo eveniet. Blanditiis similique voluptates aliquam minus
              laboriosam sapiente a, fuga tempora, consequatur alias reiciendis
              at saepe tenetur accusamus suscipit recusandae quibusdam sunt!
              Natus magni dolore, ad porro blanditiis ipsa in provident. Eius
              quidem debitis aspernatur, etus? Laboriosam, in? Nobis doloribus
              magni, fugiat vero rem dignissimos, facere, necessitatibus quo
              dicta sunt tempore maiores optio delectus provident natus.
              Repudiandae corporis molestiae praesentium sit ex recusandae enim,
              asperiores expedita!
            </p>
          </div>
        </div>
        <hr
          style={{
            width: "50%",
            margin: "auto",
          }}
        />
        <div className={style.foodDes}>
          <div className={style.des}>
            <h1>Super Offer</h1>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              necessitatibus ullam recusandae porro amet facere atque fugiat ab?
              Odit alias omnis ex dolore distinctio inventore sit minus odio
              expedita magnam. Totam adipisci ratione architecto earum modi et
              tempore. Ab pariatur deserunt nihil vero cumque libero dolore qui,
              saepe nesciunt expedita atque recusandae. Aliquid mollitia atque
              corporis, perspiciatis beatae quasi incidunt? Earum doloribus
              quaerat corporis? Iure quasi odit deleniti, impedit reprehenderit
              quod dolores a ipsam saepe quidemus quo dicta sunt tempore maiores
              optio delectus provident natus. Repudiandae corporis molestiae
              praesentium sit ex recusandae enim, asperiores expedita!
            </p>
          </div>
          <div className={style.image}>
            <img src={des2} alt="" height={"50%"} width="50%" />
          </div>
        </div>
        <h1>Mega Discount </h1>

        <div className={style.itemsBox}>
          <Card
            itemName={"Submarine Sandwich"}
            price="4.8"
            offer={"-10%"}
            image={require("../../assets/bg/home/items/items9.png")}
          />
          <Card
            itemName={"Tuna Sandwiches"}
            price="4.4"
            offer={"-50"}
            image={require("../../assets/bg/home/items/items10.png")}
          />
          <Card
            itemName={"Vegetable Sandwich"}
            price="5.4"
            offer={"-55"}
            image={require("../../assets/bg/home/items/items11.png")}
          />
          <Card
            itemName={" Bread Sandwich"}
            price="5"
            offer={"-60"}
            image={require("../../assets/bg/home/items/items12.png")}
          />
          <Card
            itemName={"Grilled Cheese Sandwich"}
            price="3.9"
            offer={"-10"}
            image={require("../../assets/bg/home/items/items13.png")}
          />
          <Card
            itemName={"Sandwich Loaf"}
            price="2.2"
            offer={"-40"}
            image={require("../../assets/bg/home/items/items14.png")}
          />
          <Card
            itemName={"Grilled Cheese Sandwich with tomato"}
            price="3.5"
            offer={"-57"}
            image={require("../../assets/bg/home/items/items15.png")}
          />
          <Card
            itemName={"Lamb and Tomato Stuffed Burger"}
            price="4"
            offer={"-62"}
            image={require("../../assets/bg/home/items/items16.png")}
          />
          <Card
            itemName={"Bánh Mì"}
            price="4"
            offer={"-62"}
            image={require("../../assets/bg/home/items/items17.png")}
          />
          <Card
            itemName={"Lamb and Tomato Stuffed Burger"}
            price="4"
            offer={"-62"}
            image={require("../../assets/bg/home/items/items18.png")}
          />
        </div>
        <div className={style.collectMethod}>collect method</div>
        <div className={style.payItem}>
          <div className={style.items}>
            <img src={delivery} alt="" height={"70%"} width="100%" />
            <p className={`${style.name} ${style.delivery}`}>Delivery</p>
          </div>
          <div className={style.items}>
            <img src={pickup} alt="" height={"100%"} width="100%" />
            <p className={style.name}>Pickup Point</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
