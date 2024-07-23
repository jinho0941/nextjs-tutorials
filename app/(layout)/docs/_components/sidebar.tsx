'use client'

import { Button } from '@/components/ui/button'
import { routes } from '@/constant'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    label: routes.introduction.name,
    link: routes.introduction.path,
    className: 'font-bold text-xl',
  },
  { label: `- ${routes.data.name}`, link: routes.data.path },
  { label: `- ${routes.dataStatic.name}`, link: routes.dataStatic.path },
  {
    label: `- ${routes.dataStaticLimitation.name}`,
    link: routes.dataStaticLimitation.path,
  },
  {
    label: `- ${routes.computerStructure.name}`,
    link: routes.computerStructure.path,
  },
  { label: `- ${routes.cpu.name}`, link: routes.cpu.path },
  { label: `- ${routes.memory.name}`, link: routes.memory.path },
  { label: `- ${routes.storage.name}`, link: routes.storage.path },
  { label: `- ${routes.dataSummary.name}`, link: routes.dataSummary.path },
  { label: `- ${routes.fetch.name}`, link: routes.fetch.path },

  { label: '- 클라이언트 사이드 렌더링(CSR)', link: '/docs/csr' },
  { label: '- 서버 사이드 렌더링(SSR)', link: '/docs/ssr' },
  { label: '- CSR vs SSR', link: '/docs/csr-vs-ssr' },
  { label: '- 서버 컴포넌트의 역할', link: '/docs/server-component-role' },
  { label: '- 서버 컴포넌트 !== SSR', link: '/docs/server-component-not-ssr' },
  { label: '- 사용해보기', link: '/docs/try-it' },
  { label: "- 'use client'?", link: '/docs/use-client' },
  { label: '- 인터렉션?', link: '/docs/interaction' },
]

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
                  item.className ?? '',
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
