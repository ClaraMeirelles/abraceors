import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AboutUs from '../Pages/AboutUs/AboutUs'
import { Form } from '../Pages/Form/Form'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/sobre' element={<AboutUs />} />
                <Route path='/abracar' element={<Form formType="abraçar uma artesã do RS" />} />
            </Routes>
        </BrowserRouter>
    )
}
