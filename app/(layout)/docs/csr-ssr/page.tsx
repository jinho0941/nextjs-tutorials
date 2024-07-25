import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'
import { Subtitle } from '@/components/subtitle'
import { Earth, HardDriveUpload, PanelsTopLeft, Server } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
  return (
    <ContentSection>
      <p>
        csr과 ssr이 왜 왔다갔다 하다가 갑자기 csr + ssr로 변하게 된것일까요?
      </p>
      <Image src={'/img8.jpg'} alt={'img'} width={600} height={400} />
      <p>이 질문의 대답은 역사와 묶어서 해석해야합니다.</p>
      <p>
        하지만 저는 이미 웹 개발을 시작했을때 next js가 14까지 나와버린
        상태였고,
        <br />
        굳이 예전의 기술을 써보기에는 우선순위가 너무 떨어져서 한번도 써본적이
        없습니다.
      </p>
      <p>그래서 아래 설명드릴 내용은 추측성이니 가볍게 보시면 되겠습니다.</p>
    </ContentSection>
  )
}

export default Page
