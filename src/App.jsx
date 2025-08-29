import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Components from './Ustate/Components'
import Counter from './Ustate/Counter'
import MyCar from './Ustate/CarComponents'
import Food from './Ustate/FruitComponents'
import NavBar from "./navigation/NavBar";
// import './App.css'

function App() {

  return (
    // <>
    //   {/* <Components /> */}
    //   {/* <Counter /> */}
    //   {/* <MyCar/> */}
    //   <Food/>

    // </>

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/carcomps" element={<MyCar/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/components" element={<Components/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
