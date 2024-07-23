import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'
import { Todo } from './_components/todo'
import Image from 'next/image'
import { PrevButton } from '@/components/prev-button'
import { NextButton } from '@/components/next-button'
import { Title } from '@/components/title'
import { routes } from '@/constant'

const Page = () => {
  return (
    <ContentSection>
      <Title title={'정적 데이터의 한계점?'} />
      <p>
        정적인 데이터로만 이루어진 페이지의 한계점은 무엇일까요?
        <br />
        여러 문제점이 있겠지만{' '}
        <Strong
          text={'가장 근본적인 이유로써는 데이터 저장과 호출이 불가능'}
        />{' '}
        하다는게 제 생각입니다.
      </p>
      <p>
        그렇다면 데이터 저장이 불가능 한 점이 어떤 문제를 일으킬지 생각해
        봅시다.
      </p>
      <p>
        간단하게 해야 할일을 기록하여 볼수있는 TODO를 예시를 볼까요?
        <br />
        해야할일들의 목록을 생성하고 기록이 되어 그것을 언제든지 다시 들어와서
        볼수 있어야 합니다.
      </p>
      <p>아래의 form을 이용하여 간단하게 Todo를 생성해 봅시다.</p>
      <Todo />
      <Image src={'/src2.png'} alt={'src2'} width={500} height={200} />
      <p>
        위의 이미지 처럼 잘 생성이 되었나요?
        <br />
        그렇다면 이번에는 f5를 눌러서 페이지 새로고침을 해봅시다.
      </p>
      <p>
        새로고침을 하니 이전에 작성했던 내용이 전부 사라지고 데이터가 없던 초기
        상태로 돌아와버렸습니다.
      </p>
      <Image src={'/src3.png'} alt={'src3'} width={500} height={200} />
      <Image src={'/img1.jpg'} alt={'img1'} width={500} height={300} />
      <p>
        왜 이런 일이 생겨나는 것일까요?
        <br />
        분명히 데이터를 생성하고 화면에 출력을 하였는데 말이죠.
      </p>
      <Image src={'/img2.jpg'} alt={'img1'} width={500} height={300} />
      <p>
        정답은 사실 메모리 차원에서만 데이터가 존재하였고,
        <br />
        새로고침을 하니 그 메모리의 데이터의 생명주기가 끝나서 없어져버렸기
        때문입니다.
      </p>
      <p>
        갑자기 메모리 저장장치 생명주기가 이게 뭔말인지 하시는 분들이
        있을거에요.
        <br />
        만약 한번에 이해했다면 매우 좋은 소식이겠내요!
      </p>
      <Image src={'/img3.jpg'} alt={'img1'} width={500} height={300} />
      <p>
        하지만 이해를 못했다고 하더라도 괜찮습니다.
        <br />
        이제 제가 설명드릴 부분이니까요.
        <br />
        실제로 제가 생각해도 이 부분은 CS(Computer Science)부분에서도 가장
        뿌리깊은 부분이라 생각하기 때문입니다.
      </p>
      <p>
        잠시 그럼 정적 데이터의 한계점은 뒤로 미루어 두고,
        <br /> 데이터의 생성과 소멸 즉 생명주기(life cycle)와, 저장(storage),
        이를 위한 처리(processing) 가 어떻게 이루어지는지 이해를 해볼까요?
      </p>
      <p className='font-bold'>
        이 내용은 웹 뿐만 아니라 컴퓨터를 다루는 분야라면 뿌리와 같은 개념이기
        때문에 확실하게 이해하고 넘어가는것을 추천합니다.
      </p>
      <div className='pt-10 flex justify-between'>
        <PrevButton
          href={routes.dataStatic.path}
          text={routes.dataStatic.name}
        />
        <NextButton
          href={routes.computerStructure.path}
          text={routes.computerStructure.name}
        />
      </div>
    </ContentSection>
  )
}

export default Page
