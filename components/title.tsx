'use client'
import { routes } from '@/constant'
import { usePathname } from 'next/navigation'

const pathList = routes.map((route) => route.path)
const nameList = routes.map((route) => route.name)

export const Title = () => {
  const pathname = usePathname()
  const currentIndex = pathList.findIndex((path) => path === pathname)

  return (
    <h1 className='text-3xl font-bold border-b dark:border-white pb-2'>
      {nameList[currentIndex]}
    </h1>
  )
}
