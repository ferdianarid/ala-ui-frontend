import React from 'react'
import Image from "next/image"
import { HeadingItem } from '../atoms/text/HeadingItem'
import { Subheading } from '../atoms/text/Heading'

interface ICardFeatures {
       heading: string
       subheading: string
       srcImage: string
}

const CardFeatures = (props: ICardFeatures) => {
       const { heading, subheading, srcImage } = props
       return (
              <React.Fragment>
                     <div className="rounded-md">
                            <div className="py-4 bg-yellow-100 px-4 w-fit rounded-full flex items-center  transition-all duration-500">
                                   <Image className='object-cover' width={48} height={48} src={srcImage} alt="features" />
                            </div>
                            <div className="mt-4">
                                   <HeadingItem>{heading}</HeadingItem>
                                   <Subheading>{subheading}</Subheading>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default CardFeatures;
