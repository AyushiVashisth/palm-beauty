import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardProduct from './CardProduct'
import AddProductLanding from './HomeComponents/AddProductLanding'
import Offer from "./Splurge/Offer"

const AllRouter = () => {
  return (
    <Routes>
       <Route path="/" element={<AddProductLanding/>}/>
       <Route path="/offer" element={<Offer/>}/>
       <Route path="/search" element={<CardProduct/>}/>
    </Routes>
  )
}

export default AllRouter
