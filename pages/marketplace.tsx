import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
SwiperCore.use([Pagination, Navigation])
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeLayouts from '../layouts/HomeLayouts'
import SectionLayouts from '../layouts/SectionLayouts'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import CardCategory from '../components/moleculs/CardCategory'
import { Heading, Subheading } from '../components/atoms/text/Heading'

import VegetableOne from "../public/homepage/vegetableOne.jpg"
import VegetableTwo from "../public/homepage/vegetableTwo.jpg"
import VegetableThree from "../public/homepage/vegetableThree.jpg"

import chili from "../public/homepage/cabaimerah.jpg"
import banner from "../public/homepage/banner1.jpg"
import tomato from "../public/homepage/tomato.jpg"
import paprika from "../public/homepage/paprika.jpeg"
import kacang from "../public/homepage/kacang.jpg"
import labu from "../public/homepage/labu.jpg"
import kubis from "../public/homepage/kubis.jpg"
import seledri from "../public/homepage/seledri.jpg"
import wortel from "../public/homepage/wortel.jpg"

import 'swiper/css'
import CardProduct from '../components/moleculs/CardProduct'

const Marketplace = () => {
       return (
              <React.Fragment>
                     <Head>
                            {/* Meta Tags */}
                            <meta content="text/html;charset=UTF-8" />
                            <title>ALA Showcase - Marketplace Produk</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                            <meta name="description" content="Marketplace Produk" />
                     </Head>
                     <HomeLayouts>
                            <div className="appbar w-full flex flex-col md:flex-row justify-between items-center mt-[140px]">
                                   {/* Search Form */}
                                   <form className='w-full md:w-[350px]' method="POST" action='/'>
                                          <div className="relative text-gray-600 mb-4 focus-within:text-gray-400">
                                                 <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-5 h-5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                        </button>
                                                 </span>
                                                 <input type="search" name="q" className="w-full py-2 text-sm text-white bg-white border border-gray-300 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Cari disini" autoComplete="On" />
                                          </div>
                                   </form>
                                   {/* Set Location */}
                                   <h1 className='flex items-center gap-x-2 font-bold text-xs text-gray-700  hover:cursor-pointer'>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                          </svg>
                                          <span className='text-xs font-normal'>Dikirim ke </span> Jombang, Jawa Timur</h1>
                            </div>
                            <div className="mt-2 md:mt-8">
                                   {/* Carousels */}
                                   <Swiper
                                          loop={true}
                                          autoplay={true}
                                          navigation={true}
                                          pagination={true}
                                          spaceBetween={50}
                                          slidesPerView={1}
                                          onSlideChange={() => console.log('slide change')}
                                          onSwiper={(swiper) => console.log(swiper)}
                                   >
                                          <SwiperSlide className='w-80'>
                                                 <Image id='imageCover' src={banner} />
                                          </SwiperSlide>
                                          <SwiperSlide className='w-80'>
                                                 <Image id='imageCover' src={banner} />
                                          </SwiperSlide>
                                          <SwiperSlide className='w-80'>
                                                 <Image id='imageCover' src={banner} />
                                          </SwiperSlide>
                                   </Swiper>
                            </div>
                            {/* Recommendation Product */}
                            <div className="w-full my-2 md:my-8">
                                   <h1 className="text-2xl font-bold text-gray-800">Rekomendasi Produk</h1>
                                   <p className="text-sm md:text-md text-gray-600 py-2 mb-4 font-normal leading-snug">Produk rekomendasi yang bisa memenuhi kebutuhanmu</p>
                                   {/* Card Recommendation */}
                                   <div className="w-full flex items-center justify-between gap-x-2 hover:cursor-pointer md:gap-x-8 mb-8">
                                          <CardCategory category="Tomat" imgCategory={tomato} altcategory="tomat" />
                                          <CardCategory category="Cabai" imgCategory={chili} altcategory="cabai" />
                                          <CardCategory category="Paprika" imgCategory={paprika} altcategory="paprika" />
                                   </div>
                                   {/* All Product */}
                                   <div className="">
                                          <div className="flex justify-between items-center">
                                                 <h1 className="text-2xl font-bold text-gray-800">Semua Produk</h1>
                                                 <p className="text-sm md:text-md text-gray-600 py-2 font-semibold leading-snug">Lihat semua</p>
                                          </div>
                                          <p className="text-sm md:text-md text-gray-600 font- normal leading-snug mb-4">Semua produk yang saat ini tersedia</p>
                                   </div>

                                   <div className="mx-auto md:w-full flex-col md:flex-row my-0  md:my-6 flex justify-between items-center gap-x-2">
                                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                 <CardProduct images={paprika} title="Paprika" price="25.000" sold="247" location="Jombang" grade="4.5" category="Paprika" remaining="122" />
                                                 <CardProduct images={tomato} title="Tomat" price="28.000" sold="247" location="Malang" grade="4.7" category="Tomat" remaining="352" />
                                                 <CardProduct images={chili} title="Cabai" price="22.000" sold="247" location="Surabaya" grade="4.3" category="Cabai" remaining="222" />
                                                 <CardProduct images={kacang} title="Kacang" price="24.000" sold="247" location="Kediri" grade="4.8" category="Kacang" remaining="182" />
                                                 <CardProduct images={wortel} title="Wortel" price="17.000" sold="217" location="Jombang" grade="4.5" category="Wortel" remaining="122" />
                                                 <CardProduct images={labu} title="Labu" price="35.000" sold="427" location="Malang" grade="4.7" category="Labu" remaining="352" />
                                                 <CardProduct images={kubis} title="Kubis" price="42.000" sold="87" location="Surabaya" grade="4.3" category="Kubis" remaining="222" />
                                                 <CardProduct images={seledri} title="Seledri" price="32.000" sold="127" location="Kediri" grade="4.8" category="Seledri" remaining="182" />
                                          </div>
                                   </div>
                            </div>
                     </HomeLayouts>
              </React.Fragment >
       )
}

export default Marketplace
