import { ContentSection } from '@/components/content-section'
import Image from 'next/image'

const Page = () => {
  return (
    <ContentSection>
      <Image src={'/img4.jpg'} alt={'img4'} width={600} height={400} />
      <p>
        ssr, fetch를 알기 전에 data가 무엇인지 흐름이 어떻게 되는지 선행이
        되어야지 뒤에 내용을 이해할수 있습니다.
      </p>
      <p>
        데이터란 데이터는 컴퓨터 과학과 정보 기술에서 정보의 형태로 표현되는
        모든 종류의 자료를 말합니다.
      </p>
      <p>관점에 따라 다르겠지만 크게 memory, storage data로 볼수도 있습니다.</p>
      <p>
        둘의 가장 큰 차이점은
        <br /> memory는 프로그램이 실행중일때 존제하는 데이터이며,
        <br /> 프로그램이 종료되거나 전원 공급이 끊어지면 사라지는 특징을 가지고
        있고,
        <br />
        storage는 프로그램의 실행유무와 상관없이
        <br /> 한번 저장이 되면 삭제하지 않는 한 영구적으로 데이터가 존재하며,
      </p>
      <p>
        댓글, 영상, 채팅 등 대부분 데이터가 저장이 되고 불러와야하는 특징이
        있어서, <br />
        저장되어야 하는 데이터라면 storage에 저장된다고 이해하시면 됩니다.
      </p>
      <p>
        모든 설명을 한 챕터에서 다루기에는 내용이 많으니 다음 챕터에서 이어
        설명하겠습니다.
      </p>
    </ContentSection>
  )
}

export default Page
