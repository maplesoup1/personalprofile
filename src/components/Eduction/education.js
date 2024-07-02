import React, { useState } from "react";
import "./education.css"
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineExperiment } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";

const Education = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="services section" id="services">
            <h2 className="section_title">Education</h2>
            <span className="section_subtitle">University Study in Australia</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <AiOutlineExperiment />
                        <h3 className="services_title">UNSW</h3>
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
                                <p
                                    className="services_modal-description">
                                    Eletive course:
                                </p>
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
                </div>



                <div className="services_content">
                    <div>
                        <AiOutlineExperiment />
                        <h3 className="services_title"></h3>
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
                                hahaha
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
                </div>



                <div className="services_content">
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
                </div>
            </div>

        </section>
    );
}

export default Education;