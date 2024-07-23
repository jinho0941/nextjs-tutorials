import { ContentSection } from '@/components/content-section'
import { NextButton } from '@/components/next-button'
import { NumberText } from '@/components/number-text'
import { PrevButton } from '@/components/prev-button'
import { Strong } from '@/components/strong'
import { Title } from '@/components/title'
import { routes } from '@/constant'

const Page = () => {
  return (
    <ContentSection>
      <Title title={'컴퓨터의 구조'} />
      <p>
        컴퓨터를 구성하는 장치는 여러개가 있지만{' '}
        <Strong text={'데이터 관련해서는 크게 3가지가 있습니다.'} />
      </p>
      <NumberText num={1} text={'중앙처리장치(CPU)'} />
      <NumberText num={2} text={'주기억장치(Memory)'} />
      <NumberText num={3} text={'보조기억장치(Storage(HDD, SSD))'} />
      <p>
        CS를 공부하였던 분이라면 익숙한 단어일거라 생각합니다.
        <br />
        또한 항상 머리를 아프게 하는 친구들이죠.
      </p>
      <p>그러면 지금부터 천천히 하나하나 살펴봅시다.</p>
      <div className='pt-10 flex justify-between'>
        <PrevButton
          href={routes.dataStaticLimitation.path}
          text={routes.dataStaticLimitation.name}
        />
        <NextButton href={routes.cpu.path} text={routes.cpu.name} />
      </div>
    </ContentSection>
  )
}

export default Page
