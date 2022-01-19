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
import { PrimaryBadges, WarningBadges } from '../components/atoms/badges'
import Vegetable from "../public/homepage/vegetable.jpg"
import Fruit from "../public/homepage/fruit.jpg"

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
			<div className="max-w-[1440px] mx-auto">
				<div className="background">
					{/* Home Layouts */}
					<HomeLayouts>
						{/* Header Section */}
						<div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-[70px]">
							{/* Heading */}
							<div className="w-full md:w-[50%]">
								{/* Badge Information */}
								<WarningBadges>ALAIN AJA</WarningBadges>
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
						{/* Features Section */}
						<div className="w-full my-24 py-20">
							<div className="w-full md:w-[80%] mx-auto text-center">
								<Heading>Fokus Terhadap Hal hal yang Penting</Heading>
								<Subheading>Karena kami solusi bagi anda sehingga tidak perlu repot lagi untuk menghabiskan waktu serta tenaga untuk menuju pasar serta mencari bahan makanan yang anda butuhkan, semua itu anda bisa dapatkan dengan mudah tanpa harus capek dan kehilangan banyak waktu.</Subheading>
							</div>
							<div className="w-full mt-16">
								<div className="w-full gap-x-4 flex justify-between items-center">
									<div className="">
										<Image className='object-cover' src={Vegetable} alt="vegetable" />
										<div className="pt-2 font-bold text-md text-yellow-600">Sayuran Berkualitas</div>
										<a href='#' className="no-underline font-bold text-sm text-gray-600">Pelajari</a>
									</div>
									<div className="">
										<Image className='object-cover' src={Fruit} alt="fruit" />
										<div className="pt-2 font-bold text-md text-yellow-600">Buah Buahan Segar</div>
										<a href='#' className="no-underline font-bold text-sm text-gray-600">Pelajari</a>
									</div>
									<div className="">
										<Image className='object-cover' src={Vegetable} alt="vegetable" />
										<div className="pt-2 font-bold text-md text-yellow-600">Sayuran Segar</div>
										<a href='#' className="no-underline font-bold text-sm text-gray-600">Pelajari</a>
									</div>
								</div>
							</div>
						</div>
					</HomeLayouts>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home
