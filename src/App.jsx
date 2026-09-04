import React from 'react'
import StudyResources from './pages/StudyResources'
import Login from './pages/Login'
import Nav from './components/navigation/Nav'
import { Route, Routes } from 'react-router-dom'
import Program from './components/study-resources/Program'
import Footer from './components/navigation/Footer'
import Result from './components/ipu-result/Result'
import Leaderboard from './pages/Leaderboard'

export default function App() {
  return (
    <div className='w-full min-h-screen overflow-y-hidden'>
      <Nav />
      <Routes>
        <Route path="/ipu-result" element={<Login />} />
        <Route path="/result" element={<Result />} />
        <Route path="/study-resources" element={<StudyResources />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>

      <Footer/>
    </div>
  )
}
