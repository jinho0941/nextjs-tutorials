import { ContentSection } from '@/components/content-section'
import { Subtitle } from '@/components/subtitle'
import { Title } from '@/components/title'
import { AlertTriangle, Goal } from 'lucide-react'

const Page = () => {
  return (
    <ContentSection>
      <Title title={'introduction'} />
      <p>
        이 문서는 React 18부터 추가된
        <span className='ml-1 font-bold'>서버 컴포넌트</span>의 등장 이유와 기존
        fetch와의 차이점을 예제와 개념 설명을 하여 이해를 돕기 위해 제작
        되었습니다.
        <br />
        또한, Next 14의<span className='ml-1 font-bold'>서버 액션</span>을
        이용해 클라이언트 인터랙션을 처리하는 방법을 설명합니다.
      </p>
      <Subtitle icon={AlertTriangle} subtitle={'주의사항'} />
      <p>
        React를 활용한 프로젝트를 구현해본 경험이 있다는 가정 하에 작성되었기
        때문에,
        <br />
        TypeScript나 라우팅(route) 등의 다른 개념에 대한 설명은 포함하지
        않습니다.
      </p>
      <Subtitle icon={Goal} subtitle={'목표'} />
      <p>
        최종 결과물은 간단한 todo 앱을 만드는 것입니다.
        <br /> 목적은 CRUD에 대해 어떻게 데이터 패치가 이루어지는지, 그리고
        액션에 따른 서버와 클라이언트 데이터 동기화가 어떻게 이루어지는지를
        이해하는 것입니다.
      </p>
      <a
        href='https://todo-client-eu649ziyj-aas-projects-34bc0981.vercel.app/'
        target='_blank'
        className='text-sky-500 underline'
      >
        결과물 link
      </a>
      <p className='mt-6 text-muted-foreground'>
        서버 부하를 막기 위해 한 컴퓨터당 제공해주는 api call 횟수는 하루에
        <span className='ml-1 font-bold underline'>100회</span>입니다.
        <br />
        튜토리얼을 진행하는것에는 문제가 없으니 크게 상관안하셔도 무방합니다.
      </p>
    </ContentSection>
  )
}

export default Page
