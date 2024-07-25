import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'

type Props = {
  href: string
  text: string
}

export const PrevButton = ({ href, text }: Props) => {
  return (
    <Button variant={'link'} className='hover:text-sky-500 transition' asChild>
      <Link href={href}>
        <ChevronLeft className='md:h-6 md:w-6 h-4 w-4' />
        <span className='md:text-xl text-base font-semibold'>{text}</span>
      </Link>
    </Button>
  )
}
