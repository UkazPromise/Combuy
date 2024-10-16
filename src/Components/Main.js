import React from 'react'
import Carousel from "../Functions/Carousel"

const Main = () => {
  return (
    <>
      <div className="flex space-x-4 rounded h-96 w[200] mt-4 mx-10">
        <div className="rounded border h-96 w-1/3 space-y-3 bg-slate-100 divide-y-2">
            <h2 className="mt-2 text-center font-bold bg-slate-600">All Category</h2>
            <ul className=" marker:text-sky-400 list-disc pl-5">
              <li className='mt-2 hover:text-red-600 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#">Laptops and Notebooks</a></li>
              <li className='mt-2 hover:text-red-600 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#">Phones and Tablets</a></li>
              <li className='mt-2 hover:text-red-600 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#">Smart watches</a></li>
              <li className='mt-2 hover:text-red-600 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#">Accessories</a></li>
            </ul>
        </div>
        <div className="rounded border w-2/3 bg-white text-center mb-4">
          <Carousel/>
        </div>
        <div className="rounded w-1/3 divide-y flex flex-col space-y-4">
          <div className="h-48 rounded border bg-slate-300">Technicians
            <ul>
              <li className='mt-2 hover:text-red-600 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#">Fix Your Tech Gadgets</a></li>
            </ul>
          </div>
          <div className="h-48 rounded border bg-slate-300"> Hot Deals
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main