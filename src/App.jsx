import React, { useState } from 'react'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Courses from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionPage'
import NotFound from './pages/NotFoundPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import Footer from './components/Footer/Footer'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <> 
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pratiksha Vijay Patil"
          studentPhotoUrl="/patil.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

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
        <div>
          <ChatbotComponent/>
        
        </div>
      </Router>
      
    </div>
    </>
  )
}


export default App