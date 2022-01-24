import React, { useState } from 'react'
import ProductLayouts from '../layouts/ProductLayouts'
import CardProduct from '../components/moleculs/CardProduct'

import chili from "../public/homepage/cabaimerah.jpg"
import tomato from "../public/homepage/tomato.jpg"
import paprika from "../public/homepage/paprika.jpeg"
import kacang from "../public/homepage/kacang.jpg"
import labu from "../public/homepage/labu.jpg"
import kubis from "../public/homepage/kubis.jpg"
import seledri from "../public/homepage/seledri.jpg"
import wortel from "../public/homepage/wortel.jpg"
import jeruknipis from "../public/homepage/jeruknipis.jpg"
import bawangputih from "../public/homepage/bawangputih.jpg"
import bawangmerah from "../public/homepage/bawangmerah.jpg"
import brokoli from "../public/homepage/brokoli.jpg"

import 'swiper/css'

const Marketplace = () => {
       const [showProduct, setShowProduct] = useState(false)

       const ClickProduct = () => {
              setShowProduct(true)
       }

       const LoadMore = () => {
              return (
                     <React.Fragment>
                            <CardProduct images={paprika} title="Paprika" price="25.000" sold="247" location="Jombang" grade="4.5" category="Paprika" remaining="122" />
                            <CardProduct images={tomato} title="Tomat" price="28.000" sold="247" location="Malang" grade="4.7" category="Tomat" remaining="352" />
                            <CardProduct images={chili} title="Cabai" price="22.000" sold="247" location="Surabaya" grade="4.3" category="Cabai" remaining="222" />
                            <CardProduct images={kacang} title="Kacang" price="24.000" sold="247" location="Kediri" grade="4.8" category="Kacang" remaining="182" />
                     </React.Fragment>
              )
       }
       return (
              <React.Fragment>
                     <ProductLayouts>
                            {/* All Product */}
                            <div className="">
                                   <div className="flex justify-between items-center">
                                          <h1 className="text-2xl font-bold text-gray-800">Semua Produk</h1>
                                          <p className="text-sm md:text-md text-gray-600 py-2 font-semibold leading-snug">Lihat semua</p>
                                   </div>
                                   <p className="text-sm md:text-md text-gray-600 font- normal leading-snug mb-4">Semua produk yang saat ini tersedia</p>
                            </div>
                            {/* Card Product */}
                            <div className="mx-auto md:w-full flex-col md:flex-row my-0  md:my-6 flex justify-between items-center gap-x-2">
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                          <CardProduct images={jeruknipis} title="Jeruk" price="22.000" sold="247" location="Jombang" grade="4.5" category="Jeruk" remaining="122" />
                                          <CardProduct images={brokoli} title="Brokoli" price="38.000" sold="247" location="Malang" grade="4.7" category="Brokoli" remaining="352" />
                                          <CardProduct images={labu} title="Labu" price="35.000" sold="427" location="Malang" grade="4.7" category="Labu" remaining="352" />
                                          <CardProduct images={wortel} title="Wortel" price="17.000" sold="217" location="Jombang" grade="4.5" category="Wortel" remaining="122" />
                                          <CardProduct images={bawangputih} title="Bawang" price="27.000" sold="247" location="Kediri" grade="4.8" category="Bawang" remaining="182" />
                                          <CardProduct images={bawangmerah} title="Bawang" price="29.000" sold="247" location="Surabaya" grade="4.3" category="Brambang" remaining="222" />
                                          <CardProduct images={kubis} title="Kubis" price="42.000" sold="87" location="Surabaya" grade="4.3" category="Kubis" remaining="222" />
                                          <CardProduct images={seledri} title="Seledri" price="32.000" sold="127" location="Kediri" grade="4.8" category="Seledri" remaining="182" />
                                          {
                                                 showProduct && <LoadMore />
                                          }
                                   </div>
                            </div>
                            <div className="text-center mt-6 md:mt-4">
                                   <button onClick={ClickProduct} className="w-[30%] md:w-[15%] py-2 px-3 text-sm rounded-md border border-yellow-500 hover:cursor-pointer font-bold text-yellow-500">Muat lagi</button>
                            </div>
                     </ProductLayouts>
              </React.Fragment>
       )
}

export default Marketplace
