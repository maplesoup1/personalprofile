import React from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import { AiOutlineCoffee } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

const info = () => {
  return (
    <div className='about_info grid'>
      <div className='about_box'>
        <AiOutlineBulb className='about_icon' />
        <h3 className='about_title'>Experienced</h3>
        <span className='about_subtitle'></span>
      </div>
      <div className='about_box'>
        <AiOutlineCoffee className='about_icon' />
        <h3 className='about_title'>Education</h3>
        <span className='about_subtitle'></span>
      </div>
      <div className='about_box'>
        <AiOutlineGlobal className='about_icon' />
        <h3 className='about_title'>Contact Me</h3>
        <span className='about_subtitle'></span>
      </div>
    </div>
  )
}

export default info
