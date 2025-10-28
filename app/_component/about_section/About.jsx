import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";
import { MdCoffeeMaker } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { TbToolsOff } from "react-icons/tb";
import Image from 'next/image';

export default function About() {
  return (
    <>
    <section id="about" className="section">
            <h2 className="header">About Us</h2>
            <div className="about-content">
              <div className="about-text">
                <h1 className="title" style={{ color: "#a76533" }}>
                  Coffee Machine Sales & Services
                </h1>
                <p className="mt-6">
                  Welcome to A One Vending Solutions, your premier destination for
                  coffee machine sales and services in Delhi NCR. With over 10 years
                  of experience in the industry, we have established ourselves as
                  the most reliable partner for businesses and individuals seeking
                  quality coffee solutions.
                </p>
                <hr style={{ margin: "2rem" }} />
                <div className="boxsize">
                  <div className="boxchild">
                    <p className="icon">
                      <BsBuildingsFill />
                    </p>
                    <div className="boxsize">
                      <h1 className="typetitle font-medium">
                        Commercial Coffee Machines
                      </h1>
                      <p className="typetext">
                        High-capacity machines for offices, cafes, and restaurants.
                      </p>
                    </div>
                  </div>
                  <div className="boxchild">
                    <p className="icon">
                      <MdCoffeeMaker style={{ color: "violet" }} />
                    </p>
                    <div className="boxsize">
                      <h1
                        className="typetitle font-medium"
                        style={{ color: "steelblue" }}
                      >
                        Home Coffee Machines
                      </h1>
                      <p className="typetext">
                        Compact machines for personal or home use.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="boxchild">
                    <p className="icon">
                      <FaTools style={{ color: "sienna" }} />
                    </p>
                    <div className="boxsize">
                      <h1
                        className="typetitle font-medium"
                        style={{ color: "sandybrown" }}
                      >
                        Accessories & Spare Parts
                      </h1>
                      <p className="typetext">
                        Filters, portafilters, milk frothers, and other attachments.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="boxchild">
                    <p className="icon">
                      <SiBuymeacoffee style={{ color: "mediumturquoise" }} />
                    </p>
                    <div className="boxsize">
                      <h1
                        className="typetitle font-medium"
                        style={{ color: "mediumorchid" }}
                      >
                        Semi-Automatic Coffee Machines
                      </h1>
                      <p className="typetext">
                        Manual control over extraction for coffee enthusiasts.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="boxchild">
                    <p className="icon">
                      <TbToolsOff style={{ color: "maroon" }} />
                    </p>
                    <div className="boxsize">
                      <h1
                        className="typetitle font-medium"
                        style={{ color: "unset" }}
                      >
                        Customized Solutions
                      </h1>
                      <p className="typetext">
                        Coffee machine setup and consultation for offices or
                        businesses.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <hr style={{ margin: "2rem" }} />
                <p className="mt-5">
                  Whether you're a cafe owner, corporate office, or home enthusiast,
                  we have the perfect coffee machine solution tailored to your
                  needs.
                </p>
              </div>
              <div className="about-image">
                <div>
                  <Image
                    src="/home/service.png"
                    alt="Professional mechanic"
                    className="serviceImage"
                    width={300}
                    height={120}
                    placeholder="blur"
                    blurDataURL="/seo4.webp"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      marginRight: "10px",
                    }}
                    quality={75}
                  />
                </div>
                <div className="">
                  <Image
                    src="/home/packing.png"
                    alt="Professional mechanic"
                    className="serviceImage"
                    width={400}
                    height={120}
                    placeholder="blur"
                    blurDataURL="/seo4.webp"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                    quality={75}
                  />
                  <Image
                    src="/home/currior.png"
                    alt="Professional mechanic"
                    className="serviceImage"
                    width={350}
                    height={120}
                    placeholder="blur"
                    blurDataURL="/seo4.webp"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </section>
    </>
  )
}
