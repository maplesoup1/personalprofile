import React from 'react'
import "./skill.css"
import Frontend from './frontend'
import Backend from './backend'

const skill = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'>relative skill</span>
        <div className='skills_container container grid'>
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}

export default skill
