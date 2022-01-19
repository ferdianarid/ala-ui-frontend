import React, { ReactNode } from 'react'

interface IButtonSecondary {
       children: ReactNode
}

const SecondaryButton = ({ children }: IButtonSecondary) => {
       return (
              <button className="ml-2 md:ml-4 py-2 px-6 text-sm md:text-lg mt-8 rounded-md bg-white border border-yellow-500 font-bold text-yellow-500">{children}</button>
       )
}

export default SecondaryButton;
