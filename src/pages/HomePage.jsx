import { Link } from 'react-router-dom'
import '../pages/HomePage.css'
import '../App.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const  Home = () => {
    return (
        
        <div>
            
            <Header/>
            <img id="ss" src="/vck4.jpeg"/> 
            <div className="over">
            <h1>Welcome to Vivekanand college!</h1>
            <p>Your journey to excellence starts here</p>
             <Link to="Admission"> <button className="button">Apply Now!</button></Link>
             </div>


            <p id="p"><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential</p>

            <p id="p">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

           <h2 className='ul'>Why Choose Vivekanand College?</h2>
           <ul className='ul'>
                <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><b>Holistic Development:</b>Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>

           </ul>
        
            <h2 className='ul'>Campus Life & Facilities</h2>
            
            <img className="img" src="/vck1_.jpeg"/>      <img  className="img" src="/vck2.jpg"/>
            <p id="p">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <p id="p">Ready to explore our courses?</p>

            <Link to="Courses"><button className='green'>Explore Courses!</button></Link>
        <div>
            <Footer/>
        </div>


        </div>
        
    )
}

export default Home
