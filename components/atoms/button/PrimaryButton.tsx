import React, { ReactNode } from 'react'

interface IButtonPrimary {
       children: ReactNode
}

const PrimaryButton = ({ children }: IButtonPrimary) => {
       return (
              <button className="py-2 px-6 mt-8 text-sm md:text-lg rounded-md bg-yellow-500 hover:bg-yellow-600 border-none font-bold text-white">{children}</button>
       )
}

export default PrimaryButton
