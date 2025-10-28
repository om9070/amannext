import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <section>
        <div className="container">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0 flex flex-row gap-5">
                {/* <img
                      src="/home/logo.png"
                      alt="logo"
                      className="mb-4 h-5"
                    /> */}
                <div className='w-50'>
                  <Image
                    src="/logo.png"
                    alt="Professional mechanic"
                    className="serviceImage"
                    width={80}
                    height={50}
                    placeholder="blur"
                    blurDataURL="/seo4.webp"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    style={{ borderRadius: "40px", objectFit: "cover" }}
                    quality={75}
                  />
                </div>
                <div className='flex flex-col align-text-top text-start'>
                  <p className="font-bold text-2xl">A One Vending Service</p>
                  <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla, ad accusantium pariatur ut tempora modi eius quis. Accusantium, maxime qui modi nihil delectus similique eaque debitis. Iste, illum incidunt?</p>
                </div>
              </div>
              <div>
                <h1 className="mb-4 underline font-bold">Product</h1>
                <ul className="space-y-4 text-yellow-700">
                  <li className="font-medium hover:text-gray-800">
                    <Link href="/">Home</Link>   
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <Link href="/product">Product</Link>   
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <Link href="/service">Service</Link>   
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <Link href="/about">About</Link>   
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <Link href="/service-area">Service-area</Link>   
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <Link href="/faqs">Faqs</Link>   
                  </li>
                   <li className="font-medium hover:text-gray-800">
                    <Link href="/contact">Contact</Link>   
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="mb-4 underline font-bold">Social Media</h1>

                <ul className="space-y-4 text-yellow-700">
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">About</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">Team</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">Blog</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">Careers</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">Contact</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="mb-4 underline font-bold">contact</h1>

                <ul className="space-y-4 text-yellow-700">
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">+91 78701 83270</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">aonevendingservice@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="mb-4 underline font-bold">Adress</h1>

                <ul className="space-y-4 text-yellow-700">
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">Twitter</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">Instagram</a>
                  </li>
                  <li className="font-medium hover:text-gray-800">
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-yellow-700 md:flex-row md:items-center">
              <p>© 2024 Wickedblocks. All rights reserved.</p>
              <ul className="flex gap-4">
                <li className="underline hover:text-gray-800">
                  <a href="#"> Terms and Conditions</a>
                </li>
                <li className="underline hover:text-gray-800">
                  <a href="#"> Privacy Policy</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
