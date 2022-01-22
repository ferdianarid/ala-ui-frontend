import React, { ReactNode } from 'react'
import Image from 'next/image'
import MenuLayouts from '../../layouts/MenuLayouts'
import { HeadingMenu, SubheadingMenu } from '../atoms/text/HeadingMenu'
import { InboxInIcon } from '@heroicons/react/solid'
import LogoALA from "../../public/homepage/LogoALA.svg"

const Footer = () => {
       return (
              <div className="w-full mt-20 md:mt-0 bg-[#1D1D20] h-auto px-4 md:px-32 py-10 md:py-14">
                     <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 md:text-left text-center">
                            {/* Company Details */}
                            <MenuLayouts>
                                   <div className="w-full text-center md:text-left">
                                          <Image src={LogoALA} width={240} alt="ALALogo" />
                                   </div>
                                   <div className="mb-10 md:mb-0 mt-2 md:mt-0 flex justify-between gap-x-6">
                                          <SubheadingMenu actionLink='https://github.com/ala-labs'>ALA Labs</SubheadingMenu>
                                          <SubheadingMenu actionLink='mailto:alainaja.official@gmail.com'>alainaja.official@gmail.com</SubheadingMenu>
                                   </div>
                            </MenuLayouts>
                            {/* Menu */}
                            <MenuLayouts>
                                   <HeadingMenu>Perusahaan</HeadingMenu>
                                   <SubheadingMenu>Beranda</SubheadingMenu>
                                   <SubheadingMenu>Blogs</SubheadingMenu>
                                   <SubheadingMenu>Tentang</SubheadingMenu>
                            </MenuLayouts>

                            <MenuLayouts>
                                   <HeadingMenu>Gabung</HeadingMenu>
                                   <SubheadingMenu>Mitra Driver</SubheadingMenu>
                                   <SubheadingMenu>Mitra Warehouse</SubheadingMenu>
                            </MenuLayouts>


                            <MenuLayouts>
                                   <HeadingMenu>Karir</HeadingMenu>
                                   <SubheadingMenu>Pelajar</SubheadingMenu>
                                   <SubheadingMenu>Internship</SubheadingMenu>
                                   <SubheadingMenu>Profesional</SubheadingMenu>
                            </MenuLayouts>

                            <MenuLayouts>
                                   <HeadingMenu>Hubungi Kami</HeadingMenu>
                                   <SubheadingMenu>Bantuan</SubheadingMenu>
                                   <SubheadingMenu>Personal</SubheadingMenu>
                            </MenuLayouts>
                     </div>
                     <hr className='w-full text-white' />
                     <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10">
                            <SubheadingMenu>© Copyright 2021 ALA. All Rights Reserved.</SubheadingMenu>
                            <div className="flex mb-4 md:mb-0 items-center justify-between gap-x-4 text-yellow-400">
                                   <InboxInIcon width={24} />
                                   <InboxInIcon width={24} />
                                   <InboxInIcon width={24} />
                                   <InboxInIcon width={24} />
                            </div>
                     </div>
              </div >
       )
}

export default Footer
