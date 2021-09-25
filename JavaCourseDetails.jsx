import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory,useLocation } from 'react-router-dom';
import "../components/courses.css";
import Certificate from "../components/Certificate";

export default function JavaDetails(){

    const [showCourseDetails,setShowCourseDetails] = useState(false);
    let history = useHistory();

    function showCertificate(){
        alert("Course Completed");
        history.push("/Certificate");
    }

    function showCourseContent(){
        setShowCourseDetails(true);
    }

    return(
        
        <>  
            <div className="split left">
                <div className="centered">
                    <img src={process.env.PUBLIC_URL +`/JavaImage.jpg`} style={{width: "350px", height: "200px"}} />
                    <h3>Java Course</h3>
                    <button onClick={showCourseContent}>Enroll</button>
                </div>
            </div>
          
            <div className="split right">
                <div className="course-desc">
                    <strong>Java is a high-level, class-based, object-oriented programming language <br/>
                        that is designed to have as few implementation dependencies as possible.</strong>
                    <ol className="c">
                        <strong style={{color: "crimson"}}>What you'll learn!</strong>
                        <br />
                        <li>Gain in-depth understanding of core & advanced features of Java including JVM internals</li>
                        <li>Master design principles, best practices and coding conventions for writing well-designed, professional Java code</li>
                        <li>Get real-world experience by developing an instructor-led Java EE-based Web application using technologies like JSP, Servlets and MySQL</li>
                    </ol>
                    {
                        showCourseDetails && (
                        <>
                            <div className="udlite-text-sm">
                            <h2><strong>Course Content</strong></h2>
                            <span className="curriculum--content-length">
                                25 sections <strong>.</strong> 120 Lectures <strong>.</strong> 45h 30m length
                            </span>                            
                            <h3>                
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
                            </h3>
                        </div>
                        
                        <div className="udlite-text-sm">
                        <button onClick={showCertificate} id='btnComplete'>Complete</button>
                        </div>
                        </>
                        )                        
                    }
                </div>
          </div>
        </>
    );
}