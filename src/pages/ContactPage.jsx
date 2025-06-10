import React from 'react'
import '../pages/ContactPage.css'
import { Link } from "react-router-dom"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Contact = () => {
    return (
        <div>
            <Header/>
            <h1 id="root">Contact Us</h1>
            <p id="p">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2 className='ul'>General Enquiries</h2>
            <h3 className='ul'>Vivekanand College Main Campus</h3>
            <p className='ul'>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]          <br></br>India</p>
            
            <p className='ul'>Phone: **+91 12345 67890**<br></br>Email: **info@vivekanandcollege.edu**<br></br>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            <h2 className='ul'>Admissions Office</h2>
            <p className='ul'>For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                Phone: +91 98765 43210<br></br>
                Email: admissions@vivekanandcollege.edu</p>

            <h2 className='ul'>Student Support Services</h2>
            <p className='ul'>For current student support, academic advising, or general assistance:<br></br>
            Phone: +91 87654 32109<br></br>
            Email: studentsupport@vivekanandcollege.edu</p>

            <h2 className='ul'>Find Us on the Map</h2>
            <p className='ul'>[You can embed a Google map here later using an iframe or a React map library.]</p>
            <a id="link" href='https://www.google.com/maps/search/Vivekanand+College'>View on google map</a> 

            <h2 className='ul'>Send Us a Message</h2>
            <p className='ul'>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        <div>
            <Footer/>
        </div>
       </div>
    )
}

export default Contact