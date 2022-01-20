import React, { ReactNode } from 'react'

interface IMenu {
       children: ReactNode
       actionLink?: string | "#"
}

export const HeadingMenu = ({ children }: IMenu) => {
       return (
              <h1 className='text-md font-bold text-white pb-2'>{children}</h1>
       )
}

export const SubheadingMenu = ({ children, actionLink }: IMenu) => {
       return (
              <a href={actionLink} rel="noopener noreferrer" target="_blank" className="no-underline text-sm font-semibold text-white hover:text-yellow-500 my-2">{children}</a>
       )
}
