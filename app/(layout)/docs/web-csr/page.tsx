import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'

const Page = () => {
  return (
    <ContentSection>
      <p>csr이 유행하기 시작하게 된 시점이 대략 2013~2014로 정도 일것입니다.</p>
      <p>ssr이 상당히 오랫동안 존재했었죠?</p>
      <p>
        그렇기 때문에 ssr로 만들어진 프로젝트들이 상당히 많을것이고, 유지보수를
        해야겠죠?
        <br />이 이유로 아직도 오래된 기술인 jsp, php, asp개발자들을 뽑는것으로
        생각됩니다.
      </p>
      <p>
        본론으로 돌아와서 spa방법론이랑 csr이랑 둘이 등장시기가 비슷해 지면서,{' '}
        <br /> 이를 반영한 대표적인 라이브러리로 react가 나오게 됩니다.
      </p>
      <p>
        csr은 어떻게 진행되는지 설명을 해드렸으니 여기서 자세하게 설명은
        안하겠습니다.
      </p>
      <p>여기서 대부분 흐름을 보면 개인적인 생각이지만</p>
      <p>browser를 사용하는 사용자가 불편해서 바꾼것이아닌,</p>
      <p>
        <Strong>개발자가 개발하다가 너무 불편해서</Strong>
        <br />
        그러니까 개발자(사용자)가 불편해서 바꾸었다고 생각합니다.
      </p>
      <p>이 말을 왜 했냐면 next js의 ssr의 장점을 검색하면,</p>
      <p>
        browser(일반유저) 입장에서 뭐가 좋고 seo.. 등등 말이 나오는데,
        <br />
        이건 개발자 입장이 아닌 마케터, 일반유저 입장에서 장점을 말해놓은게
        대부분 인거 같습니다.
      </p>
      <p>
        이런 밑밥을 설정해놓는 이유는, <br /> 제가 앞으로 설명할 csr + ssr이
        개발자 입장에서 무엇이 편한지 설명을 드리기 위해서 입니다.
      </p>
      <p>이렇듯 csr은 개발자 입장에서 불편한점이 무었이였을까요?</p>
      <p>아마도 데이터 관리의 복잡성이 가장 큰 이유였을 것입니다.</p>
      <p>
        서버 데이터가 client에 있다보니 인터렉션도 처리하고 데이터도 client에서
        유지해야하고, 서버 데이터와 동기화도 시켜야하고,
        <br />
        그러다 보니 코드의 복잡성도 증가하고 명확하게 파일로 나누기도
        어려웠을겁니다.
        <br />
        또한 관리해야할 데이터가 많다보니 전역상태관리(context, redux, jotai...)
        같은 도구들도 등장했을거라 추측합니다.
      </p>
      <p>생각만 해도 머리가 아픈 방법입니다.</p>
      <p>
        개인적으로 이런 server data, client interaction을 분리시키기 위해
        나온것이 csr + ssr이라 생각합니다.
      </p>
      <p>
        예상하셧다 싶이 server data는 ssr 차원에서 관리하고 client interaction은
        csr차원에서 분리해서 관리하는게,
        <br />
        <Strong>react 18의 server component, next js 13입니다.</Strong>
      </p>
    </ContentSection>
  )
}

export default Page
