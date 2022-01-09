import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HomeLayouts from '../layouts/HomeLayouts'

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<meta content="text/html;charset=UTF-8" />
				<title>ALA Showcase - Sayur Berkualitas</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
				<meta name="description" content="Sayuran ALA Berkualitas" />
			</Head>
			<HomeLayouts>
				<h1>Homepage</h1>
			</HomeLayouts>
		</React.Fragment>
	)
}

export default Home
