import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'
import { Subtitle } from '@/components/subtitle'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
  return (
    <ContentSection>
      <p>
        보통 이 부분은 static data, dynamic data라고 부르지만 저는 좀더 명확하게
        구분하기 위해,
        <br />
        <Strong>내부 데이터(inter data), 외부 데이터(outer data)</Strong> 라고
        부르겠습니다.
      </p>
      <p>
        기준이 모호하긴 하지만 확실하게 정해야하니 browser 내부에서 javascript로
        직접 조작할수 있는 데이터를 내부 데이터라고 하고,
        <br />그 이외의 제어권이 없는 데이터를 외부 데이터라고 칭하겠습니다.
      </p>
      <Subtitle subtitle={'내부 데이터'} icon={ArrowBigDown} />
      <p>
        html, css 는 javascript로 제어가 가능하니 내부 데이터로 볼수 있습니다.
        <br />
        또한 javascript로 선언한 변수, local storage또한 그렇습니다.
        <br />
        변수가 내부 데이터라고 한다면 외부로부터 받아와서 내부 변수로
        선언하는순간,
        <br />그 데이터도 javascript의 변수가 되니 외부에서 내부로 데이터
        제어권이 넘어오게 됩니다.
        <br />
        하지만 초기 데이터에 대한 제어권은(초기화) 내부에 없는데 이부분은 외부
        데이터를 설명할때 자세하게 설명하겠습니다.
      </p>

      <Image src={'/src22.png'} alt={'img'} width={400} height={400} />
      <p>
        browser에서 중요하게 생각하는 내부 데이터는 이정도가 끝인거 같은데
        그림으로 표현을 하면 위의와 같습니다.
      </p>
      <Subtitle subtitle={'외부 데이터'} icon={ArrowBigUp} />
      <p>
        외부 데이터는 사실상 네트워크 데이터 밖에 없습니다.
        <br />
        browser에서는 os api를 직접 호출하여 사용할수 없기 때문이죠.
        <br />
        또한 하나의 서버에서 데이터를 관리하고 동기화 하기 때문에
        browser(client) 밖에서 데이터를 관리해야합니다.
      </p>
      <Image src={'/src23.png'} alt={'img'} width={400} height={400} />
      <p>그림으로 표현하면 위랑 같습니다.</p>
      <p>
        사실 이렇게 끝나면 감각이 전혀 안잡히실거라 생각합니다.
        <br />
        그렇기 때문에 code level에서 어떤 데이터가 내부이고, 외부인지 다음
        챕터에서 알아봅시다.
      </p>
    </ContentSection>
  )
}

export default Page
