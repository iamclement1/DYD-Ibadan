import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages'

const Routing : React.FC = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={ <Dashboard/> } />
        </Routes>
        </>
    )
}

export default Routing