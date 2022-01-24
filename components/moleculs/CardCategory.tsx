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
                            <h1 className="text-white font-bold text-xs absolute z-20 bg-yellow-500 bg-opacity-70 py-[2px] px-2 border-2 border-yellow-500 rounded-full m-2">{category}</h1>
                            <Image src={imgCategory} className="rounded-md" alt={altcategory} />
                     </div>
              </React.Fragment>
       )
}

export default CardCategory
