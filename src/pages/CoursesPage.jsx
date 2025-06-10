import React from "react";
import '../pages/CoursesPage.css'
import { Link } from "react-router-dom"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Courses = () => {
    return (
        <div>
            <Header/>  
            <h1 id="root">Our Academic Programs</h1>   
            <p id="p">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2 className="ul">Discover Campus Life</h2>
            <video id="video" src="/vck3.mp4" type="/video.mp4" controls loops ></video>
	
            <p id="t">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
             <h2 className='ul'>Undergraduate Programs (UG)</h2>

             <ul className="ul"> 
             <li><h4>Bachelor of Science (B.Sc.)</h4></li>
             <ul>
                <li>Computer Science (3 years)</li>
                <li>Information Technology (3 years)</li>
                <li>Biotechnology (3 years)</li>
             </ul>
                <li><h4>Bachelor of Commerce (B.Com.)</h4></li>
             <ul>
                <li>Accounting & Finance (3 years)</li>
                <li>Banking & Insurance (3 years)</li>
             </ul>
             <li><h4>Bachelor of Arts (B.A.)</h4></li>
                <ul>
                    <li>English Literature (3 years)</li>
                    <li>Psychology (3 years)</li>
                </ul>
             </ul>

                <li><h2 className="ul">Postgraduate Programs (PG)</h2></li>
             <ul className="ul">
                <li>Master of Science (M.Sc.)</li>
                <ul>
                    <li>Computer Science (2 years)</li>
                    <li>Information Technology (2 years)</li>
                </ul>
                <li>Master of Commerce (M.Com) (2 years)</li>
                <li>Master of Arts (M.A.) (2 years)</li>
             </ul>
             <h2 className="ul">Program Details & Fee Structure (Annual)</h2>

             <table border="0.9px" id="table">
                <tr id="s">
                    <th>Program Type</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Anual Fee(INR)</th>
                    <th>Eligibility</th>
                </tr>
                <tr id="c">
                    <td>UG</td>
                    <td>B.Sc. Computer Science</td>
                    <td>3 Years</td>
                    <td>Rs. 85000</td>
                    <td>10+2 with PCM(50%)</td>
                </tr>
                <tr>
                    <td>UG</td>
                    <td>B.Com. Accounting & Finance</td>
                    <td>3 Years</td>
                    <td>Rs. 70000</td>
                    <td>10+2 Commerce(45%)</td>
                </tr>
                <tr id="c">
                    <td>PG</td>
                    <td>M.Sc. Information Techology</td>
                    <td>3 Years</td>
                    <td>Rs. 90000</td>
                    <td>B.Sc. IT/CS(50%)</td>
                </tr>
             </table>
             <h2 className="ul">Specialized & Vocational Courses</h2>
             <p id="p">In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.<br></br>Have questions about a specific course?</p>
            <a href="/ContactPage"><button className="green">Inquire About Courses</button></a>
        <div>
            <Footer/>
        </div>
        </div>
    )
}

export default Courses