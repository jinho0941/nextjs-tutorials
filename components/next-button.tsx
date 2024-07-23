import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

type Props = {
  href: string
  text: string
}

export const NextButton = ({ href, text }: Props) => {
  return (
    <Button
      variant={'link'}
      className='hover:text-sky-500 transition-all'
      asChild
    >
      <Link href={href}>
        <span className='text-xl font-semibold'>{text}</span>
        <ChevronRight />
      </Link>
    </Button>
  )
}
