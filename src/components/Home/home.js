import React from "react";
import './home.css'
import Data from './Data'
import ScrollDown from "./scrollDown";


const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home-content">
                    <div className="home_img"></div>
                    <Data />
                </div>
                <div className="down">
                    <ScrollDown />
                </div>
            </div>
        </section>
    );
}

export default Home;