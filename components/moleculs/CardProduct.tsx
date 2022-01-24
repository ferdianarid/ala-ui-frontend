import React from 'react'
import Image from 'next/image'
// import subheading
import { Subheading } from '../atoms/text/Heading'

// import details button
import PrimaryButton from '../atoms/button/PrimaryButton'
import { SecondaryCategoryBadge } from '../atoms/badges'


interface ICardProduct {
       images: StaticImageData
       title: string
       price: string
       location: string
       grade: string
       sold: string
       category: string
       remaining: string
}

// card tickets components
const CardProduct = (props: ICardProduct) => {
       const { images, title, price, location, grade, category, sold, remaining } = props
       return (
              <React.Fragment>
                     <div className="bg-white w-full border border-gray-200 p-3 md:p-4 rounded-xl h-auto relative">
                            <Image className='cover rounded-lg object-cover' width="500px" height="350px" src={images} alt="travel" />
                            <SecondaryCategoryBadge>{category}</SecondaryCategoryBadge>
                            {/* card body */}
                            <div className="pt-4">
                                   <div className="flex items-center justify-between">
                                          <p className="text-sm md:text-lg font-extrabold text-gray-600">{title}</p>
                                          <p className="text-sm md:text-lg font-bold text-yellow-600">Rp.{price}</p>
                                   </div>
                                   <div className="flex items-center justify-between">
                                          <p className="discount text-xs flex items-center font-bold text-gray-500 pt-1">IDR 50.000</p>
                                          <p className='text-xs md:text-sm font-bold bg-yellow-500 bg-opacity-10 text-yellow-500 py-1 px-2 rounded-md my-2'>Save 50%</p>
                                   </div>

                                   <p className="text-xs font-normal text-gray-500 py-1">{remaining} /pcs tersisa</p>

                                   <p className="text-xs flex items-center font-normal text-gray-800 pt-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                          Lokasi : {location}</p>

                                   <div className="flex items-center mt-2">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 " viewBox="0 0 20 20" fill="currentColor">
                                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          &nbsp;
                                          <p className="text-xs flex items-center font-normal text-gray-800 pt-1">{grade} | {sold} terjual</p>
                                   </div>
                                   <div className="w-full flex items-center gap-x-2 mt-2 justify-between text-yellow-500">
                                          {/* button */}
                                          <button className="w-full py-2 px-3 text-sm rounded-md bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer font-bold text-white">Beli</button>
                                          <button className="w-12 py-2 px-2 text-sm rounded-md text-yellow-500 font-bold border border-yellow-600">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                 </svg>
                                          </button>
                                   </div>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default CardProduct