import { ContentSection } from '@/components/content-section'
import { Subtitle } from '@/components/subtitle'
import { AlertTriangle, Goal } from 'lucide-react'

const Page = () => {
  return (
    <ContentSection>
      <p>
        이 문서는 React 18부터 추가된
        <span className='ml-1 font-bold'>서버 컴포넌트</span>의 등장 이유와 기존
        fetch와의 차이점을 예제와 개념 설명을 하여 이해를 돕기 위해 제작
        되었습니다.
        <br />
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
        csr과 ssr이 어떻게 이루어지는지 이해하고, 그 차이점을 익히는 것입니다.
        <br />
        최종적으로는 react server component와 next js(13)을 왜 쓰는지 이해해
        봅시다.
      </p>

      <p>우선 주요 키워드인 data에 대해 짚고 넘어가겠습니다.</p>
    </ContentSection>
  )
}

export default Page
