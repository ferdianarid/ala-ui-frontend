import React, { useState } from "react";

// import Image Next
import Image from "next/image"

// import Link Next
import Link from "next/link"

// import  TransitionHeadless UI React
import { Transition } from "@headlessui/react"

// import Facility Navigation
import Facility from "./Facility"

// import Logo ALA
import LogoImage from "../public/homepage/LogoALA.svg"

// Navbar Components
function Navbar() {
       // State isOpen
       const [isOpen, setIsOpen] = useState(false);
       return (
              <nav className="w-full px-4 md:px-32 bg-transparent">
                     <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                   <div className="flex-shrink-0">
                                          <Image src={LogoImage} width="128px" alt="travelia-logo" />
                                   </div>
                                   <div className="hidden md:block">
                                          <div className="ml-10 flex items-center space-x-4">
                                                 <Link href="/">
                                                        <a className=" text-gray-900 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                                               Homepage
                                                        </a>
                                                 </Link>
                                                 <Link href="/tickets">
                                                        <a className="text-gray-900 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                                               Tickets
                                                        </a>
                                                 </Link>
                                                 {/* facility dropdown */}
                                                 <Facility />
                                                 <Link href="/category">
                                                        <a className="text-gray-900 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                                               Category
                                                        </a>
                                                 </Link>
                                                 <Link href="/contact">
                                                        <a className="text-gray-900 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                                               Contact
                                                        </a>
                                                 </Link>
                                                 <Link href="/cart">
                                                        <div className="flex justify-between items-center bg-yellow-100 rounded-md py-2 px-4">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                                               </svg>
                                                               <div className="count">
                                                                      <h1 className="text-md font-bold text-yellow-500 ml-2">100</h1>
                                                               </div>
                                                        </div>
                                                 </Link>
                                          </div>
                                   </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                   <button
                                          onClick={() => setIsOpen(!isOpen)}
                                          type="button"
                                          className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-blue-800 focus:outline-none "
                                          aria-controls="mobile-menu"
                                          aria-expanded="false"
                                   >
                                          <span className="sr-only">Open main menu</span>
                                          {!isOpen ? (
                                                 <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                 >
                                                        <path
                                                               strokeLinecap="round"
                                                               strokeLinejoin="round"
                                                               strokeWidth="2"
                                                               d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                 </svg>
                                          ) : (
                                                 <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                 >
                                                        <path
                                                               strokeLinecap="round"
                                                               strokeLinejoin="round"
                                                               strokeWidth="2"
                                                               d="M6 18L18 6M6 6l12 12"
                                                        />
                                                 </svg>
                                          )}
                                   </button>
                            </div>
                     </div>

                     <Transition
                            show={isOpen}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                     >
                            {(ref: any) => (
                                   <div className="md:hidden" id="mobile-menu">
                                          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                 <Link
                                                        href="/">
                                                        <a className="hover:bg-yellow-500 text-sm text-gray-900 hover:text-white block px-3 py-2 rounded-md font-medium">
                                                               Homepage
                                                        </a>
                                                 </Link>

                                                 <Link href="/tickets">
                                                        <a className="text-gray-900 text-sm hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md font-medium">
                                                               Tickets
                                                        </a>
                                                 </Link>

                                                 <Facility />

                                                 <Link
                                                        href="/category">
                                                        <a className="text-gray-900 text-sm hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md font-medium">
                                                               Category
                                                        </a>
                                                 </Link>

                                                 <Link
                                                        href="/contact">
                                                        <a className="text-gray-900 text-sm hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md font-medium">
                                                               Contact
                                                        </a>
                                                 </Link>
                                                 <Link href="/cart">
                                                        <div className="flex justify-start md:w-auto w-24 md:justify-between items-center bg-yellow-100 rounded-md py-2 px-4">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                                               </svg>
                                                               <div className="count">
                                                                      <h1 className="text-md font-bold text-yellow-500 ml-2">100</h1>
                                                               </div>
                                                        </div>
                                                 </Link>
                                          </div>
                                   </div>
                            )}
                     </Transition>
              </nav>
       )
}

export default Navbar;