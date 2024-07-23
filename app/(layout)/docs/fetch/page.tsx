'use client'
import { ContentSection } from '@/components/content-section'
import { Title } from '@/components/title'
const Page = () => {
  return (
    <ContentSection>
      <p>
        이전 글에서 fetch가 어떤식으로 이루어지는지 그림으로 보았을 것입니다.
        <br />
        다시한번 설명을 하면 fetch는 browser에서 필요한 데이터를 가져오는 과정을
        말합니다.
        <br />
        또한 실제로 fetch를 진행하기위해 사용하는 browser에서 제공해주는 api
        이름도 fetch입니다.
      </p>
      <p>fetch는 이 문서의 핵심인 ssr을 이해하는데 가장 중요한 개념입니다.</p>
      <p>
        어느정도나면 fetch의 위치에 따라서 csr과 ssr이 결정이 된다고 보면됩니다.
        <br />
        html이 fetch 된 이후에 render가 되고,
        <br /> 그 위치가 client, server에 따라서 달라지니 client side
        render(csr), server side render(ssr) 라고 하는것은 이해가 되지만..
      </p>
      <p>
        개인적으로 render라는 것이 상대적으로 fetch보다는 중요성이 더 떨어지는것
        처럼 보여, <br />
        client side fetch, server side fetch라고 부르는게 더 직관적이지않나
        생각합니다.
      </p>
    </ContentSection>
  )
}

export default Page
