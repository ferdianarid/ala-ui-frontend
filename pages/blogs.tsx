import React from 'react'
import Head from 'next/head'
import HomeLayouts from '../layouts/HomeLayouts'
import { Heading, Subheading } from '../components/atoms/text/Heading'
const Blogs = () => {
       return (
              <React.Fragment>
                     <Head>
                            <meta content="text/html;charset=UTF-8" />
                            <title>ALA Showcase - Blogs Page</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                            <meta name="description" content="Blogs Page" />
                     </Head>
                     <HomeLayouts>
                            <div className="my-10">
                                   <Heading>Blogs Page</Heading>
                                   <Subheading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, laborum.</Subheading>
                            </div>
                     </HomeLayouts>
              </React.Fragment>
       )
}

export default Blogs
