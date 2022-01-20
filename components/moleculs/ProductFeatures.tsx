import React from 'react'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'

interface IProductFeatures {
       heading: string
       srcImage: any
       altImage: string
       actionLink: string
       urlSource: string
}

const ProductFeatures = (props: IProductFeatures) => {
       const { srcImage, altImage, heading, actionLink, urlSource } = props
       return (
              <React.Fragment>
                     <Image className='object-cover' src={srcImage} alt={altImage} />
                     <div className="flex items-center justify-between md:block mt-2">
                            <div className="font-bold text-md text-yellow-600">{heading}</div>
                            <a href={urlSource} className="no-underline font-bold text-sm text-gray-600 flex items-center">{actionLink} &nbsp; <ChevronRightIcon width={20} /></a>
                     </div>
              </React.Fragment>
       )
}

export default ProductFeatures
