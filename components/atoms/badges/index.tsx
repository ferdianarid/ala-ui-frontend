import React, { ReactNode } from 'react'

interface IBadges {
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