import React, { useState } from "react";
import './qualification.css';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import { AiFillFlag } from "react-icons/ai";

const jobDetails = {
    panda: [
        "Participate in marketing, using social media to find and recruit partners",
        "Participate in making sound development suggestions and modifications (UI/UX) to Hungry Panda's platform applications as well as creating promotional posters.",
        "Represented Panda Delivery locally in Sydney at major events such as the Children's Education Show, Sydney Chinatown Night Market, Burwood Carnival, Sydney Housing Show and many more."
    ],
    derbo: [
        "Co-ordinate the company's internal database system and maintain the company's website to ensure data security and efficient operation of the network",
        "Manage and execute the company's tax planning, ensuring compliance with all relevant tax regulations and assisting in the processing of the company's annual tax returns.",
        "Participate in the production of the company's weekly and monthly financial statements and provide key financial insights to management through data analysis and interpretation to optimise payroll structure."
    ],
    smartcity: [
        "Responsible for maintaining and upgrading the company's official corporate website, as well as the company's internal office automation system.",
        "Assist in the collection and collation of enterprise data and participate in consulting ERP system integration"
    ]
};

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);
    const [showDetail, setShowDetail] = useState(null);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const toggleJobDetail = (jobId) => {
        setShowDetail(prevState => prevState === jobId ? null : jobId);
    }

    return (
        <div className={`qualification-wrapper ${showDetail ? 'blur-background' : ''}`}>
            <section className='qualification section' id="qualification">
                <h2 className='section_title'>Qualification</h2>
                <span className='section_subtitle'>Click Education or Experience to check more!</span>
                <div className='qualification_container container'>
                    <div className='qualification_tabs'>
                        <div className={toggleState === 1 ?
                            "qualification_button qualification_active button--flex" : "qualification_button button--flex"
                        }
                            onClick={() => toggleTab(1)}
                        >
                            <AiOutlineCheckCircle />
                            Experience
                        </div>
                        <div className={toggleState === 2 ?
                            "qualification_button qualification_active button--flex" : "qualification_button button--flex"
                        }
                            onClick={() => toggleTab(2)}
                        >
                            <AiOutlineCheckCircle />
                            Web project
                        </div>
                    </div>

                    <div className='qualification_sections'>
                        <div className={toggleState === 1 ?
                            'qualification_content qualification_content-active' :
                            'qualification_content'}>
                            <div className='qualification_data'>
                                <div className="job_title" onClick={() => toggleJobDetail('panda')}>
                                    <h3 className='qualification_title'>Hungry Panda</h3>
                                    <span className='qualification_subtitle'>Marketing Assistant</span>
                                    <div className='qualification_calender'>
                                        <AiOutlineSend />
                                        09.21 - 11.22
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>
                            </div>

                            <div className='qualification_data'>
                                <div></div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>
                                <div className="job_title" onClick={() => toggleJobDetail('derbo')}>
                                    <h3 className='qualification_title'>Derbo Trading PL</h3>
                                    <span className='qualification_subtitle'>IT Audit Assistant</span>
                                    <div className='qualification_calender'>
                                        <AiOutlineSend />
                                        09.23 - 05.24
                                    </div>
                                </div>
                            </div>

                            <div className='qualification_data'>
                                <div className="job_title" onClick={() => toggleJobDetail('smartcity')}>
                                    <h3 className='qualification_title'>Guangzhou Smart City Operation Management Co., Ltd</h3>
                                    <span className='qualification_subtitle'>Front-end Development Summer Internship</span>
                                    <div className='qualification_calender'>
                                        <AiOutlineSend />
                                        06.24 - 07.24
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>
                            </div>
                        </div>

                        <div className={toggleState === 2 ?
                            'qualification_content qualification_content-active' :
                            'qualification_content'}>
                            <div className='qualification_data'>
                                <div>
                                    <h3 className='qualification_title'>Web project 1</h3>
                                    <span className='qualification_subtitle'>Description of project 1</span>
                                    <div className='qualification_calender'>
                                        <AiOutlineSend />
                                        2021-2022
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>
                            </div>

                            <div className='qualification_data'>
                                <div></div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>
                                <div>
                                    <h3 className='qualification_title'>Web project 2</h3>
                                    <span className='qualification_subtitle'>Description of project 2</span>
                                    <div className='qualification_calender'>
                                        <AiOutlineSend />
                                        2021-2022
                                    </div>
                                </div>
                            </div>

                            <div className='qualification_data'>
                                <div>
                                    <h3 className='qualification_title'>Web project 3</h3>
                                    <span className='qualification_subtitle'>Description of project 3</span>
                                    <div className='qualification_calender'>
                                        <AiOutlineSend />
                                        2021-2022
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showDetail && (
                <div className="popup">
                    <div className="popup_content">
                        <h3>{`Detailed description for ${showDetail} role`}</h3>
                        <ul className="detail_ul">
                            {jobDetails[showDetail].map((detail, index) => (
                                <li key={index} className="detail_li"><AiFillFlag />{detail}</li>
                            ))}
                        </ul>

                        <button onClick={() => setShowDetail(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Qualification;
