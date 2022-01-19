import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import HomeLayouts from '../layouts/HomeLayouts'
import Subheading from '../components/atoms/text/Subheading'
import Heading from '../components/atoms/text/Heading'
import Cover from "../public/homepage/banner.jpg"
import PrimaryButton from '../components/atoms/button/PrimaryButton'
import SecondaryButton from '../components/atoms/button/SecondaryButton'

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<meta content="text/html;charset=UTF-8" />
				<title>ALA Showcase - Sayur Berkualitas</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
				<meta name="description" content="Sayuran ALA Berkualitas" />
				<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800" rel="stylesheet" />
			</Head>
			<div className="background">
				{/* Home Layouts */}
				<HomeLayouts>
					<div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-[70px]">
						{/* Heading */}
						<div className="w-full md:w-[50%]">
							{/* Badge Information */}
							<div className="py-1 px-3 bg-yellow-200 border border-yellow-600 rounded-full text-yellow-500 bg-opacity-25 w-fit font-bold text-xs mb-4 md:mb-2">ALAIN AJA</div>
							<Heading>Memberdayakan Pasar <span className='text-yellow-500'> Tradisional </span> dengan Teknologi.</Heading>
							<Subheading>Kami percaya mereka memiliki kesempatan untuk bersaing dalam menyediakan bahan makanan yang segar dan higienis</Subheading>
							{/* Button Call to Action */}
							<PrimaryButton>Lihat Produk</PrimaryButton>
							<SecondaryButton>Pelajari Dulu</SecondaryButton>
						</div>
						<div className="w-full ml-0 md:w-[45%] md:ml-[5%] mt-10 md:mt-0">
							<Image src={Cover} alt="market" />
						</div>
					</div>
					<div className="mt-[800px]"></div>
				</HomeLayouts>
			</div>
		</React.Fragment>
	)
}

export default Home
