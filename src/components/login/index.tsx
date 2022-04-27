import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { AppState } from '../../stores/reducers';
import { AuthState } from '../../stores/reducers/auth.reducer';
import Card, { CardBoardRadius } from '../../ui/card';
import { isAuthed } from '../../utils/auth.util';

const Login = () => {
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  const isLoggedIn = isAuthed(auth);

  if (isLoggedIn) return <Navigate replace to="/dashboard" />;

  return (
    <div className="login">
      <Card
        transparent={true}
        borderRadius={CardBoardRadius.Large}
      >
        <>
        <h2>outer card</h2>
        <Card borderRadius={CardBoardRadius.Large}>
          <p>inner card</p>
        </Card>
        </>
      </Card>
    </div>
  );
};

export default Login;
