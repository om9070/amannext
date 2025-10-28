"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { machine } from "../../../Helper/product"; // assuming local data
import LandingPage from '../../_component/LandingPage'
import Image from "next/image";
import ProductList from "../../_component/product_section/ProductList";

export default function MachinePage() {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (id) {
            const found = machine.find((d) => d.id === parseInt(id));
            setData(found);
            setSelectedImage(found?.images?.[0]);
        }
    }, [id]);



    return (
        <>
            <h1>
                <LandingPage pageName={"Product Details"} />
                <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
                    <div>
                        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 p-2">
                            {/* <img
                                src={selectedImage}
                                alt="Selected Machine"
                                className="w-full h-[400px] object-cover"
                            /> */}

                            <Image
                                //   src="/home/logo.png" // Path from /public folder
                                src={selectedImage}
                                alt="Hero Banner"
                                className="object-cover object-center"
                                height={700}
                                width={600}
                                priority // Loads image fast (for hero sections)
                                style={{ borderRadius: "8px" }}
                            />
                        </div>

                        <div className="mt-8 grid grid-cols-4 gap-3">
                            {!!data && data.images.map((img, index) => (
                                <Image
                                    //   src="/home/logo.png" // Path from /public folder
                                    src={img}
                                    alt="Hero Banner"
                                    className={`h-20 object-cover rounded-lg cursor-pointer border-2 transition-transform hover:scale-105 ${selectedImage === img
                                        ? "border-blue-600 shadow-md"
                                        : "border-gray-300"
                                        }`}
                                    onClick={() => setSelectedImage(img)}
                                    height={400}
                                    width={100}
                                    priority // Loads image fast (for hero sections)
                                    style={{ borderRadius: "8px" }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Details */}



                    <div className="flow-root">
                        <dl className="-my-3 divide-y divide-gray-200 text-sm">
                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Product Name</dt>

                                <dd className="text-amber-500 font-bold sm:col-span-2">{data?.productName}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Type</dt>

                                <dd className="text-gray-700 sm:col-span-2">{data?.title}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">MRP</dt>

                                <dd className="text-gray-700 sm:col-span-2"><p className="text-xl text-gray-500 line-through">{data?.price + parseInt(data?.price) / 10}</p></dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Offer PRICE</dt>

                                <dd className="text-gray-700 sm:col-span-2"> <p className="text-2xl font-bold text-[#D32F2F]">{data?.price}/-</p> </dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Review</dt>

                                <dd className="text-gray-700 sm:col-span-2"> <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                </span></dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Description</dt>

                                <dd className="text-gray-700 sm:col-span-2">
                                    {data?.descripiton}
                                </dd>
                            </div>

                            <div className="">
                                {
                                    !!data && data?.machineFeature.map((d) => {
                                        return (<>
                                            <div className="p-2 sm:w-1/2 w-full" key={d.id}>
                                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                        <path d="M22 4L12 14.01l-3-3"></path>
                                                    </svg>
                                                    <span className="title-font font-medium">{d}</span>
                                                </div>
                                            </div>

                                        </>)
                                    })
                                }
                                {/* <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
                                    </div>
                                </div> */}
                            </div>
                            <button className="flex my-10 bg-amber-100 hover:text-cyan-950 text-amber-500 border-2 bg-amber-600-500 border-0 py-2 px-8 focus:outline-none hover:bg-amber-300 rounded text-lg">Order now</button>

                        </dl>
                    </div>

                </div>
            </h1>
            <div className="mx-20 mt-5">
                <ProductList dataItem={machine} active={true} />
            </div>

        </>
    )
}
