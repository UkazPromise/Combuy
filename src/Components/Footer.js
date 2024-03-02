import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faWhatsapp, faCcMastercard, faCcVisa, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white py-4">
      <div className="text-left font-bold text-2xl cursor-pointer items-center">
          <span className="text-3x1 flex text-indigo-600 mr-1 pt-2">
            <img src="/img/trolley_4290854.png" alt="combuy" class="w-10 h-10"/>
            <span className="text-red-600">C</span>
            <span className="text-blue-600">o</span>
            <span className="text-green-600">m</span>
            <span className="text-yellow-600">B</span>
            <span className="text-orange-600">u</span>
            <span className="text-pink-600">y</span>
          </span>
          <p className='text-sm'>Combuy is the first of it's kind, we only deal on IT gadgets, <br/>we sell both new and fair used gadgets which are certified to be good<br/>
          We also repair gadgets and deliver it back to your home</p>
      </div>
      <div className="text-center mx-auto text-justify items-center">
        <ul>
          <li>Partner with Us</li>
          <li>Sell with Us</li>
          <li>Become a Technician</li>
          <li>Become a Logistic Partner</li>
        </ul>
        <p className="mr-4">Follow us on social media:</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div className="text-right text-justify">
        <p className="mr-4">For enquiry email us on 
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </p>
        <p className="mr-4">Payments </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCcMastercard} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCcVisa} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGooglePay} />
          </a>
      </div>
    </div>
  )
}

export default Footer