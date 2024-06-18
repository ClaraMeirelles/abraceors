import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AboutUs from '../Pages/AboutUs/AboutUs'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/sobre' element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}
