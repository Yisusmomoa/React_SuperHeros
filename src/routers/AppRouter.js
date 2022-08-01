import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import LoginScreen from '../components/login/loginScreen';
import DashboardRoutes from './DashboardRoutes';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Login' element={<LoginScreen/>} />
                <Route path='/*' element={<DashboardRoutes/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
