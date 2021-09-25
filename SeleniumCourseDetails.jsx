import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory,useLocation } from 'react-router-dom';
import "../components/courses.css";
import Certificate from "../components/Certificate";

export default function SeleniumDetails(){

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
                    <img src={process.env.PUBLIC_URL +`/Selenium-Course.jpg`} style={{width: "350px", height: "200px"}} />
                    <h3>Selenium Course</h3>
                    <button onClick={showCourseContent}>Enroll</button>
                </div>
            </div>
          
            <div className="split right">
                <div className="course-desc">
                    <strong>Selenium is a portable framework for testing web applications. Selenium provides a playback tool for authoring functional tests without the need to learn a test scripting language.</strong>
                    <ol className="c">
                        <strong style={{color: "crimson"}}>What you'll learn!</strong>
                        <br />
                        <li>By the end of this course,You will be Mastered on Selenium Webdriver with strong Core JAVA basics</li>
                        <li>You will be in a position to pick any website over internet and can automate it with all the possible test cases</li>
                        <li>You will gain the ability to design PAGEOBJECT, DATADRIVEN&HYBRID Automation FRAMEWORKS from scratch</li>
                        <li>Complete knowledge on TestNG, MAVEN,ANT, JENKINS,LOG4J, CUCUMBER, HTML REPORTS,EXCEL API, GRID PARALLEL TESTING</li>
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
                                    What is Selenium?
                                </span>
                                <span className="accordion-panel-title">
                                    Brusing up basic Java Concepts
                                </span>
                                <span className="accordion-panel-title">
                                    Configuring Selenium and Running Tests on All Browsers.
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