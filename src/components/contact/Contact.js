import './contact.css'
import Github from '../../img/GitHub-Logo.png';
import LinkedIn from '../../img/lnkdin.png';
import Email from '../../img/email.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gwz5828', 'template_n2pes5o', form.current, 'Scva3APQGmtzGI29h')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'> Get in touch with me NOW! </h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img
                                src={Github}
                                alt=''
                                className='c-icon-1'
                            />
                            <a href="https://github.com/ramriddlez">View my Github Portfolio!</a>

                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' src={Email} alt='' />
                           <a href = 'mailto: ramankangz@outlook.com'> Email me!</a>
                        </div>
                        <div className='c-info-item'>

                            <img className='c-icon' src={LinkedIn} alt='' />
                            <a href="https://www.linkedin.com/in/skilledsoftwaredev">Connect with me!</a>
                        </div>
                        <div className='btn'>
                    <a href="https://pdfhost.io/v/ry9.viEfy_Copy_of_resume_2" target=" _blank" rel="noopener noreferrer" ><button>View Resume!</button></a>
                    </div>

                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        Lifelong learning is the skill I possess and will allow for YOUR team to continuously remain on the cutting EDGE of technological advancements. <br></br>
                        <br></br>
                        If you are looking to bring in a motivated, disciplined, focused, <strong>TEAM PLAYER </strong>, then look no further. Contact me NOW! 🤝🏼⭐
                    </p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' placeholder='Name' name='user_name' />
                        <input type='text' placeholder='Subject' name='user_subject' />
                        <input type='text' placeholder='Email' name='user_email' />
                        <textarea rows="5" placeholder='Type your message here' name='user_message' />
                        <button>Submit</button>
                        {done && '     Thank you for your E-mail!'}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact