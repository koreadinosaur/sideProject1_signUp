import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpCompleted = () => {

  return (
    <div>
      <div>회원가입이 완료되었습니다!</div>
      <Link to="/">
        <button>홈으로</button>
      </Link>
    </div>
    
  )
};

export default SignUpCompleted;