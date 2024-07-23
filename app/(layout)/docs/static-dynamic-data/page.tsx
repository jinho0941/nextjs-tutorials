import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'

const Page = () => {
  return (
    <ContentSection>
      <p>다시 정적 데이터, 동적 데이터 부분으로 넘어왔습니다.</p>
      <p>사실 앞에 부분들을 대략 이해해야지 이부분도 이해를 할수 있습니다.</p>
      <p>
        이 부분의 네이밍이 개인적으로는 이해가 잘 안가지만 정적과 동적의 대상을
        잘 설정해야 말이맞습니다.
        <br />그 대상은 <Strong>초기 데이터 </Strong>입니다.
      </p>
    </ContentSection>
  )
}

export default Page
