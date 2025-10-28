import Image from 'next/image'
import React from 'react'

export default function Client() {
  return (
    <>
          <section>
            <div className="container py-12">
              <div className="mx-auto flex w-full text-left">
                <div className="relative mx-auto inline-flex items-center align-middle">
                  <div className="pb-12 text-center">
                    <h1 className=" header flex max-w-4xl text-center text-4xl font-semibold leading-none tracking-tight text-gray-800 md:text-5xl lg:max-w-3xl overflow-y-hidden">
                      OUR CLIENT{" "}
                    </h1>
                  </div>
                </div>
              </div>
    
              <div className="mx-auto text-center mb-5">
                <div className="mx-auto flex flex-row justify-center gap-10" style={{alignItems:"center"}}>
                  <div>
                    <Image
                      src="/home/client1.jpeg"
                      alt="Professional mechanic"
                      className="serviceImage"
                      width={80}
                      height={50}
                      placeholder="blur"
                      blurDataURL="/seo4.webp"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      style={{ borderRadius: "0px", objectFit: "cover" }}
                      quality={75}
                    />
                  </div>
                  <div>
                    <Image
                      src="/home/client2.png"
                      alt="Professional mechanic"
                      className="serviceImage"
                      width={60}
                      height={30}
                      placeholder="blur"
                      blurDataURL="/seo4.webp"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      style={{ borderRadius: "0px", objectFit: "cover" }}
                      quality={75}
                    />
                  </div>
                  <div>
                    <Image
                      src="/home/client3.png"
                      alt="Professional mechanic"
                      className="serviceImage"
                      width={80}
                      height={50}
                      placeholder="blur"
                      blurDataURL="/seo4.webp"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      style={{ borderRadius: "0px", objectFit: "cover" }}
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}
