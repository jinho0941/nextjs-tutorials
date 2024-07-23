import { ContentSection } from '@/components/content-section'
import { Title } from '@/components/title'
import Image from 'next/image'

const Page = () => {
  return (
    <ContentSection>
      <Image src={'/img4.jpg'} alt={'img4'} width={600} height={400} />
      <p>
        패치가 무엇인지 알려면 우선 정적 데이터, 동적 데이터가 무엇인지 구분을
        할줄 알아야 합니다.
      </p>
      <p>
        그렇다면 어떻게 정적 데이터와 동적 데이터를 구분 할까요??
        <br />
        간단하게 말하면 html을 초기빌드 할때 javascript와 함깨 들어가 있는
        데이터를 정적인 데이터라고 하고 그 이외에 추가적인 fetch를 받아 변동성이
        있는 data를 동적 데이터라고 말합니다.
      </p>
      <p className='text-muted-foreground'>
        사실 javascript로 html에 동적으로 데이터를 추가할수있는데 정적,
        동적이라는 워딩이 100% 맞아떨어지지는 않는거 같습니다.
      </p>
      <p>
        이 부분은 글로 이해하기는 어려운 개념이니 상세하게 설명해 보겠습니다.
      </p>
    </ContentSection>
  )
}

export default Page
