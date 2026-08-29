import React from 'react'
import StudyResources from './pages/StudyResources'
import Login from './pages/Login'
import Nav from './components/navigation/Nav'
import { Route, Routes } from 'react-router-dom'
import Program from './components/study-resources/Program'

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/ipu-result" element={<Login />} />
        <Route path="/study-resources" element={<StudyResources />} />
      </Routes>
    </div>
  )
}
