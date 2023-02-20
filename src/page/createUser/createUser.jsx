import React from "react";
import style from './style.module.css'
import TextInput from '../../components/TextInput/textInput'
import Button from '../../components/button/button'
import Link from '../../components/link/link'
export default function CreateUser({onClick}){
    return <div className={style.root}>
                <div className={`${style.items} ${style.header}  ${style.signInheader}`}>
                Signup
                </div>
                <div className={`${style.items} ${style.header} ${style.name} `}>
                THE FOOD GATE
                </div>
                <div className={style.items}>
                <TextInput placeholder={"username"} type="text" iconType={'username'} />
                </div>
                <div className={style.items}>
                <TextInput placeholder={"email"} type="text" iconType={'email'} />
                </div>
                <div className={style.items}>
                <TextInput placeholder={"password"} type="password"  iconType={'password'} />
                </div>
                <div className={style.items}>
                <TextInput placeholder={"co-password"} type="password"  iconType={'password'} />
                </div>
                <div className={style.items}>
                <Button name="Signup"/>
                </div>
                <div className={`${style.items} ${style.link}`}>
                <Link name={'i have an account'} onClick={()=>{
                    if (onClick) {
                        onClick()  
                    }
                }}/>
                </div>
                
    </div>
}