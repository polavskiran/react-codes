import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory,useLocation } from 'react-router-dom';
import "../components/courses.css";
import Certificate from "../components/Certificate";

export default function PythonDetails(){

    const [showCourseDetails,setShowCourseDetails] = useState(false);
    let history = useHistory();

    function showCertificate() {
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
                    <img src={process.env.PUBLIC_URL +`/PythonCourse.jpg`} style={{width: "350px", height: "200px"}} />
                    <h3>Python Course</h3>
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
                        <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
                        <li>Get an understanding of how to create GUIs in the Jupyter Notebook system!</li>
                        <li>Learn to use Object Oriented Programming with classes!</li>
                        <li>Build a complete understanding of Python from the ground up!</li>
                    </ol>
                    {
                        showCourseDetails && (
                        <>
                            <div className="udlite-text-sm">
                            <h2><strong>Course Content</strong></h2>
                            <span className="curriculum--content-length">
                                23 sections <strong>.</strong> 130 Lectures <strong>.</strong> 25h 30m length
                            </span>
                            <ol>
                                <li>
                                    <span className="accordion-panel-title">
                                        Introduction to the Course
                                    </span>
                                </li>
                                <li>
                                    <span className="accordion-panel-title">
                                        Tip to Succeed as a Java Programmer
                                    </span>
                                </li>
                                <li>
                                    <span className="accordion-panel-title">
                                    Intalling Python (Step by Step)
                                    </span>
                                </li>
                                <li>
                                    <span className="accordion-panel-title">
                                    Running Python Code
                                    </span>
                                </li>
                                <li>
                                    <span className="accordion-panel-title">
                                    Introduction to Python Datatypes
                                    </span>
                                </li>
                            </ol>
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