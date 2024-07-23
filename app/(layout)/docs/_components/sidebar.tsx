'use client'

import { Button } from '@/components/ui/button'
import { routes } from '@/constant'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = routes.map((route) => ({
  label: route.name,
  link: route.path,
}))

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className='fixed overflow-y-scroll w-[280px] h-full scrollbar-hide border-r'>
      <div className='mt-4 pl-4'>
        {links.map((item, index) => (
          <Button
            key={index}
            asChild
            variant={'link'}
            size={'sm'}
            className='w-full justify-start'
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
  )
}
