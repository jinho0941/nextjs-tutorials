import { ContentSection } from '@/components/content-section'

const Page = () => {
  return (
    <ContentSection>
      <p>
        웹이 처음 나왔을때는 문서를 local환경에서만 열고 닫고 수정하는 형식으로
        했을겄입니다.
        <br />
        공학자들이 정리된문서를 링크 형식으로 왔다갔다 하면서 편하게 보기 위해서
        이죠.
        <br />
        이것은 html 이름 속에도 속해 있습니다.
      </p>
      <p>HTML (Hypertext Markup Language)</p>
      <p>Hypertext는 클릭했을때 다른 페이지로 넘어갈수있는 text를 뜻합니다.</p>
      <p>
        위에 말했던것 처럼 문서를 정리하고 관련된 문서를 서로 클릭하면서
        들어갈수 있도록 설계했을것입니다.
      </p>
      <p>
        하지만 local환경이라 서로 데이터를 동기화(업데이트) 시킬려면,
        <br />
        서로 문서를 비교해가면서 일일이 채크했어야 할것입니다.
      </p>
      <p>
        이런식으로 일일이 할수 없으니 하나의 컴퓨터에서 데이터를 관리해야할
        필요성이 생기고,
        <br />이 니즈를 맞추기 위해 한 컴퓨터(server)에서 문서를 관리하는 방법이
        나옵니다.
      </p>
    </ContentSection>
  )
}

export default Page
