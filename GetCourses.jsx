import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import './courses.css';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from "react-router-dom";
import CourseDetails from "./CourseDetails";

function GetCourses() {

    const [nextCount, setNextCount] = useState(5);
    const [prevCount, setPrevCount] = useState(0);
    const [cardData, setCardData] = useState([]);
    const [disabledNext,setDisabledNext] = useState(false);
    const [disabledPrev,setDisabledPrev] = useState(true);
    const [show,setShow] = useState(false);
    const history = useHistory();

    const url = 'http://10.208.66.112:8080/courses';
    const photo = 'https://via.placeholder.com/150/92c952';

    // fires on component mounted and component updated.
    useEffect(() => {
        allCardData()
    },[]);

    const fetchCourses = () => {
        axios.get(
            url
        ).then(
            (response) => {
                console.log(response);
                //setCourses(response.data);
            }
        ).catch(err => {
            console.log(err)}
        )
    }

    // Fetch all data from API
    const allCardData = async () => {
        const  resp = await axios.get(url);
        setCardData(resp.data);
    }

    let currentPrevCount = prevCount;
    let currentNextCount = nextCount;

    const showNextGridData = (e) => {
        if(nextCount < cardData.length){

            setNextCount(currentNextCount+5);
            setPrevCount(currentPrevCount+5);

            setDisabledNext(false);
            setDisabledPrev(false);

        }else {
            setDisabledNext(true);
        }
    }

    const showPrevGridData = (e) => {
        if(currentPrevCount > 0 || currentPrevCount >= cardData.length){

            setNextCount(currentNextCount-5);
            setPrevCount(currentPrevCount-5);

            setDisabledPrev(false);
            setDisabledNext(false);

        }else {
            setDisabledPrev(true);
        }
    }

    function showModel(e){
        console.log("In Model Method");
        e.preventDefault();
        let show = true;
        return(
            <CourseDetails showModel={show} />
        );
    }

    function showBox(){
        setShow(true);
        console.log("Model "+show);
    }

    const renderCard = (course, index) => {
        let courseId = course.course_id;
        let courseName = course.course_name;
        let course_desc = course.course_description;

        return(
            <>
                {
                    <div key={courseId} data-source={courseId}>
                        {/*return history.push(`/pages/${courseName}`);*/}

                        <a href={`/${courseName}/${courseId}`}>
                            <div id="image" className="box">
                                <img src={process.env.PUBLIC_URL +`/images/${courseName}.png`} alt="Course Image" />
                            </div>
                            <div className="text--box">
                            <span>
                                {courseName}
                            </span>
                            </div>
                        </a>

                        {/*<Router>*/}
                        {/*    <Link to={`/pages/${courseName}`}>*/}
                        {/*        <div id="image" className="box">*/}
                        {/*            <img src={process.env.PUBLIC_URL +`/images/${courseName}.png`} alt="Course Image" />*/}
                        {/*        </div>*/}
                        {/*        <div className="text--box">*/}
                        {/*        <span>*/}
                        {/*            {courseName}*/}
                        {/*        </span>*/}
                        {/*        </div>*/}
                        {/*    </Link>*/}

                        {/*    <Switch>*/}
                        {/*        <Route path="/pages/Java" component={JavaCourseDetails} />*/}
                        {/*        <Route path="/pages/Python" component={PythonCourseDetails}/>*/}
                        {/*        <Route path="/pages/Groovy" component={GroovyCourseDetails}/>*/}
                        {/*        <Route path="/pages/Hello" component={Hello}/>*/}
                        {/*    </Switch>*/}
                        {/*</Router>*/}
                    </div>
                }
            </>
        );
    }

    function ButtonPrev(props) {
        return(
            <button type="submit" onClick={props.toggle} disabled={props.active}>Previous</button>
        );
    }

    function ButtonNext(props) {
        return(
            <button type="submit" onClick={props.toggle} disabled={props.active}>Next</button>
        );
    }

    function DottedText(props){
        let maxLength = 20;
        let textLength = props.text.length;

        if(textLength != 0 && textLength > maxLength){
            return(
                <>
                    <span className="dotted-Text text--box">{props.text}</span>
                </>
            )
        }else{
            return(
                <>
                    <span className="dotted-Text text--box">{props.text}</span>
                </>
            )
        }
    }

    if (cardData){
        return(
            <>
                <div className="course-unit--grid carousel--scroll-port carousel--grid carousel--scroll-lock">
                    <div className="course-card--container course-card--main-content">
                        {
                            cardData.slice(prevCount,nextCount).map(renderCard)
                        }
                    </div>
                </div>
                {/*<div className="next-prev">*/}
                {/*    <ButtonPrev toggle={(e) => showPrevGridData(e)} active={disabledPrev} />*/}
                {/*    <ButtonNext toggle={(e) => showNextGridData(e)} active={disabledNext} />*/}
                {/*</div>*/}
            </>
        );
    }
    else {
        return null;
    }
}

export default GetCourses;
