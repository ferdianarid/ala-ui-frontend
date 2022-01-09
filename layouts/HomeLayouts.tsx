import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

interface LayoutChildren {
       children: ReactNode
}

const HomeLayouts = ({ children }: LayoutChildren) => {
       return (
              <React.Fragment>
                     <Navbar />
                     <div className="max-w-[1440px] m-auto px-4 md:px-32">
                            {children}
                     </div>
              </React.Fragment>
       )
}

export default HomeLayouts
