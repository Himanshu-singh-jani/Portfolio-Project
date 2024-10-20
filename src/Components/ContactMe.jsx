

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';   
import 'react-toastify/dist/ReactToastify.css';     

const ContactMe = () => {
    const notify = (message, type = 'success') => {
        if (type === 'success') {
            toast.success(message);
        } else {
            toast.error(message);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('service_v5l90ro', 'template_krs85pg', e.target, 'e66EzBV4-TO06zeH_')                      
            .then(() => {
                notify('Message Sent!');
                setFormData({ name: '', email: '', message: '' }); 
                e.target.reset(); 
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('An error occurred while sending the message:', error);
                notify('Message Sent!', 'error');
                setFormData({ name: '', email: '', message: '' }); 
                setIsSubmitting(false);
            });
    };

    return (
        <div className='flex flex-row gap-5 px-10 flex-1 max-sm:flex-col items-center '>
            <ToastContainer /> 
            <img loading='lazy' className='border-2 rounded-[50%] p-2 w-[42%]  max-md:opacity-10' alt='contact' src="/IMAGES/contact.jpeg" />
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 flex-auto max-sm:w-[100%]'>
                <p className='text-[2.8rem] font-bold text-white'>
                    <span className='text-[2.5rem] font-bold border-b-8 border-b-blue-700'>Contact</span> Me
                </p>
                <input
                    type="text"
                    className='p-2 bg-[transparent] rounded-lg placeholder:text-white text-white  border border-white'
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting} 
                />
                <input
                    type="email"
                    className='p-2 bg-[transparent] rounded-lg placeholder:text-white text-white  border border-white'
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting} 
                />
                <textarea
                    name="message"
                    rows={6}
                    className='p-2 bg-[transparent] rounded-lg placeholder:text-white text-white  border border-white'
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                ></textarea>
                <button
                    type="submit"
                    className='border border-white hover:bgwhite hover:delay-100 hover:text-black rounded-lg p-2 text-white font-bold'
                    disabled={isSubmitting} 
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactMe;
