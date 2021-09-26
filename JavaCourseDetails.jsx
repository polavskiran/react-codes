import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory,useLocation } from 'react-router-dom';
import "../components/courses.css";
import Certificate from "../components/Certificate";
import { useParams } from "react-router";
//import Navbaruser from '../NavbarUser/NavbarUser'
import axios from "axios";

export default function JavaDetails(){

    const [showCourseDetails,setShowCourseDetails] = useState(false);
    let history = useHistory();
    const { id,emp_id } = useParams();
    const [result3, setResult3] = useState({result: ""});
    const [enrollId, setEnrollId] = useState('');

    function showCertificate() {
        alert("Course Completed");
        completeCourse();
        return history.push({pathname: '/certificate', state: `${result2.empid}`});
    }

    function showCourseContent(){
        fetchCourseDetail();
        setShowCourseDetails(true);
    }

    const fetchCourseDetail = async () => {

        const resp_course = await axios.get(`http://10.208.66.112:8080/course/1`);

        console.log(resp_course.data);
        setResult3(resp_course.data);

    }

    useEffect(() => {
        userDetails()
    },[]);
          const location = useLocation();
    
            //console.log(useHistory());
             console.log(location.state); // result: 'some_value'
             const [result2, setResult2] = useState({result: ""});
    
             const userDetails = async () => {
             const resp2 = await axios.get(`http://10.208.66.112:8080/user/${location.state}`);
                setResult2(resp2.data);
                console.log(resp2.data);
                console.log("this is phy course")
                console.log(resp2.data.name);
                console.log(result2.name);
    
             }


    const enrollCourse = async () => {
        console.log(id+" : "+emp_id);
        
        console.log("testing authot" + result3.course_author);
        const courseDetails = {course_id: "1", emp_id: result2.empid, course_name: result3.course_name, 
        course_author: result3.course_author, course_description: result3.course_description, course_enrolled_status: "Pending", course_duration: result3.course_duration};
        const resp = await axios.post('http://10.208.66.112:8080/enrolling', courseDetails);
        setEnrollId(resp.data.enroll_id);
        console.log(resp);
    }

    const completeCourse = async () => {

        const courseDetails = {enroll_id:enrollId,course_id: "1", emp_id: result2.empid, course_name: result3.course_name, 

        course_author: result3.course_author, course_description: result3.course_description, course_enrolled_status: "Completed", course_duration: result3.course_duration};

        const resp = await axios.post('http://10.208.66.112:8080/enrolling', courseDetails);

        console.log("Final: "+resp);
    }

    function saveCourse(e) {
        console.log(id+" : "+emp_id);
        e.preventDefault();

        fetchCourseDetail();
        enrollCourse();
    }
    return(        
        <>            
            <form name="javaCourse" onLoad={fetchCourseDetail} onSubmit={saveCourse}>
                <div>
                    {/* <Navbaruser/> */}
                <div className="split left">
                    <div className="centered">
                        <img src={process.env.PUBLIC_URL +`/JavaImage.jpg`} style={{width: "200px", height: "200px"}} />
                        <br/ ><br/ >
                        <h2><strong>Course Content</strong></h2>
                            {/* <div className="udlite-text-sm">
                                <span className="accordion-panel-title">
                                    Introduction to the Course
                                </span>
                                <span className="accordion-panel-title">
                                    Tip to Succeed as a Java Programmer
                                </span>
                                <span className="accordion-panel-title">
                                Gain in-depth understanding of core & advanced features of Java including JVM internals.
                                </span>
                            </div> */}
                            <span className="curriculum--content-length">
                                25 sections <strong>.</strong> 120 Lectures <strong>.</strong> 45h 30m length
                            </span>
                            
                        <button className="coursebtn" onClick={showCourseContent}>Enroll</button>
                    </div>
                </div>
            
                <div className="split right">
                    <div className="course-desc">
                        <strong>Java is a high-level, class-based, object-oriented programming language
                            that is designed to have as few implementation dependencies as possible.</strong>
                            <br /><br />
                            <strong style={{color: "crimson"}}>What you'll learn!</strong>
                        <ul className="c">
                            <li>Gain in-depth understanding of core & advanced features of Java including JVM internals</li>
                            <li>Master design principles, best practices and coding conventions for writing well-designed, professional Java code</li>
                            <li>Get real-world experience by developing an instructor-led Java EE-based Web application using technologies like JSP, Servlets and MySQL</li>
                        </ul>
                        {
                            showCourseDetails && (
                            <>
                                {/* <div className="udlite-text-sm">
                                    <span className="accordion-panel-title">
                                        Introduction to the Course
                                    </span>
                                    <span className="accordion-panel-title">
                                        Tip to Succeed as a Java Programmer
                                    </span>
                                    <span className="accordion-panel-title">
                                        Introduction to the Course
                                    </span>
                                    <span className="accordion-panel-title">
                                        Introduction to the Course
                                    </span>
                                </div> */}
                            
                            <div className="udlite-text-sm">
                            <button className="coursebtn" onClick={showCertificate} id='btnComplete'>Complete</button>
                            </div>
                            </>
                            )                        
                        }
                    </div>
            </div>
            </div>
            </form>
            
        </>
    );
}