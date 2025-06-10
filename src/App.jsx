import React from 'react'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Courses from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionPage'
import NotFound from './pages/NotFoundPage'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admission" element={<Admission/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
      </Router>

    </div>
  )
}


export default App