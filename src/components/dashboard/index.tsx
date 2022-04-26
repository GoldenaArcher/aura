import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { AppState } from '../../stores/reducers';
import { AuthState } from '../../stores/reducers/auth.reducer';
import Header from '../../ui/header';
import { isAuthed } from '../../utils/auth.util';

const Dashboard = () => {
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  const isLoggedIn = isAuthed(auth);

  if (!isLoggedIn) return <Navigate replace to="/" />;

  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
