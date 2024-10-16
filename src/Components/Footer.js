import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faWhatsapp, faCcMastercard, faCcVisa, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white py-4">
            <img src="/img/combuy-logo.png" alt="combuy" class="w-20 h-20 mx-10"/>
      <div>
        <p className='text-sm'>Combuy is the first of it's kind, we only deal on IT gadgets, <br/>we sell both new and fair used gadgets which are certified to be good<br/>
            We also repair gadgets and deliver it back to your home</p>
            <p className="mr-4">Follow us on social media:</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-4xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-4xl"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-4xl"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="text-4xl"/>
              </a>
            </div>
      </div>
      <div className="mx-10 text-justify items-center">
        <ul>
          <li>Partner with Us</li>
          <li>Sell with Us</li>
          <li>Become a Technician</li>
          <li>Become a Logistic Partner</li>
        </ul>
      </div>
      <div>
        <p className="mr-4">For enquiry email us on 
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </p>
        <p className="mr-4">Payments </p>
          <a href="#" target="_blank" rel="noopener noreferrer" className='h-10 w-10 px-4'>
            <FontAwesomeIcon icon={faCcMastercard} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='h-10 w-10 px-4'>
            <FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='h-10 w-10 px-4'>
            <FontAwesomeIcon icon={faGooglePay} />
          </a>
          <svg>
          </svg>
      </div>
    </div>
  )
}

export default Footer