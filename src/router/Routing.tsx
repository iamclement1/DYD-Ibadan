import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, AboutDiocese, Dashboard, PrayerRequest } from '../pages'

const Routing : React.FC = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={ <Dashboard/> } />
            <Route path='about' element={ <About /> } />
            <Route path='about-diocese' element={ <AboutDiocese /> } />
            <Route path='prayer-request' element={ <PrayerRequest /> } />
        </Routes>
        </>
    )
}

export default Routing