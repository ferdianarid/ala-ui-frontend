import React, { ReactNode } from 'react'

interface IHeadingItem {
       children: ReactNode
}

export const HeadingItem = ({ children }: IHeadingItem) => {
       return (
              <div className="pt-2 font-bold text-2xl text-gray-800">{children}</div>)
}