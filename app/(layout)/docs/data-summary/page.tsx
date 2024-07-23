import { ContentSection } from '@/components/content-section'
import { PrevButton } from '@/components/prev-button'
import { NextButton } from '@/components/next-button'
import { Title } from '@/components/title'
import { routes } from '@/constant'
import Image from 'next/image'
import { Strong } from '@/components/strong'

const Page = () => {
  return (
    <ContentSection>
      <Title title={'데이터 흐름 정리'} />
      <p>
        이때까지 컴퓨터가 명령을 어떻게 처리하고, 데이터를 어떻게 불러오며 또
        저장을 어떻게 하는지 알아보았습니다.
      </p>
      <p>
        이제 전채적으로 어떻게 흐름이 이루어지는지 그림으로 대략 이해하고
        fetch로 넘어가봅시다.
      </p>
      <Image src={'/src15.png'} alt={'img1'} width={500} height={300} />
      <p>
        현재 storage에는 data1과 data2가 저장되어 있는 상태입니다.
        <br />이 상태에서 browser(program)를 실행합니다.
      </p>
      <Image src={'/src16.png'} alt={'img1'} width={500} height={300} />
      <p>
        그럼 대략 위에 적힌 순서대로 데이터들이 불러와지면서 browser에
        그려집니다.
      </p>
      <p>이렇게 초기 data가 어떻게 road되는지 알아보았습니다.</p>
      <p>
        다음으로는 데이터가 어떻게 생성되고 저장되는지 대략적으로
        알아보겠습니다.
      </p>
      <Image src={'/src17.png'} alt={'img1'} width={500} height={300} />
      <p>
        cpu가 새로운 데이터를 메모리에 할당합니다.
        <br />
        이는 브라우저에도 반영이 됩니다.
      </p>
      <p>이제 저장하기 버튼을 눌러봅시다</p>
      <Image src={'/src18.png'} alt={'img1'} width={500} height={300} />
      <p>
        memory에 존재했던 데이터를 cpu가 읽어서 storage에 데이터를 저장합니다.
      </p>
      <p>
        이제 데이터가 영구적으로 저장되었기 때문에 브라우저를 닫아 프로그램을
        종료시키면 다음그림과 같아집니다.
      </p>
      <Image src={'/src19.png'} alt={'img1'} width={500} height={300} />
      <p>memory가 전부 날아가버렸죠?</p>
      <p>이 상태에서 다시 browser를 켜서 데이터를 불러오면,</p>
      <Image src={'/src20.png'} alt={'img1'} width={500} height={300} />
      <p>위 그림과 같아집니다.</p>
      <p>여기서 server가 중간에 생기면 그림은 아래와 같아집니다.</p>
      <Image src={'/src21.png'} alt={'img1'} width={1000} height={500} />
      <p>
        위 그림이 대략적인 fetch의 진행과정입니다.
        <br />
        network부분이 www.google.com에 접근한다고 생각하면됩니다.
      </p>
      <p className='text-muted-foreground'>
        해당 그림을 gpt4o 에 복사붙여넣기 하면 gpt가 잘 설명해줍니다.
      </p>
      <p>이 그림의 데이터 흐름이 제가생각하는 네트워크 데이터의 흐름입니다.</p>
      <p>
        그리고 browser에서 필요한 데이터에 대한 네트워크 과정을 fetch라고
        합니다.
        <br />위 그림과 동일하게 진행이 되겠지요.
      </p>
      <p>
        제가 이해한 것이 많은것이 빠지고 완전 정확하지는 않지만 전반적인{' '}
        <Strong text={'데이터의 생명주기(Data Lifecycle)'} />를 이해하기에는
        충분하다고 생각합니다.
      </p>

      <p>
        개인적으로 이런 데이터 생명주기를 알고 개발을 하는거와 모르고 개발을
        하는것은 <Strong text={'천지차이'} />
        라는 말이 어울릴 정도로 중요한 개념이라 생각하기 떄문에,
        <br />
        모호하거나 이해가 잘 안가는 부분이 있다면 gpt를 이용하여 이애하고
        넘어가는것을 추천합니다.
      </p>

      <div className='pt-10 flex justify-between'>
        <PrevButton href={routes.storage.path} text={routes.storage.name} />
        <NextButton href={routes.fetch.path} text={routes.fetch.name} />
      </div>
    </ContentSection>
  )
}

export default Page
