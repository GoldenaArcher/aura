// @ts-nocheck

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { AppState } from '../../stores/reducers';
import { AuthState } from '../../stores/reducers/auth.reducer';
import Header from '../../ui/header';
import { isAuthed } from '../../utils/auth.util';

import Demo from '../../ui/newHiresChart';
import ActiveEmployeesChart from '../../ui/activeEmployeesChart';
import AttritionRate from '../../ui/attritionRateChart';

const Dashboard = () => {
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  const isLoggedIn = isAuthed(auth);

  if (!isLoggedIn) return <Navigate replace to="/" />;
console.log("update")
  return (
    <div>
      <Header />
      <div className='charts flex space-between'>
        {/* <div className='chart__container'>
          <ActiveEmployeesChart/>
        </div> */}
        {/* <div className='chart__container'>
          <Demo/>
        </div> */}
        <div className='chart__container'>
          <AttritionRate />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
