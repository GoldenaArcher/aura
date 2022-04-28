import { Container, Divider, Grid, Stack } from '@mui/material';
import React, { MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AppState } from '../../stores/reducers';
import { AuthState } from '../../stores/reducers/auth.reducer';
import Card, { CardBoardRadius } from '../../ui/card';
import Input from '../../ui/input';
import { authUser, isAuthed } from '../../utils/auth.util';

import logo from '../../assets/svg/aura-logo-icon.svg';
import { login, loginSuccess } from '../../stores/actions/auth.action';
import LoginButton from '../../ui/button/loginButton';
import GmailButton from '../../ui/button/gmailButton';

import { loginMock, getErrorMessage } from '../../api/auth.api';

const Login = () => {
  // const auth = useSelector<AppState, AuthState>((state) => state.auth);
  // const dispatch = useDispatch();

  // const mockLogin = () => {
  //   let user = generateMockUser();

  //   loginMock(user).then(res => getErrorMessage(res.errorCode)).then(res => console.log(res))
  // }
  const [errorMessage, setErrorMessage] = useState('')
  const [loadState, setLoadState] = useState(false)

  const loginHandler = async (e: MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    setLoadState(true)
    // const mockUser = {
    //   userName: "test@antra.com",
    //   passWord: "test",
    //   jwt:
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ0ZXN0QGFudHJhLmNvbSIsIm5hbWUiOiJ0ZXN0IiwidXNlcklkIjoiMTIzMjEzMTIiLCJpYXQiOjE1MTYyMzkwMjJ9.XxBVHmaT7wGOlb9zGR7CSdQ7ZAvDx4Rqlt1trv9rmTU"
    // };

    const dymmyData = { email: "test@antra.com", passWord: "wrong", jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ0ZXN0QGFudHJhLmNvbSIsIm5hbWUiOiJ0ZXN0IiwidXNlcklkIjoiMTIzMjEzMTIiLCJpYXQiOjE1MTYyMzkwMjJ9.XxBVHmaT7wGOlb9zGR7CSdQ7ZAvDx4Rqlt1trv9rmTU" };

    // dispatch(login(dymmyData));

    // mockLogin()
    loginMock(dymmyData).then(res => {
      setLoadState(false)
      if (res.errorCode === +0 ) {
        let jwt = res.result.jwt
          /*useJWT(jwt)*/
          return jwt
      }
      else {
        return getErrorMessage(res.errorCode);
      }
      // else {
      //   throw new Error("Error")
      // }

    }).then((res) => {
      if (typeof res === 'object') {
        let errorStr = res.result
        setErrorMessage(errorStr)
        console.log(res)
      } 
      else if (typeof res === 'string') {
        alert("JWT Provided")
        // someJWTFunction(res)
      }
    })
    // getErrorMessage(res.errorCode)
    

    // const isLoggedIn = await authUser(dymmyData);

    // if (isLoggedIn) {
    //   dispatch(loginSuccess());
    // }
  };

  // const isLoggedIn = isAuthed(auth);

  // if (isLoggedIn) return <Navigate replace to="/dashboard" />;

  return (
    <Container className="login" maxWidth={false} style={{ padding: 0 }}>
      <Container className="transparent__bg center-align" maxWidth={false}>
        <Card
          transparent={true}
          className="login__body flex"
          borderRadius={CardBoardRadius.XLarge}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="login__form"
          >
            <Container className="logo__img">
              <img src={logo} alt="aura logo" />
            </Container>
            <Card
              className="login__form__body"
              borderRadius={CardBoardRadius.Large}
            >
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Input placeholder="Email Address"/>
                </Grid>
                <Grid item>
                  <Input placeholder="Password" errorMsg={errorMessage}/>
                </Grid>
                <Grid item>
                  <LoginButton onClick={loginHandler} />
                </Grid>
                <Grid item className="flex justify-end">
                  <Link to={'/reset-password'} className="forget-pwd">
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item className="grid__item__divider">
                  <Divider variant="middle" />
                </Grid>
                <Grid item>
                  <p className="login-alt">Login using</p>
                </Grid>
                <Grid item>
                  <GmailButton />
                </Grid>
              </Grid>
            </Card>
          </Stack>
        </Card>
      </Container>
    </Container>
  );
};

export default Login;
