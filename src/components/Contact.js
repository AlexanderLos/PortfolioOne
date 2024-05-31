import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

function Contact() {
    const [formValues, setFormValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_sfwd66v', 'template_zmwcxbm', formValues, '2vJ93VefGi8jIIi-O')
            .then((result) => {
                console.log(result.text);
                setSubmitMessage('Message sent successfully.');
                setFormValues({ user_name: '', user_email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setSubmitMessage('Failed to send message. Please try again later.');
            });
    };

    return (
        <>
        <h2>Contact</h2>
        <div className="contact-container">
            <div className="contact-form">
                <form onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Your Name" value={formValues.user_name} onChange={handleChange} required />
                    <input type="email" name="user_email" placeholder="Your Email" value={formValues.user_email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formValues.message} onChange={handleChange} required></textarea>
                    <button type="submit">Send</button>
                </form>
                {submitMessage && <div className="submit-message">{submitMessage}</div>}
            </div>
        </div>
        </>
    );
}

export default Contact;
