import React from 'react'
import style from './style.module.css'
export default function Card({image,itemName,offer,price}){
    return  <div className={style.items}>
    <div className={style.pic}>
      <img src={image} alt="" height={"100%"} width="100%" />
    </div>
    <div className={style.text}>
      <h1>{itemName}</h1>
      <hr />
      <p className={style.p}>price : {price}$</p>
      <p className={style.p}>off : {offer}%</p>
      <div className={style.button}>Buy</div>
    </div>
  </div>
}