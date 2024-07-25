import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { Subtitle } from '@/components/subtitle'
import { Workflow } from 'lucide-react'
import Image from 'next/image'

const code = `const todo = await api.get("/todo") //todo=아자`

const code1 = `<div>
  <div>123123</div>
  <div>{todo}</div>
</div>`

const code2 = `<div>123123</div>
<div>{todo}</div>`

const code3 = `<div>123123</div>
<div>아자</div>`

const Page = () => {
  return (
    <ContentSection>
      <p>
        코드를 먼저 설명했는데 코드는 개념을 이해한 뒤에 보면 그때 읽히기때문에
        천천히 이해를 먼저 하는것을 목표로 하시는것을 추천합니다.
      </p>
      <Image src={'/src24.png'} alt={'img'} width={200} height={200} />
      <p>
        이렇게 browser가 있습니다. 이게 client를 뜻합니다.
        <br />
        우리가 흔히 쓰는 browser입니다.
      </p>
      <p>그럼 browser에서 html, css, javascript를 어떻게 가져오나요?</p>
      <Image src={'/src25.png'} alt={'img'} width={600} height={300} />
      <p>
        local에서 가져오는 방법이 있지만 일반적이지는 않죠?
        <br />
        아마 local로 가져오는거는 개발자가 유일할것입니다. 거의 쓰지도
        않을거고요.
      </p>
      <Image src={'/src26.png'} alt={'img'} width={600} height={300} />
      <p>
        위 그림처럼 개발자라면 localhost:3000, 5432 등등 local server에서
        가져올것이고,
        <br />
        일반 사용자라면 www.aaa.com같은 서버에서 데이터를 가져오게 됩니다.
      </p>
      <p>여기까지는 csr과 ssr이 동일합니다 외부적으로 보면요.</p>
      <p>
        그럼 해당 part는 csr이니까 csr이 어떤식으로 fetch와 render가 되는지
        알아볼까요?
      </p>
      <Subtitle subtitle={'csr 흐름'} icon={Workflow} />
      <p className='text-muted-foreground'>
        csr을 설명하는데 css는 필요없는 개념이니 제외하겠습니다.
      </p>
      <p>서버에서 html과 js파일을 아래와 같이 가져온다고 생각해봅시다.</p>
      <CodeBlock code={code} />
      <CodeBlock code={code1} language='html' />
      <Image src={'/src27.png'} alt={'img'} width={600} height={300} />
      <p>위 그림에서 2번에 해당하는 작업일것입니다.</p>
      <p>다음은 무엇을 할까요?</p>
      <p>별 다른 조치(로딩)을 안했다면 초기 html이 render가 될것입니다.</p>
      <CodeBlock code={code2} language='html' />
      <p>
        todo는 javascript가 실행된 뒤에 가져오는 값이죠? 순서가 있으니 html이
        먼저 render가 됩니다.
      </p>
      <Image src={'/src28.png'} alt={'img'} width={600} height={600} />
      <p>그러면 아래 그림처럼 123123만 출력이 됩니다.</p>
      <Image src={'/src29.png'} alt={'img'} width={600} height={600} />
      <p>다음은 뭘까요?</p>
      <Image src={'/src30.png'} alt={'img'} width={600} height={600} />
      <p>
        바로 javascript가 실행이됩니다.
        <br />
        javascript 코드는 아래 코드죠?
      </p>
      <CodeBlock code={code} />
      <p>
        코드를 보면 todo라는 변수에 api.get(todo)라는 비동기 함수를
        실행시킵니다.
      </p>
      <p>그러면 다시 해당 url에 request, response가 주고받게 됩니다.</p>
      <Image src={'/src31.png'} alt={'img'} width={700} height={700} />
      <p>
        이제 todo라는 변수에 todo: 아자 라는 json이 할당되지만 편의상 아자 라는
        string이 저장되었다고 합시다.
      </p>
      <p>그럼 client(browser)의 memory는 아래와 같이 변하게 됩니다.</p>
      <Image src={'/src32.png'} alt={'img'} width={500} height={500} />
      <p>다음은 다시 변동사항이 있는 html을 render 시켜줘야겠죠?</p>
      <Image src={'/src33.png'} alt={'img'} width={500} height={500} />
      <p>그렇게 되면 해당 html은 아래와 같이 생겼을 것이고.</p>
      <CodeBlock code={code3} language='html' />
      <p>react 인 경우 setState를 통해 render가 다시 일어나게 됩니다.</p>
      <Image src={'/src34.png'} alt={'img'} width={500} height={500} />
      <p>
        그러면 위와같이 최종적으로 내부 데이터와 외부 데이터가 전부 렌더가
        됩니다.
      </p>
      <Image src={'/src35.png'} alt={'img'} width={700} height={700} />
      <p>
        전채적인 그림은 위와 같아지며 csr 기준 초기 html, js를 받아오는
        과정에서는 www.xxx.com 같이 도메인을 입력했을때 이며,
        <br />
        1, 2 번 과정이 실행되고 이때 보통 브라우저가 이전 페이지 모습으로 살짝
        멈추게 됩니다.
      </p>
      <p>
        그리고 3번이 실행되면서 외부 데이터가 존재하지 않는 html이 실행이 되며,
        <br />
        다음으로는 4번이 실행되고 필요한 외부 데이터를 api서버에 요청하게 됩니다
      </p>
      <p>
        5번 과정에서 해당 서버 url에 request를 날리고
        <br />
        6번은 해당 리소스를 response해줍니다.
      </p>
      <p>
        그리고 마지막으로 다시 html을 render를 하게 되면서 필요한 콘텐츠들이
        전부 로드가 됩니다.
      </p>
      <p>이때 csr은 보통 3번~ 7번 과중에서 적절한 로딩처리를 해주게 됩니다.</p>
      <p>
        7번이 어떻게 보면 client side rendering 에서 rendering이라는 부분이 맡은
        역할일것입니다.
      </p>
      <p>
        개인적으로는 render보다 fetch가 어떻게 진행되는지가 더 핵심인거 같으니
        fetch 관점에서 보시는것을 추천합니다.
      </p>
      <p>이 흐름을 이해하셧다면 ssr은 그다지 어렵지 않습니다.</p>
      <p>
        3~7 과정이 server에서 일어나는 것이죠.
        <br />
        정확하게 말하면 4~7번입니다. ssr은 초기 render는 필요없거든요.
      </p>
      <p>이에 대한 자세한 설명은 다음 챕터에서 계속 이어 가겠습니다.</p>
    </ContentSection>
  )
}
export default Page
