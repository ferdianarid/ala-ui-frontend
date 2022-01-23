import React from 'react'
import Image from 'next/image'

interface ICardCategory {
       category: string
       imgCategory: StaticImageData
       altcategory: string
}

const CardCategory = (props: ICardCategory) => {
       const { category, imgCategory, altcategory } = props
       return (
              <React.Fragment>
                     <div className="h-auto  w-full object-cover">
                            <h1 className="text-white font-bold absolute z-20 bg-yellow-500 py-1 px-2 rounded-md m-2">{category}</h1>
                            <Image src={imgCategory} className="rounded-md" alt={altcategory} />
                     </div>
              </React.Fragment>
       )
}

export default CardCategory
