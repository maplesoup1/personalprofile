import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";


const ScrollDown = () => {
    return (
        <div className="home_scroll">
            <a href='#about' className="home_scroll-button">
                <div className="rocket"></div>
                <sapn className="home_scroll-name">Scroll Down</sapn>
                <AiOutlineArrowDown />
            </a>
        </div>
    );
}

export default ScrollDown;