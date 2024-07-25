import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'

const Page = () => {
  return (
    <ContentSection>
      <p>
        이제 html을 서버에 올리고 서버에 요청(request)를 하면 response로 html을
        주고, <br />
        browser는 해당 html을 받아 render 시켜주는 방식으로 진화하게 됩니다.
      </p>
      <p>
        이렇게 되면 기존의 동기화를 하기위해 서로 여러버젼을 가져와서
        비교해가면서 업데이트 해야될 필요성은 사라지게 되겠죠.
      </p>
      <p>
        이제 수정을 한 곳에서만 하면 모든 사용자들이 같은 문서를 볼수있게
        되었습니다.
        <br />
        이전의 문제점이 깔끔하게 해결되었죠.
      </p>
      <p>하지만 문제점이 하나 더 있었습니다.</p>
      <p>문서 수정을 할려면 직접 html을 수정했어야 했다는 점입니다. </p>
      <p>
        html을 잘 모르거나 서버 컴퓨터를 누가 사용중이면 다른사람은 수정을
        못하게 되겠죠(병목).
      </p>
      <p>
        이부분은 이전에도 설명을 드렸습니다.
        <br /> 바로 정적(내부)데이터의 한계점이였죠.
      </p>
      <p>
        html은 그대로 두고 변동성이 있는 데이터나 추가요소에 대한 동적인 처리가
        필요해진 것 입니다.
      </p>
      <p>
        그말인 즉 <Strong>ssr의 등장</Strong>을 뜻합니다.
      </p>
    </ContentSection>
  )
}

export default Page
