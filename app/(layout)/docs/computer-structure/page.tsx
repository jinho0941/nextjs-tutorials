import { ContentSection } from '@/components/content-section'
import { NumberText } from '@/components/number-text'
import { Strong } from '@/components/strong'

const Page = () => {
  return (
    <ContentSection>
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
    </ContentSection>
  )
}

export default Page
