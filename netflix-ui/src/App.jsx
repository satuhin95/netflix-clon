
import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import MyList from './pages/MyList'
export default function App() {
  return (
    <BrowserRouter>
        <ToastContainer position='top-right' limit={1} />
    <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/player" element={<Player/>} />
        <Route exact path="/movies" element={<Movies/>} />
        <Route exact path="/tv" element={<TVShows/>} />
        <Route exact path="/mylist" element={<MyList/>} />
        <Route exact path="/" element={<Netflix/>} />
    </Routes>
    
    </BrowserRouter>
  )
}
