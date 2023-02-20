import React from "react";
import style from './style.module.css'
import TextInput from '../../components/TextInput/textInput'
import Button from '../../components/button/button'
import Link from '../../components/link/link'
export default function Login({onClick}){
    return <div className={style.root}>
                <div className={`${style.items} ${style.header} ${style.signInheader} `}>
                Signin
                </div>
                <div className={`${style.items} ${style.header} ${style.name} `}>
                THE FOOD GATE
                </div>
                <div className={style.items}>
                <TextInput placeholder={"username"} type="text" iconType={'username'} />
                </div>
                <div className={style.items}>
                <TextInput placeholder={"password"} type="password"  iconType={'password'} />
                </div>
                <div className={style.items}>
                <Button name="Signin"/>
                </div>
                <div className={`${style.items} ${style.link}`}>
                <Link name={'create account ?'}  onClick={()=>{
                    if (onClick) {
                        onClick()  
                    }
                }}/>
                </div>
                
    </div>
}