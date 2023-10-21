import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import Store from "../../pages/Store"
import Contact from "../../pages/Contact"
import Details from "../../pages/details"
import Cart from "../../pages/Cart"

const RoutesComponent = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/cart" element={<Cart/>} />
         </Routes>
    )
}

export default RoutesComponent