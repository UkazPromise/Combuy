import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const handleSubscription = () => {
      fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'ukazpromise@gmail.com',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert('You have subscribed!');
          } else {
            alert('Subscription failed. Please try again later.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Something went wrong. Please try again later.');
        });
    };
  return (
    <div className="hero h-48 bg-cover bg-orange-500 flex justify-center items-center w-full">
        <p className="mr-4 text-white font-bold">Contact Us on</p>
        <div className="flex mx-12">
          <a href="#" target="_blank" rel="noopener noreferrer" className='mx-6'>
            <h1 className='text-white font-semibold'>Via Email</h1>
            <p className="mr-4 text-white">ukazpromise@gmail.com</p>
            <FontAwesomeIcon icon={faEnvelope} className='w-10 h-10'/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='mx-6'>
            <h1 className='text-white font-semibold'>Phone Support</h1>
            <p className="mr-4 text-white">07056674363</p>
            <FontAwesomeIcon icon={faPhone} className='w-10 h-10'/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='mx-6'>
            <h1 className='text-white font-semibold'>Chat Us On Whatsapp</h1>
            <p className="mr-4 text-white">07056674363</p>
            <FontAwesomeIcon icon={faWhatsapp} className='w-10 h-10'/>
          </a>
          <input
            className="w-64 h-10"
            type="text"
            placeholder="Your Email"
            />
            <a href="#" target="_blank">
              <button onClick={handleSubscription} className="py-2 px-4 outline-none rounded-lg rounded-l bg-pink text-white">Subscribe</button>
            </a>
        </div>
    </div>
  )
}

export default Contact