import React from 'react'
import { AiFillFire } from "react-icons/ai";

const backend = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Backend</h3>
            <div className='skills_box'>
                <div className='skills_group'>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>Node JS</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>MongoDB</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>MySQL</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                </div>
                <div className='skills_group'>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>Firebase</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>Python</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>Git</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default backend
