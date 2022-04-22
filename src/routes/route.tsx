import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard';
import Login from '../components/login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
