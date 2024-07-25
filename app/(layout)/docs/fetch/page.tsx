'use client'
import { ContentSection } from '@/components/content-section'
import Image from 'next/image'

const Page = () => {
  return (
    <ContentSection>
      <p>
        이전 글에서 fetch는 외부 데이터 라고 설명하였습니다.
        <br />
        fetch는 서버로 부터 필요한 data를 받아오는 과정을 말하며,
        <br />그 값을 변수로 할당하여 그것을 html tag안에 넣는게 가장 일반적인
        패턴입니다.
      </p>
      <p>
        fetch를 알아야 하는 이유는 fetch의 위치에 따라서 앞으로 배우게 될 csr,
        ssr이 결정이 되기 때문입니다.
      </p>
      <p>
        client에서 진행이 되고 render가 되면 client side rendering이고,
        <br />
        마찬가지로 server에서 되면 server side rendering이 됩니다.
      </p>
      <Image src={'/img7.jpg'} alt={'img'} width={600} height={600} />
      <p>
        fetch는 외부 데이터이며 서버로부터 가져오는 데이터라는 추상적인 개념이기
        때문에,
        <br />
        각각 csr과 ssr에서 어떻게 진행이 되는지 보면서 이해를 해봅시다.
      </p>
    </ContentSection>
  )
}

export default Page
