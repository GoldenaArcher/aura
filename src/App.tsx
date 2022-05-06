import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './routes/route';
import store from './stores';

// import Demo from './ui/newHiresChart';
import AttritionRate from './ui/attritionRateChart';
// import ActiveEmployeesChart from './ui/activeEmployeesChart';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    {/* <AttritionRate/> */}
    </Provider>
  );
}

export default App;
