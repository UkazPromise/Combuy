import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobile, faClock, faHeadphones, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Carousel from "../Functions/Carousel";

const Main = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);

  const categories = [
    {
      name: 'Laptops and Notebooks',
      icon: faLaptop,
      subcategories: [
        {
          name: 'New',
          brands: [
            {
              name: 'Dell',
              products: [
                { name: 'Dell XPS 13', image: '' },
                { name: 'Dell Inspiron 15', image: '' },
              ],
            },
            {
              name: 'HP',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Xavier',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Asus',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Macbook',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Lenovo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Zinox',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
        {
          name: 'Fairly Used',
          brands: [
            {
              name: 'Dell',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Hp',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Lenovo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Macbook',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Asus',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Phones and Tablets',
      icon: faMobile,
      subcategories: [
        {
          name: 'New',
          brands: [
            {
              name: 'Apple',
              products: [
                { name: 'Dell XPS 13', image: '' },
                { name: 'Dell Inspiron 15', image: '' },
              ],
            },
            {
              name: 'Samsung',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Hauwei',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Oppo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Vivo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Xiaomi',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Tecno',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Itel',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
        {
          name: 'Fairly Used',
          brands: [
            {
              name: 'Apple',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Samsung',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Oppo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Vivo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Xiaomi',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Smart Watches',
      icon: faClock,
      subcategories: [
        {
          name: 'New',
          brands: [
            {
              name: 'Apple',
              products: [
                { name: 'Dell XPS 13', image: '' },
                { name: 'Dell Inspiron 15', image: '' },
              ],
            },
            {
              name: 'Samsung',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: '915 Generation',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'A-Line',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Alight Charger',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'AL Rawda',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Amazfit',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Tecno',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Zealot',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Xiaomi',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Itel',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Accessories',
      icon: faHeadphones,
      subcategories: [
        {
          name: 'New',
          brands: [
            {
              name: 'New Age',
              products: [
                { name: 'Power Banks', image: '' },
                { name: 'Chargers', image: '' },
                { name: 'Cables', image: '' },
                { name: 'Earpods', image: '' },
                { name: 'Headphones', image: '' },
              ],
            },
            {
              name: 'Oraimo',
              products: [
                { name: 'Power Banks', image: '' },
                { name: 'Chargers', image: '' },
                { name: 'MicroSD Cards', image: '' },
                { name: 'Ear Piece', image: '' },
                { name: 'Earpods', image: '' },
                { name: 'Headphones', image: '' },
              ],
            },
            {
              name: 'Dell',
              products: [
                { name: 'Bluetooth Keyboard', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'Bluetooth Mouse', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Havit',
              products: [
                { name: 'Havit 2.4G Wireless Bluetooth Mouse', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'Earbuds', image: 'path/to/hp-envy-13.jpg' },
                { name: 'GameNote Fuxi-H3', image: 'path/to/hp-envy-13.jpg' },
                { name: 'PowerBanks', image: 'path/to/hp-envy-13.jpg' },
                { name: 'Power Station', image: 'path/to/hp-envy-13.jpg' },
                { name: 'Wireless Chargers', image: 'path/to/hp-envy-13.jpg' },
                { name: 'Havit GK2 Recording Microphone', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Logitech',
              products: [
                { name: 'Pop Mouse', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'ERGO M575S', image: 'path/to/hp-envy-13.jpg' },
                { name: 'POP Icons Keys', image: 'path/to/hp-envy-13.jpg' },
                { name: 'Wave Keys for Mac', image: 'path/to/hp-envy-13.jpg' },
                { name: '4K Pro Webcam', image: 'path/to/hp-envy-13.jpg' },
                { name: 'C922 PRO HD STREAM WEBCAM', image: 'path/to/hp-envy-13.jpg'},
                { name: 'Z150 Stereo Speakers', image: 'path/to/hp-envy-13.jpg' },
                { name: 'MEGABOOM 4', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Zealot',
              products: [
                { name: 'Bluetooth Speaker', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'Bluetooth Headphones', image: 'path/to/hp-envy-13.jpg' },
                { name: 'Karaoke Speaker', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Microsoft',
              products: [
                { name: 'Surface Pro Keyboards', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'Surface Arc Mouse', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Games',
      icon: faGamepad,
      subcategories: [
        {
          name: 'New',
          brands: [
            {
              name: 'Xbox',
              products: [
                { name: 'Dell XPS 13', image: '' },
                { name: 'Dell Inspiron 15', image: '' },
              ],
            },
            {
              name: 'PlayStation',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Nintendo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: '2KSport',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Macbook',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Lenovo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Zinox',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
        {
          name: 'Fairly Used',
          brands: [
            {
              name: 'Dell',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Hp',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Lenovo',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Macbook',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
            {
              name: 'Asus',
              products: [
                { name: 'HP Spectre x360', image: 'path/to/hp-spectre-x360.jpg' },
                { name: 'HP Envy 13', image: 'path/to/hp-envy-13.jpg' },
              ],
            },
          ],
        },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setActiveSubcategory(null);
    setActiveBrand(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
    setActiveBrand(null);
  };

  const handleBrandClick = (brand) => {
    setActiveBrand(brand);
  };

  const closeOverlay = () => {
    setActiveSubcategory(null);
    setActiveBrand(null);
  };

  return (
    <>
      <div className="flex space-x-4 rounded h-96 w[200] mt-4 mx-10 relative">
        <div className="rounded border h-96 w-1/3 space-y-3 bg-slate-100 divide-y-2">
          <h2 className="mt-2 text-center font-bold bg-slate-600">All Category</h2>
          <ul className="marker:text-sky-400 list-none pl-5">
            {categories.map((category, index) => (
              <li key={index} className="mt-2 font-semibold text-sm transition ease-in-out delay-150">
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="hover:text-red-600 transition hover:scale-110 duration-300"
                    onClick={() => toggleDropdown(index)}
                  >
                    <FontAwesomeIcon icon={category.icon} className="mr-2" />
                    {category.name}
                  </a>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-500 hover:text-gray-800 ml-2"
                  >
                    {openDropdown === index ? '-' : '+'}
                  </button>
                </div>
                {openDropdown === index && (
                  <ul className="ml-6 mt-2 list-disc">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li
                        key={subIndex}
                        className="mt-1 hover:text-blue-600 transition cursor-pointer"
                        onClick={() => handleSubcategoryClick(subcategory)}
                      >
                        {subcategory.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded border w-2/3 bg-white text-center mb-4">
          <Carousel />
        </div>
        <div className="rounded w-1/3 divide-y flex flex-col space-y-4">
          <div className="h-48 rounded border bg-slate-300">
            Technicians
            <ul>
              <li className='mt-2 hover:text-red-600 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                <a href="#">Fix Your Tech Gadgets</a>
              </li>
            </ul>
          </div>
          <div className="h-48 rounded border bg-slate-300">
            Hot Deals
            <ul></ul>
          </div>
        </div>
        {activeSubcategory && (
          <div className="absolute top-0 left-1/4 h-96 w-3/4 bg-white bg-opacity-100 p-4 text-black transition-transform transform duration-300 z-50">
            <button
              onClick={closeOverlay}
              className="text-black absolute top-2 right-2"
            >
              X
            </button>
            <h3 className="font-bold mb-2">{activeSubcategory.name}</h3>
            <ul>
              {activeSubcategory.brands.map((brand, brandIndex) => (
                <li
                  key={brandIndex}
                  className="mt-1 hover:text-blue-600 transition cursor-pointer"
                  onClick={() => handleBrandClick(brand)}
                >
                  {brand.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeBrand && (
          <div className="absolute top-0 left-1/4 h-96 w-3/4 bg-white bg-opacity-100 border text-black transition-transform transform duration-300 z-50">
            <button
              onClick={closeOverlay}
              className="text-black absolute top-2 right-2"
            >
              X
            </button>
            <h3 className="font-bold mb-2">{activeBrand.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              {activeBrand.products.map((product, productIndex) => (
                <div key={productIndex} className="flex flex-col items-center">
                  <img src={product.image} alt={product.name} className="h-24 w-24 mb-2" />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        )} 
      </div>
    </>
  );
};

export default Main;
