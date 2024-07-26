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
        이미 글을 너무 많이쓰기도 했고(지침),
        <br />
        내용이 너무 길어질거 같아서 개념위주로만 설명을 하였습니다.
      </p>
      <p>next js라고 하면 ssr이라고 하는데 반은 맞고 반은 틀린말이죠.</p>
      <p>
        이전에 설명했던 내용들을 잘 이해하셧으면 무슨 말인지 이해하셧을
        것입니다.
      </p>
      <p>
        <Strong>
          다시한번 말하지만 nextjs는 php 같은 only ssr framework가 아닙니다
        </Strong>
        <br />
        <span className='text-muted-foreground'>
          인터넷에서 이런글을 볼때마다 마음이 아픕니다.
        </span>
      </p>
      <p>
        그렇다고 php가 나쁜기술이다 이런건 아닙니다. <br />
        단지 오래된 기술일 뿐이죠.
      </p>
      <p>
        모쪼록 제 설명이 독자에게 도움이 되었으면 좋겠내요.
        <br />
        그것만으로도 이 긴 글을 쓴 보람이 있을거 같습니다.
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
