import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom';
import './signUp.css';
import { v4 } from 'uuid';
import axios from 'axios'



import Button from '../component/button';
import RadioButton from '../component/radioButton';
import TextArea from '../component/textArea';
import DropDown from '../component/dropDown';
import TextInput from '../component/Input';

const SignUp = () => {


  //id
  const[id, setId] = useState('');
  
  //password
  const[pw, setPw] = useState('');

  //date of birth
  const[dob, setDob] = useState('');
  
  //gender
  const[gender, setGender] = useState('');
  
  //email
  const[emailId, setEmailID] = useState('');
  const[emailDomain, setEmailDomain] = useState('');
  const[emailDropDown, setEmailDropDown] = useState('');
 
  //phone number
  const[internationalCode, setInternationalCode] = useState('+82(대한민국)');
  const[phoneNum1, setPhoneNum1] = useState('010');
  const[phoneNum2, setPhoneNum2] = useState('');
  const[phoneNum3, setPhoneNum3] = useState('');
  
  //greetings message
  const[greetings, setGreetings] = useState('');
  
  
  const[idList, setidList] = useState([]);
  const[domainInputAvailability, setDomainInputAvailability] = useState(false);

  let form = {
    uuid: v4(),
    username: id,
    password: String(pw),
    dateOfBirth: dob,
    gender: gender,
    email: `${emailId}@${emailDomain}`,
    phone: [internationalCode, phoneNum1, phoneNum2, phoneNum3],
    introduction: greetings,
  }

  const getItems = () => {
    // Sending HTTP GET request
    axios.get('http://localhost:3005/userInfo/getall').then((response) => {
        const usernames = response.data.map(item => item.username)
        setidList(usernames);
    });
  };

  useEffect(getItems,[]);
  
  function submit() {
    if(idList.includes(id)) {
        alert(`${id}는 이미 사용중인 아이디 입니다. 다른 아이디를 입력하세요.`)
        return
    }

    axios.post(`http://localhost:3005/userinfo?username=${form.username}&uuid=${form.uuid}&password=${form.password}&dateOfBirth=${form.dateOfBirth}&gender=${form.gender}&email=${form.email}&phone=${form.phone}&introduction=${form.introduction}`)

    axios.get('http://localhost:3005/userinfo/getall').then((response)=> console.log(response.data))
  }


  function validate() {
    if(!(id && pw && dob && gender && emailId && emailDomain 
      && phoneNum1 && phoneNum2 && phoneNum3 && greetings)) {
        alert(`please put all required fields`)
      return
    }
  }

  function validateId() {
    if(idList.includes(id)) {
      alert(`${id}는 이미 사용중인 아이디 입니다. 다른 아이디를 입력하세요.`)
    }
    else {
      alert(`${id}는 사용 가능합니다.`)
    }
  }

  // const addUserInfo = () => {
    
  //     axios.post(`http://localhost:3005/userinfo?username=${form.username}&uuid=${form.uuid}&password=${form.password}&dateOfBirth=${form.dateOfBirth}&gender=${form.gender}&email=${form.email}&phone=${form.phone}&introduction=${form.introduction}`).then((response)=>{
  //         console.log(response.data);
  //     }).catch((error)=>{
  //         console.log(error);
  //     })
  // }

  // const ifIdExists= () => {
  //   let exists = false;
  //    axios.get('http://localhost:3005/userInfo/getall').then((response)=>{
  //           console.log(response.data);
  //           let arr = response.data.map((item)=>item.username === form.username)
  //           arr.length === 0 ? setidExists(false) : setidExists(true);
  //       }).catch((error)=>{
  //           console.log(error);
  //       })
  // }


  return (
    <div className='signUp__wrapper'>
      <div> 회원가입</div>
      <span className='id__wrapper wrapper'>
        <div className='tag'>아이디</div><TextInput placeHolder='아이디를 입력하세요' value={id} onChange={(e)=> setId(e.target.value)}/>
        <Button className="id__validation__button" buttonContent="중복확인" onClick={()=> validateId()}/>
      </span>
      <span className='pw__wrapper wrapper'>
        <div className='tag'>비밀번호</div><TextInput type="password" placeHolder='비밀번호를 입력하세요' value={pw} onChange={(e)=> setPw(e.target.value)}/>
      </span>
      
      <span className='dob__wrapper wrapper'>
        <div className='tag'>생년월일</div><TextInput type="date" className="dob__input" value={dob} onChange={(e)=> setDob(e.target.value)}/>
      </span>
      <span className='gender__wrapper wrapper'>
        <div className='tag'>성별</div><RadioButton className="gender__input" name="gender" value={gender} onClick={(e)=>setGender(e.target.value)}/>
      </span>

      <span className='email__wrapper wrapper'>
        <div className='tag'>이메일</div><TextInput className="emailId__input" placeHolder="email id" value={emailId} onChange={(e)=> setEmailID(e.target.value)}></TextInput>
        @<TextInput className="emailDomain__input" domainInputAvailability={domainInputAvailability} placeHolder="선택하세요" value={emailDomain} onChange={(e)=> setEmailDomain(e.target.value)}></TextInput>
        <DropDown list={["선택하세요","naver.com", "gmail.com", "mailmail.com", "직접 입력"]} value={emailDropDown} onChange={(e)=> {setEmailDomain(e.target.value)
        if(e.target.value === "직접 입력"){
          setDomainInputAvailability(true);
        }}}/>
      </span> 
      <span className='phoneNum__wrapper wrapper'>
        <div className='tag'>전화번호</div><DropDown list={["+82(대한민국)", "+81(일본)", "+1(미국)"]} value={internationalCode} onChange={(e)=> setInternationalCode(e.target.value)}/>
        <TextInput className="phoneNum1__input" value={phoneNum1} onChange={(e)=> setPhoneNum1(e.target.value)}/>
        -<TextInput className="phoneNum2__input" value={phoneNum2} onChange={(e)=> setPhoneNum2(e.target.value)}/>
        -<TextInput className="phoneNum3__input" value={phoneNum3} onChange={(e)=> setPhoneNum3(e.target.value)}/>
      </span> 
      <span className='greetings__wrapper wrapper'>
        <div className='tag'>자기소개</div><TextArea className="greetings__input" value={greetings} onChange={(e)=> setGreetings(e.target.value)}/>
      </span>
      <Link to= {(id && pw && dob && gender && emailId && emailDomain 
      && phoneNum1 && phoneNum2 && phoneNum3 && greetings) ? "/signupcompleted" : "/signup"}>
        <Button className="submit__button" buttonContent="가입하기" onClick={()=> {getItems() 
          submit() 
          validate()}}/>
      </Link>
      <Link to= "/">
        <Button className="toMain__button" buttonContent="홈으로"/>
      </Link>
    </div>
  )
};

export default SignUp;