import React, { ReactNode } from 'react'

interface IHeading {
       children: ReactNode
}

export const Heading = ({ children }: IHeading) => {
       return (
              <h1 className='font-extrabold text-2xl md:text-4xl leading-normal  text-gray-800'>{children}</h1>
       )
}

export const Subheading = ({ children }: IHeading) => {
       return (
              <p className="text-sm md:text-md text-gray-600 pt-4 font-normal leading-normal">{children}</p>
       )
}
