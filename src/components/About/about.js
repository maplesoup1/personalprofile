import React from "react";
import "./about.css"
import CV from "../../assets/cv.pdf"
import AbloutImg from "../../images/money.jpeg"
import Info from "./info";
import { AiFillStar } from "react-icons/ai";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>
            <div className="about_container container grid">
                <img src={AbloutImg} alt="wechat" className="about_img" />

                <div className="about_data">
                    <Info />
                    <p className="about_description">
                        I graduated from UNSW with an undergraduate degree in Mathematics and am now enrolled in a
                        Master's degree in Computer Science at USYD. I have hands-on experience applying Java, Python, C++,
                        R, SQL, HTML, and JavaScript in academic programs. One of my specialties and passions is front-end
                        development, with HTML, CSS, and JavaScript being my favorite programming languages.
                    </p>
                    <a download="" href={CV} className="button button--flex">DownLoad CV  <AiFillStar className="button_icon" /></a>
                    
                </div>
            </div>

        </section>
    );
}

export default About;