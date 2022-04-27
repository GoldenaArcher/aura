import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import PwdReset from '../components/login/pwdReset';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reset-password" element={<PwdReset />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
