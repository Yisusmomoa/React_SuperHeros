import React from 'react';
import { Navbar } from '../components/ui/navBar';
import { Routes, Route } from 'react-router-dom';
import DcScreen from '../components/dc/dcScreen';
import MarvelScreen from '../components/marvel/marvelScreen';
import SearchScreen from '../components/search/searchScreen';
import HeroScreen from '../components/hero/heroScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<DcScreen></DcScreen>}></Route>
                    <Route path='Dc' element={<DcScreen></DcScreen>}></Route>
                    <Route path='Marvel' element={<MarvelScreen/>} />
                    <Route path='Search ' element={<SearchScreen/>} />
                    <Route path='Heroe/:heroeId' element={<HeroScreen/>}/>
                </Routes>
            </div>
        </>
    );
}

export default DashboardRoutes;
