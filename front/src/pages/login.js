import React, { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom';
import axios from 'axios'

import Button from '../component/button';
import InputLayout from '../component/inputLayout';
import TextInput from '../component/input';

import './login.css';
import { validate } from 'uuid';



const LogIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [pwMatches, setPwMatches] = useState(false);
    const [idList, setIdList] = useState([]);
    const [pwList, setPwList] = useState([]);



    const currentId = (e) => {
        setId(e.target.value);
    }

    const currentPassword = (e) => {
        setPassword(e.target.value);  
    }

    const getItems = () => {
        // Sending HTTP GET request
        axios.get('http://localhost:3005/userInfo/getall').then((response) => {
            const usernames = response.data.map(item => item.username)
            setIdList(usernames);
            const passwords = response.data.map(item => String(item.password))
            setPwList(passwords);
        });
        console.log(idList)
        console.log(pwList)
    };

    const validate = () => {
        if(!idList.includes(id)){
            alert("아이디가 없습니다.")
        }

        else if(pwList[idList.indexOf(id)] !== password){
            alert("아이디와 패스워드가 일치하지 않습니다.")
        }
    }

    const storeInLocal = () => {
        localStorage.setItem("id",id)
    }


    useEffect(getItems,[]);


  return (
    <div className='login__wrapper'>
        <div className='logo'>logo</div>
        <div className='loginMessage'>login</div>
        <div className='input__wrapper'>
            <TextInput placeHolder='id' value = {id} onChange={currentId}/>
            <TextInput type = "password" placeHolder='password' value = {password} onChange={currentPassword}/>
            {/* <input type="text" placeholder='id'></input> */}
            {/* 
            <InputLayout  value = {id} inputDescription="아이디" className="id__inputBox" compType="TextInput"/>
            <InputLayout value = {password} inputDescription="비밀번호" className="password__inputBox"/> */}
        </div>
        
        <div className='button__wrapper'>
            <Link to = {idList.includes(id) && pwList[idList.indexOf(id)] === password ? "/mypage" : "/"}>
                <Button className="login__button" buttonContent="로그인" onClick={()=>{getItems() 
                    validate()
                    storeInLocal()}}/>
            </Link>             
            
            <Link to = "/signup">
                <Button className="signup__button" buttonContent="아이디가 없으세요? 회원가입"/>
            </Link>
        </div>
    </div>
  )
};

export default LogIn;