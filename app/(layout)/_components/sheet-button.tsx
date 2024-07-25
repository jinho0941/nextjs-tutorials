'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { routes } from '@/constant'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = routes.map((route) => ({
  label: route.name,
  link: route.path,
}))

export const SheetButton = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild onClick={onOpen} className='md:hidden block'>
        <Button variant={'ghost'} size={'icon'} className='flex justify-center'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='p-0 w-[280px]' side={'left'}>
        <X
          onClick={onClose}
          className='absolute right-2 top-2 hover:text-rose-500 transition rounded-full cursor-pointer'
        />
        <aside className='overflow-y-scroll h-full scrollbar-hide'>
          <div className='mt-4 pl-4'>
            {links.map((item, index) => (
              <Button
                key={index}
                asChild
                variant={'link'}
                size={'sm'}
                className='w-full justify-start'
                onClick={onClose}
              >
                <Link href={item.link}>
                  <span
                    className={cn(
                      index === 0 && 'text-2xl font-bold',
                      item.link === pathname && 'underline',
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  )
}
