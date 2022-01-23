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


import 'swiper/css'

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
                            <div className="mt-10">
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
                            <div className="w-full my-8">
                                   <h1 className="text-2xl font-bold text-gray-800">Rekomendasi Produk</h1>
                                   <p className="text-sm md:text-md text-gray-600 py-4 font-normal leading-snug">Produk rekomendasi yang bisa memenuhi kebutuhanmu</p>
                                   {/* Card Recommendation */}
                                   <div className="w-full flex items-center justify-between gap-x-8 mb-20">
                                          <CardCategory category="Tomat" imgCategory={tomato} altcategory="tomat" />
                                          <CardCategory category="Cabai" imgCategory={chili} altcategory="cabai" />
                                          <CardCategory category="Paprika" imgCategory={paprika} altcategory="paprika" />
                                   </div>
                                   {/* All Product */}
                            </div>
                     </HomeLayouts>
              </React.Fragment >
       )
}

export default Marketplace
