import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { LinkText } from '@/components/link-text'
import { NextButton } from '@/components/next-button'
import { PrevButton } from '@/components/prev-button'
import { Title } from '@/components/title'
import { routes } from '@/constant'
import Image from 'next/image'

const code1 = `<div>정적인 데이터 입니다.</div>`
const code2 = `정적인 데이터 입니다.`
const code3 = `<div>변경된 데이터 입니다.</div>`
const code4 = `변경된 데이터 입니다.`

const Page = () => {
  return (
    <ContentSection>
      <Title title={'정적 데이터'} />
      <p>
        흔히 static 데이터라고 합니다.
        <br />
        이는 웹 페이지가 로드될 때 이미 포함되어 있는 데이터로, 페이지 로드 후에
        별도의 추가 요청 없이 즉시 사용할 수 있는 데이터를 의미합니다.
        <br />
        HTML, CSS, 이미지 파일, 그리고 일부 JavaScript 코드와 같이 웹 페이지의
        초기 로드 시 함께 다운로드되는 자원들로 구성됩니다.
      </p>
      <CodeBlock code={code1} language={'html'} />
      <CodeBlock code={code2} language={'text'} />
      <Image src={'/src1.png'} alt={'src1'} width={600} height={500} />
      <p>
        정적 데이터의 특징으로는 해당 데이터를 업데이트 하기위해서는 html,
        JavaScript 코드를 직접 수정해야만 변경할수 있다는 점입니다.
      </p>
      <CodeBlock code={code3} language={'html'} />
      <CodeBlock code={code4} language={'text'} />
      <p>
        정적인 데이터만 사용하여 구성된 페이지는 어떤것이 있을까요?
        <br />
        대표적으로
        <LinkText
          href={'https://en.wikipedia.org/wiki/Main_Page'}
          text={'위키'}
        />
        ,
        <LinkText href={'https://nextjs.org/docs'} text={'문서'} />
        가 있습니다.
        <br />
        지금 제가 작성하는 페이지도 일종의 정적 데이터로만 구성된 페이지로도
        볼수 있습니다.
      </p>

      <p>
        하지만 이런 추상적인 말로는 이해가 되지 않으실거라 생각합니다.
        <br />
        이를 이해하기위해서는 앞으로 알아야 할 개념들이 많으니 천천히 공부해
        봅시다.
      </p>
    </ContentSection>
  )
}

export default Page
