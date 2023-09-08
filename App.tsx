import React from 'react'
import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { Savings } from "./pages/Savings"
import { Payments } from './pages/Payments'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  )

}

export default App
