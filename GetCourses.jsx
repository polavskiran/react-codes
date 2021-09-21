import React, {useEffect, useState} from "react";
import axios from "axios";
import CourseDetails from "./CourseDetails";
import './courses.css';

function GetCourses() {

    const [nextCount, setNextCount] = useState(5);
    const [prevCount, setPrevCount] = useState(0);
    const [cardData, setCardData] = useState([]);
    const [disabledNext,setDisabledNext] = useState(false);
    const [disabledPrev,setDisabledPrev] = useState(true);

    const url = 'https://jsonplaceholder.typicode.com/photos';

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
        //console.log(resp);
    }

    // console.log("Current Prev Value: "+prevCount+", Current Next Value: "+nextCount);
    let currentPrevCount = prevCount;
    let currentNextCount = nextCount;

    const showNextGridData = (e) => {
        //console.log("showNextGridData");
        //console.log("Prev Value: "+prevCount+", Next Value: "+nextCount);

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
        //console.log("showPrevGridData");
        //console.log("Prev Value: "+prevCount+", Next Value: "+nextCount);

        if(currentPrevCount > 0 || currentPrevCount >= cardData.length){

            setNextCount(currentNextCount-5);
            setPrevCount(currentPrevCount-5);

            setDisabledPrev(false);
            setDisabledNext(false);

        }else {
            setDisabledPrev(true);
        }
    }

    const renderCard = (person) => {

        return(
            <>
                {
                    <div key={person.id} data-source={person.id}>
                        <a href="" style={{display: "block"}} onClick={<CourseDetails />}>
                            <div id="image" className="box">
                                <img src={person.thumbnailUrl} alt="Imagem do Portfolio"/>
                            </div>
                            <div className="text--box">
                                <DottedText text={person.title} />
                            </div>
                            <div className="text--box">
                                <span>
                                    Book Id: {person.id}
                                </span>
                            </div>
                        </a>
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
        if(props.text.length > maxLength){
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
                <div className="course-card--container">
                    {/* <button type="submit" id="btnPrevious" onClick={showPrevGridData}>Previous</button>
                    <button type="submit" id="btnNext" onClick={showNextGridData}>Next</button> */}

                    <ButtonPrev toggle={(e) => showPrevGridData(e)} active={disabledPrev} />
                    <ButtonNext toggle={(e) => showNextGridData(e)} active={disabledNext} />
                </div>
            </>
        );
    }
    else {
        return null;
    }
}

export default GetCourses;