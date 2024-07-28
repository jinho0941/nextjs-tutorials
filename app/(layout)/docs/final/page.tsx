import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'

const Page = () => {
  return (
    <ContentSection>
      <p>
        원래 계획은 todo앱을 만드는 예시와, <br /> next js에서
        interaction(인터렉션)을 어떻게 처리하는지(server action) 까지 진행할
        생각이였으나.
        <br />
        내용이 너무 길어질거 같아서 개념위주로만 설명을 하였습니다.
      </p>
      <p>긴 글 읽어주셔서 감사합니다.</p>
      <p className='text-muted-foreground'>
        혹시 잘못된 정보나 이해가 잘 안가는 부분이 있다면 daggax8235@gmail.com
        으로 메일 주시면 감사하겠습니다.
      </p>
    </ContentSection>
  )
}

export default Page
