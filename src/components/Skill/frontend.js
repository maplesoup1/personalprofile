import React from 'react'
import { AiFillFire } from "react-icons/ai";

const frontend = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Frontend</h3>
            <div className='skills_box'>
                <div className='skills_group'>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>HTML</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>CSS</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>React</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                </div>
                <div className='skills_group'>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>Javascript</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>Photoshop</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <AiFillFire className="fire-icon" />
                        <div>
                            <h3 className='skills_name'>Blender</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default frontend
