'use client'

import { usePathname } from 'next/navigation'
import { NextButton } from './next-button'
import { PrevButton } from './prev-button'
import { routes } from '@/constant'

const pathList = routes.map((route) => route.path)
const nameList = routes.map((route) => route.name)

export const FooterNav = () => {
  const pathname = usePathname()
  const currentIndex = pathList.findIndex((path) => path === pathname)

  const prevIndex = currentIndex - 1
  const nextIndex = currentIndex + 1

  return (
    <div className='pt-10 flex justify-between px-4'>
      {prevIndex >= 0 && (
        <PrevButton href={pathList[prevIndex]} text={nameList[prevIndex]} />
      )}
      {nextIndex < routes.length && (
        <NextButton href={pathList[nextIndex]} text={nameList[nextIndex]} />
      )}
    </div>
  )
}
