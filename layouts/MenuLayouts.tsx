import React, { ReactNode } from 'react'

interface IMenuLayouts {
       children: ReactNode
}

const MenuLayouts = ({ children }: IMenuLayouts) => {
       return (
              <div className="flex flex-col mt-8 md:mt-0">{children}</div>
       )
}

export default MenuLayouts
