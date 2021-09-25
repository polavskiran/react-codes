import './certificate.css';
import React from 'react';

function Certificate() {
    console.log("Certificate generated.");

  return (
    <div className="certificate-container">
        <div className="certificate">
            <div className="water-mark-overlay"></div>
            {/* <div className="certificate-header">
                <img src="https://rnmastersreview.com/img/logo.png" className="logo" alt=""></img>
            </div> */}
            <div className="certificate-body">

                <p className="certificate-title"><strong>TrainMe Application</strong></p>
                <h1>Certificate of Course Completion</h1>
                <h2>This Certificate is presented to</h2>
                <p className="student-name">Hareesh Uppunuthula</p>
                <div className="certificate-content">                    
                    <p className="topic-title">
                        For completing 1-month course training in Java Programming.
                    </p>
                    <div className="text-center">
                    </div>
                </div>
                <div className="certificate-footer text-muted">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Manager: Subramoniam AB </p>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>
                                        Accredited by
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        Endorsed by
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Certificate;