import React, { ReactNode } from 'react'

interface ISubheading {
       children: ReactNode
}

const Subheading = ({ children }: ISubheading) => {
       return (
              <p className="text-sm md:text-md text-gray-600 pt-4 font-normal leading-normal">{children}</p>
       )
}

export default Subheading
