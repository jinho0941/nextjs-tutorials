import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SheetButton } from './sheet-button'

export const Navbar = () => {
  return (
    <nav className='fixed h-16 w-full border-b bg-white dark:bg-slate-950 z-10'>
      <div className='flex items-center justify-between h-full px-4'>
        <div className='flex items-center gap-x-2'>
          <SheetButton />
          <Button variant={'ghost'} asChild>
            <Link href={'/'}>
              <span className='text-2xl border-white border-b'>tutorials</span>
            </Link>
          </Button>
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}
