import React, { ReactNode } from 'react'

interface IBadges {
       children: ReactNode
}

interface ICategoryBadge {
       children: ReactNode
}

export const PrimaryBadges = ({ children }: IBadges) => {
       return (
              <div className="py-1 px-3 bg-blue-200 border border-blue-600 rounded-full text-blue-500 bg-opacity-25 w-fit font-bold text-xs mb-4 md:mb-2">{children}</div>
       )
}

export const SuccessBadges = ({ children }: IBadges) => {
       return (
              <div className="py-1 px-3 bg-green-200 border border-green-600 rounded-full text-green-500 bg-opacity-25 w-fit font-bold text-xs mb-4 md:mb-2">{children}</div>
       )
}

export const WarningBadges = ({ children }: IBadges) => {
       return (
              <div className="py-1 px-3 bg-yellow-200 border border-yellow-600 rounded-full text-yellow-500 bg-opacity-25 w-fit font-bold text-xs mb-4 md:mb-2">{children}</div>
       )
}

export const DangerBadges = ({ children }: IBadges) => {
       return (
              <div className="py-1 px-3 bg-red-200 border border-red-600 rounded-full text-red-500 bg-opacity-25 w-fit font-bold text-xs mb-4 md:mb-2">{children}</div>
       )
}

export const SecondaryCategoryBadge = (props: ICategoryBadge) => {
       const { children } = props
       return (
              <div className="absolute z-10 left-6 top-6 py-[2px] px-2 bg-yellow-500 bg-opacity-70 text-white text-xs border-2 border-yellow-500 font-bold rounded-full">{children}</div>
       )
}