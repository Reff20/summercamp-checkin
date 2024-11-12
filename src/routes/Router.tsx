import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Ticket from '../pages/Ticket'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/ticket/:id' element={<Ticket />} />
        </Routes>
    )
}

export default Router