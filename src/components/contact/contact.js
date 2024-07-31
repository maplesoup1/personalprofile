import React, { useState } from 'react';
import { AiFillHourglass } from "react-icons/ai";
import axios from 'axios';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/contact', formData)
            .then((response) => {
                console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <section className='contact section' id="contact">
            <h2 className='section_title'>Get in touch</h2>
            <span className='section_subtitle'>Contact Me</span>

            <div className='contact_container container grid'>
                <div className='contact_content'>
                    <h3 className='contact_title'>Talk to me</h3>
                    <div className='contact_info'>
                        <div className='contact_card'>
                            <AiFillHourglass />
                            <h3 className='contact_card-title'>Email</h3>
                            <span className='contact_card-data'>timmy000728@gmail.com</span>
                            <a href='mailto:timmy000728@gmail.com' className='contact_button'>Find me<AiFillHourglass className='contact_button-icon' /></a>
                        </div>

                        <div className='contact_card'>
                            <AiFillHourglass />
                            <h3 className='contact_card-title'>LinkedIn</h3>
                            <a href='https://linkedin.com/in/xiaofeng-tang-77b550227' className='contact_card-data' target='_blank' rel='noopener noreferrer'>
                                linkedin.com/in/xiaofeng-tang-77b550227
                            </a>
                            <a href='https://linkedin.com/in/xiaofeng-tang-77b550227' className='contact_button'>Find me<AiFillHourglass className='contact_button-icon' /></a>
                        </div>

                        <div className='contact_card'>
                            <AiFillHourglass />
                            <h3 className='contact_card-title'>Github</h3>
                            <span className='contact_card-data'>https://github.com/maplesoup1</span>
                            <a href='wechat://1196745157' className='contact_button'>Find me<AiFillHourglass className='contact_button-icon' /></a>
                        </div>
                    </div>
                </div>

                <div className='contact_content'>
                    <h3 className='contact_title'>Write me your project</h3>

                    <form className='contact_form' onSubmit={handleSubmit}>
                        <div className='contact_form-div'>
                            <label className='contact_form-tag'>Name</label>
                            <input 
                                type='text' 
                                name='name' 
                                className='contact_form-input' 
                                placeholder='Insert your name' 
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className='contact_form-div'>
                            <label className='contact_form-tag'>Email</label>
                            <input 
                                type='email' 
                                name='email' 
                                className='contact_form-input' 
                                placeholder='Insert your E-mail' 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className='contact_form-div contact_form-area'>
                            <label className='contact_form-tag'>Project</label>
                            <textarea 
                                name='project' 
                                cols='30' 
                                rows='10' 
                                className='contact_form-input' 
                                placeholder='Write your project' 
                                value={formData.project} 
                                onChange={handleChange} 
                            ></textarea>
                        </div>
                        <button className='button button--flex'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
