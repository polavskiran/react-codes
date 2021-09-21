import React from "react";
import {Button, Modal} from "react-bootstrap";

function CourseDetails({courseId}){

    return(
        <>
            <div className="modal-dialog">
                <Button>Add</Button>
                <Modal show={false}>
                    <Modal.Header>Modal Head Part</Modal.Header>
                    <Modal.Body>
                        Hi, React Modal Here.
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default CourseDetails;