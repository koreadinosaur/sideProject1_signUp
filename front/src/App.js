import logo from './logo.svg';
import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom';




import MyPage from './pages/myPage';
import SignUp from './pages/signUp';
import SignUpCompleted from './pages/signUpCompleted';
import LogIn from './pages/login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LogIn />}/>
        <Route path="/mypage" element = {<MyPage />}/>
        <Route path="/signup" element = {<SignUp />}/>
        <Route path="/signupCompleted" element = {<SignUpCompleted />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
