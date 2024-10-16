import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    name: 'Xavier Alpa M',
    image: '/img/xavier-alpha-m-page-sctn-10.webp',
    description: 'Full details for Xavier Alpa M',
  },
  {
    id: 2,
    name: 'Xavier Alpa S',
    image: '/img/xavier-alpha-s-page-sctn-3.webp',
    description: 'Full details for Xavier Alpa S',
  },
  {
    id: 3,
    name: 'Xavier Alpa XL',
    image: '/img/xavier-alpha-xl-page-sctn-7.webp',
    description: 'Full details for Xavier Alpa XL',
  },
  {
    id: 4,
    name: 'Mobile Accessories',
    image: '/img/Mobile_Accessories-removebg-preview.png',
    description: 'Full details for Mobile Accessories',
  },
  {
    id: 5,
    name: 'Xavier Alpa S',
    image: '/img/xavier-alpha-s-page-sctn-3.webp',
    description: 'Full details for Xavier Alpha S',
  },
  {
    id: 6,
    name: 'Xavier Alpa XL',
    image: '/img/xavier-alpha-xl-page-sctn-7.webp',
    description: 'Full details for Xavier Alpa XL',
  },
  {
    id: 7,
    name: 'Xavier Alpha S',
    image: '/img/xavier-alpha-s-page-sctn-3.webp',
    description: 'Full details for Xavier Alpha S',
  },
  {
    id: 8,
    name: 'Xavier Alpha XL',
    image: '/img/xavier-alpha-xl-page-sctn-7.webp',
    description: 'Full details for Xavier Alpha XL',
  },
];

const Itemsdisplay = () => {
  return (
    <div className="flex space-x-4 rounded h-96 w[200] mt-4 mx-10">
      {items.map((item) => (
        <Link
          to={`/details/${item.id}`}
          key={item.id}
          className="rounded border-2 border-black-600 h-72 w-48 space-y-3 bg-pink-100 divide-y-2 overflow-hidden"
        >
          <div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <p className="text-center font-semibold">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Itemsdisplay;
