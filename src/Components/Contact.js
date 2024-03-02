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
    <div className="container w-full mt-6 flex justify-center items-center bg-gray-500">
        <p className="mr-4">Contact Us on</p>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <h1>Via Email</h1>
            <p className="mr-4">ukazpromise@gmail.com</p>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <h1>Phone Support</h1>
            <p className="mr-4">07056674363</p>
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <h1>Chat Us On Whatsapp</h1>
            <p className="mr-4">07056674363</p>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <input
            className="py-2 px-4 outline-none"
            type="text"
            placeholder="Email Us"
            />
            <a href="#" target="_blank">
              <button onClick={handleSubscription}>Subscribe</button>
            </a>
        </div>
    </div>
  )
}

export default Contact