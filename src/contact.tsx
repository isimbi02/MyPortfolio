import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Now you can use faTwitter in your code

import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Message:', message);
        setName('');
        setAddress('');
        setMessage('');
    };

    return (
        <div className='reach-out-to-us-container'>
            <h2 className='wedo'>Reach Out to Us </h2>
            <form onSubmit={handleSubmit} className='reach'>
                <div className='input'>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className='input'
                        placeholder='Name'
                    />
                </div>
                <div>
                    <label htmlFor="address"></label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={handleAddressChange}
                        className='input'
                        placeholder='Email address'
                    />
                </div>
                <div>
                    <label htmlFor="message"></label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        className='input'
                        placeholder='Leave a message'
                    />
                </div>
                <button type="submit">Submit</button>

                <div>
                <a href="https://www.linkedin.com/in/isimbi-rutagengwa-deborah-504620259" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className='icons' />
</a>

<a href="https://www.instagram.com/___deborahhh___/#" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faSquareInstagram} className='icons' />
</a>

<a href="https://twitter.com/Isimbi02" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faXTwitter} className='icons' />
</a>


         </div>
            </form>
            

        </div>
    );
}

export default Contact;

