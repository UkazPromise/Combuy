import React from 'react';
import './itemDetails.css'; 
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams();

  const items = [
    { id: '1', name: 'Xavier Alpha M', description: 'A high-performance device with powerful features.', image: '/img/xavier-alpha-m-page-sctn-10.webp' },
    { id: '2', name: 'Xavier Alpha S', description: 'Compact and efficient, perfect for everyday use.', image: '/img/xavier-alpha-s-page-sctn-3.webp' },
    { id: '3', name: 'Xavier Alpha XL', description: 'Larger size for a more immersive experience.', image: '/img/xavier-alpha-xl-page-sctn-7.webp' },
    { id: '4', name: 'Mobile Accessories', description: 'A variety of accessories for all your mobile needs.', image: '/img/Mobile_Accessories-removebg-preview.png' },
    { id: '5', name: 'Xavier Alpha S', description: 'Compact and efficient, perfect for everyday use.', image: '/img/xavier-alpha-s-page-sctn-3.webp' },
    { id: '6', name: 'Xavier Alpha XL', description: 'Larger size for a more immersive experience.', image: '/img/xavier-alpha-xl-page-sctn-7.webp' },
    { id: '7', name: 'Xavier Alpha S', description: 'Compact and efficient, perfect for everyday use.', image: '/img/xavier-alpha-s-page-sctn-3.webp' },
    { id: '8', name: 'Xavier Alpha XL', description: 'Larger size for a more immersive experience.', image: '/img/xavier-alpha-xl-page-sctn-7.webp' },
  ];

  const item = items.find((item) => item.id === id);

  // If no item is found, show a message
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="p-6 mt-32 mb-11 flex w-5/6 h-96 bg-white">
      <span className="image-container bg-pink-400 border mx-8">
        <img src={item.image} alt={item.name} className="zoom-image w-56 h-64 mb-4" />
      </span>
      <span className='px-6 bg-pink-200'>
        <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
        <p className="text-lg">{item.description}</p>
      </span>
    </div>
  );
};
export default ItemDetails;
