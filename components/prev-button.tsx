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
        <ChevronLeft />
        <span className='text-xl font-semibold'>{text}</span>
      </Link>
    </Button>
  )
}
