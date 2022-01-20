import React, { ReactNode } from 'react'

interface ISectionLayouts {
       children: ReactNode
}

const SectionLayouts = (props: ISectionLayouts) => {
       const { children } = props
       return (
              <div className="w-full my-0 md:my-24 pt-20 pb-0 md:pb-12">
                     {children}
              </div>
       )
}

export default SectionLayouts