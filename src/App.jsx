import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './routes/route';
import store from './stores';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />;
    </Provider>
  );
}

export default App;
