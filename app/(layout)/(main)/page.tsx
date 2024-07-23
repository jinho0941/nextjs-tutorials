import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Home() {
  return (
    <section className='px-8 mt-10'>
      <h1 className='text-3xl font-bold'>NEXT 14 tutorials</h1>
      <p className='mt-5 text-lg font-semibold'>
        튜토리얼을 통해 server component와 server action 에 대한 이해도를
        올려보세요!
      </p>
      <Button asChild className='mt-4'>
        <Link href={'/docs'}>시작하기</Link>
      </Button>
    </section>
  )
}
