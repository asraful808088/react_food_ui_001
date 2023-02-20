import React from 'react'
import style from './style.module.css'
import key from '../icon/key.png'
import email from '../icon/email.png'
import usernameIcon from '../icon/username.png'
export default function TextInput({error,placeholder,type,iconType}){
    return(
        <div className={style.root}>
            <div className={style.inputBox}>
                <div className={style.icon}>
                        <img src={iconType==="email" ? email:iconType==="password"?key:iconType==="username"?usernameIcon:""} alt=""  height={'100%'} width="100%"/>
                    </div> <input className={style.input} type={type==='email' ?"email":type==="password"?"password":"text"} name="" id="" placeholder={placeholder}/>
            </div>
           <div className={style.error}>
{error}
           </div>
    </div>
    )
    
}