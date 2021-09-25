import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory,useLocation } from 'react-router-dom';
import "../components/courses.css";
import Certificate from "../components/Certificate";

export default function GroovyDetails(){

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
                    <img src={process.env.PUBLIC_URL +`/Groovy.png`} style={{width: "350px", height: "200px"}} />
                    <h3>Groovy Course</h3>
                    <button onClick={showCourseContent}>Enroll</button>
                </div>
            </div>
          
            <div className="split right">
                <div className="course-desc">
                    <strong>Apache Groovy is a Java-syntax-compatible object-oriented programming language for the Java platform.</strong>
                    <ol className="c">
                        <strong style={{color: "crimson"}}>What you'll learn!</strong>
                        <br />
                        <li>Create Groovy Applications from Scratch</li>
                        <li>Write Groovy Applications in IntelliJ</li>
                        <li>Retain Information through quizzes and exercizes</li>
                        <li>Understand the different features of the Groovy Language</li>
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
                                    Introduction and Goals for this Course
                                </span>
                                <span className="accordion-panel-title">
                                    What is Groovy?
                                </span>
                                <span className="accordion-panel-title">
                                    The Groovy Website and Documentation
                                </span>
                                <span className="accordion-panel-title">
                                    Installing Groovy on Windows
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