import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../stores/reducers';
import { AuthState } from '../../stores/reducers/auth.reducer';
import { isAuthed } from '../../utils/auth.util';
import userProfile from '../../assets/images/user.png';

const Toolbar = () => {
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  const isLoggedIn = isAuthed(auth);

  if (isLoggedIn) return <>'logged in'</>;

  return (
    <div className="user-profile__img">
      <img src={userProfile} alt="user profile img" />
    </div>
  );
};

export default Toolbar;
