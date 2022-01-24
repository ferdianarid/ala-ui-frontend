import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import HomeLayouts from '../layouts/HomeLayouts'
import SectionLayouts from '../layouts/SectionLayouts'
import { Heading, Subheading } from '../components/atoms/text/Heading'
import ProductFeatures from '../components/moleculs/ProductFeatures'
import PrimaryButton from '../components/atoms/button/PrimaryButton'
import SecondaryButton from '../components/atoms/button/SecondaryButton'
import { PrimaryBadges, WarningBadges } from '../components/atoms/badges'
import Fruit from "../public/homepage/fruit.jpg"
import Logo from "../public/homepage/alalogo.png"
import LogoALA from "../public/homepage/LogoALA.svg"
import Cover from "../public/homepage/banner.jpg"
import FastIcon from "../public/homepage/fast.svg"
import HomeIcon from "../public/homepage/home.svg"
import ClockIcon from "../public/homepage/clock.svg"
import Vegetable from "../public/homepage/vegetable.jpg"
import CardFeatures from '../components/moleculs/CardFeatures'
import { ChevronRightIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<meta content="text/html;charset=UTF-8" />
				<title>ALA Showcase - Sayur Berkualitas</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
				<meta name="description" content="Sayuran ALA Berkualitas" />
				<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=optional" rel="stylesheet" />
			</Head>
			<div className="max-w-[1440px] mx-auto">
				<div className="background">
					{/* Home Layouts */}
					<HomeLayouts>
						{/* Header Section */}
						<div className="flex flex-col md:flex-row justify-between items-center mt-32 md:mb-6 md:mt-[170px]">
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
								<Image className='rounded-md' src={Cover} alt="market" />
							</div>
						</div>
						{/* Features Section */}
						<SectionLayouts>
							<div className="w-full md:w-[80%] mx-auto text-center mb-4 md:mb-0">
								<Heading>Fokus Terhadap Hal hal yang Penting</Heading>
								<Subheading>Karena kami solusi bagi anda sehingga tidak perlu repot lagi untuk menghabiskan waktu serta tenaga untuk menuju pasar serta mencari bahan makanan yang anda butuhkan, semua itu anda bisa dapatkan dengan mudah tanpa harus capek dan kehilangan banyak waktu.</Subheading>
							</div>
							<div className="w-full mt-0 md:mt-16">
								<div className="w-full gap-x-4 flex flex-col md:flex-row justify-between items-center">
									<div className="my-6 md:my-0">
										<ProductFeatures heading="Sayuran Berkualitas" srcImage={Vegetable} altImage="sayuran" actionLink="Pelajari" urlSource="/produk/sayuran" />
									</div>
									<div className="my-6 md:my-0">
										<ProductFeatures heading="Buah Buahan Segar" srcImage={Fruit} altImage="buah" actionLink="Pelajari" urlSource="/produk/buah" />
									</div>
									<div className="my-6 md:my-0">
										<ProductFeatures heading="Sayuran Berkualitas" srcImage={Vegetable} altImage="sayuran" actionLink="Pelajari" urlSource="/produk/sayuran" />
									</div>
								</div>
							</div>
						</SectionLayouts>
						{/* 3 Points ALA Features */}
						<SectionLayouts>
							<div className="w-full md:w-[80%] mx-auto text-left md:text-center">
								<Heading>Points Utama ALA</Heading>
								<Subheading>Alasan kenapa anda harus menggunakan ALA untuk kehidupan sehari-hari.</Subheading>
							</div>
							<div className="w-full px-1 md:px-0 flex flex-col md:flex-row justify-between items-center gap-x-10 mt-4 md:mt-10">
								<div className="flex flex-col items-start my-8">
									<CardFeatures heading="Pengiriman Cepat" subheading="Pilih produk, tentukan tempat dan waktu pengiriman dan barang akan sampai ditempatmu. " srcImage={FastIcon} />
								</div>
								<div className="flex flex-col items-start my-8">
									<CardFeatures heading="Kapanpun Dimanapun" subheading="Bebas transaksi kebutuhan sayur atau daging kapanpun dan dimanapun Anda berada melalui Mitra." srcImage={HomeIcon} />
								</div>
								<div className="flex flex-col items-start my-8">
									<CardFeatures heading="Pemesanan Mudah" subheading="Anda bisa mendapatkan bahan makanan tanpa harus menghabiskan waktu untuk ke pasar." srcImage={ClockIcon} />
								</div>
							</div>
						</SectionLayouts>
						{/* Quotes */}
						<SectionLayouts>
							<div className="w-full px-1 md:px-0 md:w-[85%] mx-auto text-xl md:text-3xl font-extrabold leading-relaxed text-center">
								“Mendapat bahan yang <span className='text-yellow-500'> Berkualitas </span> dengan harga yang <span className='text-yellow-500'> Terjangkau </span> adalah <span className='text-yellow-500'> hak semua orang </span>“
							</div>
						</SectionLayouts>
						{/* Download Application */}
						<SectionLayouts>
							<div className="text-center">
								<Image src={Logo} width={90} height={90} alt="ALALogo" />
								<div className="w-full md:w-[50%] mx-auto mt-6">
									<Heading>Download Aplikasinya Sekarang!</Heading>
									<Subheading>Download aplikasi ALA di AppStore favorite kalian, dan dapatkan kemudahan dalam berbelanja!!</Subheading>
								</div>
							</div>
						</SectionLayouts>
					</HomeLayouts>
				</div>
			</div >
		</React.Fragment >
	)
}

export default Home
