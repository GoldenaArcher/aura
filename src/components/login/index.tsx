import React, { useState } from 'react';
import './_login.scss';
import Card from '../../ui/card';
import Input from '../../ui/input';
import AURALogo from '../../assets/svg/aura-logo-icon.svg';
import { login, getErrorMessage, User } from '../../utils/auth.api';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
// import { AppState } from '../../stores/reducers';
// import { AuthState } from '../../stores/reducers/auth.reducer';
// import { isAuthed } from '../../utils/auth.util';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    const res:any = await login({email,password});
    if(res.result){
      // return <Navigate />
      console.log("redirecting to dashboard");
      
    } else {
      const resError:any = await getErrorMessage(res.errorCode);
      alert(resError.result);
      // console.log(resError);
      
      
    }
    
    
  }

  return (
    <div className="login">
      <div className="login__ui-container">
        <Card backgroundColor="#000000E0">
          <>
            <div className="logo-container">
              <img src={AURALogo}></img>
            </div>
            <Card
              backgroundColor="#FFFFFF"
              className="login__ui"
              padding="1.5rem"
            >
              <form onSubmit={handleSubmit}>
                <Input placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}} />
                <br /><br />
                <Input placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} type="password"/>
                <br /><br />
                <button className='login-btn'>LOGIN</button>
              </form>
            </Card>
          </>
        </Card>
      </div>
    </div>
  );
};

export default Login;
