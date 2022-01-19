import React, { ReactNode } from 'react'

interface IHeading {
       children: ReactNode
}
const Heading = ({ children }: IHeading) => {
       return (
              <h1 className='font-extrabold text-2xl md:text-4xl leading-loose  text-gray-800'>{children}</h1>
       )
}

export default Heading
