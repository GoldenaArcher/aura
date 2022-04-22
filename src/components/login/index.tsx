import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../stores/reducers';
import { AuthState } from '../../stores/reducers/auth.reducer';

const Login = () => {
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  return <div>Login</div>;
};

export default Login;
