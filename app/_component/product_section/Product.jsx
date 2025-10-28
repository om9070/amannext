'use client'
import React, { useState } from 'react'
import ProductList from './ProductList'
import { machine, product } from '@/Helper/product'

export default function Product() {
  const [data, setdata] = useState(machine)
  const [active, setActive] = useState(true)
  const [input,setinput]=useState("")


  const handleMachine = () => {
    setdata(machine)
    setActive(true)
  }

  const handleProduct = () => {
    setdata(product)
    setActive(false)

  }

  const handleSearch = () => {
  const filterdata=data.filter((e)=>e.productName.includes(input))
    setdata(filterdata)
  }

  const handleClear=()=>{
     setdata(machine)
    setActive(true)
  }

  return (
    <>
      <section>
        <h2 className="header mt-8">OUR PRODUCT</h2>

        <div className="mx-auto max-w-screen-xl px-4 py-0 sm:px-6 sm:py-4 lg:px-8">

          <div className="lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="space-y-4 lg:block">
              <div>
                <label htmlFor="Search">

                  <div className="relative">
                    <input
                      type="text"
                      id="Search"
                      value={input}
                      onChange={(e)=>{setinput(e.target.value)}}
                      className="mt-0.5 w-full h-10 rounded border-gray-300 pe-10 shadow-sm sm:text-sm p-1"
                    />

                    <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                      <button
                        type="button"
                        aria-label="Submit"
                        className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                        onClick={handleSearch}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                  <p className='text-amber-500 p-1 border-1 w-16 m-2 text-center rounded-2xl hover:bg-amber-200' onClick={handleClear}>clear</p>
                </label>

              </div>

              <div>
                <p className="block text-xs font-medium text-gray-700">
                  Filters
                </p>

                <div className="mt-3 space-y-2">
                  <ul className="space-y-1">
                    <li onClick={handleMachine}>
                      <a
                        className={`block rounded-lg ${active ? "bg-gray-100" : ""} px-4 py-2 text-sm font-medium hover:bg-gray-100 text-gray-700`} >
                        Machine
                      </a>
                    </li>

                    <li onClick={handleProduct}>
                      <a
                        // href="#"
                        className={`block rounded-lg ${!active ? "bg-gray-100" : ""} px-4 py-2 text-sm font-medium hover:bg-gray-100 text-gray-700`}
                      >
                        Products
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <ProductList dataItem={data} active={active} />
          </div>
        </div>
      </section>
    </>
  )
}
