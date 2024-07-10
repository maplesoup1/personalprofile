import React, { useState } from "react";
import "./education.css"
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";

const Education = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="services section" id="education">
            <h2 className="section_title">Education</h2>
            <span className="section_subtitle">University Study in Australia</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATAu_t2YlBSq5AQ6PbpBVP4f2G74LAkFlpg&s" alt="Education Icon" className="education_icon" />
                        <h3 className="services_title">UNSW</h3>
                        <span className="degree">Bachelor Degree Of Mathematic</span>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>
                        View More{" "}
                        <AiFillCaretRight />
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <AiOutlineX onClick={() => toggleTab(0)} className="services_modal-close" />
                            <h3 className="services_modal-title">UNSW</h3>
                            <p
                                className="services_modal-description">
                                Major course:
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Number theory and abstract algebra
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Financials Mathematics
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Inferential Statistics
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Linear model
                                    </p>
                                </li>
                            </ul>
                            <p
                                className="services_modal-description">
                                Eletive course:
                            </p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Micro-macroeconomics
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Econometrics
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Cryptography
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <img src="data:image/png;base64,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" alt="Education Icon" className="education_iconUSYD" />
                        <h3 className="services_title">USYD</h3>
                        <span className="degree">Master Degree Of Computer Science</span>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>View More{" "}
                        <AiFillCaretRight />
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <AiOutlineX onClick={() => toggleTab(0)} className="services_modal-close" />
                            <h3 className="services_modal-title">USYD</h3>
                            <p
                                className="services_modal-description">
                                Course specialisation
                            </p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        Web Application
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                    Android studio mobile development
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                    Data Visualization Analysis
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                    Usability UI/UX Design
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                    Cybersecurity Engineering
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                    Multimedia Design and Authoring
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                    Database Management Systems
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                {/* <div className="services_content">
                    <div>
                        <AiOutlineExperiment />
                        <h3 className="services_title"></h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>View More{" "}
                        <AiFillCaretRight className="services_button-icon" />
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <AiOutlineX onClick={() => toggleTab(0)} className="services_modal-close" />
                            <h3 className="services_modal-title">CCCP</h3>
                            <p
                                className="services_modal-description">
                                Glory to CCP!
                            </p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        dddd
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        dddd
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        dddd
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        dddd
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        dddd
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <AiFillCaretRight />
                                    <p className="services_model-info">
                                        dddd
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>

        </section>
    );
}

export default Education;