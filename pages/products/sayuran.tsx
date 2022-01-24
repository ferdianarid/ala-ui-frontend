import React from 'react'
import { NextPage } from 'next'
import CardProduct from '../../components/moleculs/CardProduct'
import ProductLayouts from '../../layouts/ProductLayouts'

import kubis from "../../public/homepage/kubis.jpg"
import seledri from "../../public/homepage/seledri.jpg"
import bawangputih from "../../public/homepage/bawangputih.jpg"
import bawangmerah from "../../public/homepage/bawangmerah.jpg"

const Sayuran: NextPage = () => {
       return (
              <React.Fragment>
                     <ProductLayouts>
                            <div className="">
                                   <div className="flex justify-between items-center">
                                          <h1 className="text-2xl font-bold text-gray-800">Sayuran Segar</h1>
                                          <p className="text-sm md:text-md text-gray-600 py-2 font-semibold leading-snug">Lihat semua</p>
                                   </div>
                                   <p className="text-sm md:text-md text-gray-600 font- normal leading-snug mb-4">Produk sayuran segar yang tersedia</p>
                            </div>
                            <div className="mx-auto md:w-full flex-col md:flex-row my-0  md:my-6 flex justify-between items-center gap-x-2">
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                          <CardProduct images={bawangputih} title="Bawang" price="27.000" sold="247" location="Kediri" grade="4.8" category="Bawang" remaining="182" />
                                          <CardProduct images={bawangmerah} title="Bawang" price="29.000" sold="247" location="Surabaya" grade="4.3" category="Brambang" remaining="222" />
                                          <CardProduct images={kubis} title="Kubis" price="42.000" sold="87" location="Surabaya" grade="4.3" category="Kubis" remaining="222" />
                                          <CardProduct images={seledri} title="Seledri" price="32.000" sold="127" location="Kediri" grade="4.8" category="Seledri" remaining="182" />
                                   </div>
                            </div>
                            <div className="text-center mt-6 md:mt-4">
                                   <button className="w-[30%] md:w-[15%] py-2 px-3 text-sm rounded-md border border-yellow-500 hover:cursor-pointer font-bold text-yellow-500">Muat lagi</button>
                            </div>
                     </ProductLayouts>
              </React.Fragment>
       )
}

export default Sayuran
