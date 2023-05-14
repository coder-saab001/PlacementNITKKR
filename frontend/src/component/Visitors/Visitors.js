import React from 'react';
import './Visitors.css'
function Visitors() {
    return (
        <>
            <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h4 className="text-themecolor">Companies Visited</h4>
                </div>
            </div>
            <div className="main-container">
                <div className="row mb-2">
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/akash.jpg" alt="img1" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/abb.jpg" alt="img2" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/Accolite.jpg" alt="img3" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/addani.jpg" alt="img4" />
                    </div>
                    <div className="col">
                        <img className="hover-img" width="283" height="178" src="data:image/png;base64,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" alt="img1" />
                    </div>
                    <div className="col">
                        <img className="hover-img" width="283" height="178" src="data:image/jpeg;base64,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" alt="img2" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/146.jpg" alt="img3" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/107.jpg" alt="img4" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/6.jpg" alt="img1" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/7.jpg" alt="img2" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/11.jpg" alt="img3" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/12.jpg" alt="img4" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/15.jpg" alt="img1" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/23.jpg" alt="img2" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/24.jpg" alt="img3" />
                    </div>
                    <div className="col">
                        <img className="hover-img" src="https://nitkkr.ac.in/wp-content/uploads/2022/05/29.jpg" alt="img4" />
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Visitors;