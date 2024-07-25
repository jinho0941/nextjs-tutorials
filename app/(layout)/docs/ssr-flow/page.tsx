import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'
import Image from 'next/image'

const Page = () => {
  return (
    <ContentSection>
      <p>아래 이미지를 기억하시나요?</p>
      <Image src={'/src35.png'} alt={'img'} width={700} height={700} />
      <p>제가 csr를 설명하면서 ssr은 별로 다를게 없다고 말했습니다.</p>
      <p>먼저 최종 결과물을 먼저 보여드리자면 아래와 같습니다.</p>
      <Image src={'/src36.png'} alt={'img'} width={700} height={700} />
      <p>
        그림을 종합적으로 보면
        <br />
        기존의 client(browser)쪽에서 fetch를 진행한 뒤 render를 했는데,
        <br />
        이제는 html, js를 주는 서버에서 api서버와 소통을 한 뒤에 html 콘탠츠를
        render를 전부 해준 상태로 주게 됩니다.
      </p>
      <p>
        이러면 csr보다는 초기 로딩속도는 느리게 되겠죠? 아무래도 api fetch작업을
        해주니까요.
      </p>
      <p>
        이런 장점과 단점을 설명하기 앞서 상세하게 먼저 설명을하고 뒤에 따로
        설명을 드리겠습니다.
      </p>
      <Image src={'/src37.png'} alt={'img'} width={700} height={700} />
      <p>
        일단 첫 시작은 똑같이 시작합니다 html, js가 있는 서버로 요청이 가게
        됩니다.
      </p>
      <p>하지만 2번부터 csr과 다른방향으로 가버립니다.</p>
      <Image src={'/src38.png'} alt={'img'} width={700} height={700} />
      <p>갑자기 어디로 가는것일까요? csr과 잠시 비교를 해보면</p>
      <Image src={'/src39.png'} alt={'img'} width={500} height={250} />
      <p>확실하게 차이가 있습니다.</p>
      <p>csr인 경우에는 fetch함수가 담긴 js와 초기 html을 넘겨주었었죠?</p>
      <p>
        하지만 next js server component인 경우에는 해당 component가 필요한
        네트워크 데이터를 component 차원에서 fetch를 합니다.
      </p>
      <p>그 과정이 위의 2번입니다.</p>
      <p>다시 말해 서버에서 서버로 request(todo data) 를 보내는것이죠</p>
      <Image src={'/src40.png'} alt={'img'} width={700} height={700} />
      <p>
        그러면 api서버는 해당 response를 server component로 전달이 되고,
        <br />
        다음은 뭘까요?
        <br />
        필요한 데이터가 전부 모였으니 html render를 하게 됩니다.
      </p>
      <Image src={'/src41.png'} alt={'img'} width={700} height={700} />
      <p>그림을 보시면 어디에서 html render(build)가 일어나고 있나요?</p>
      <p>
        정확히 말하면{' '}
        <Strong>
          fetch data를 포함시킨 내부, 외부 데이터를 전부 가진 상태로 html
          render(build)
        </Strong>
        가 어디서 일어나고 있나요?
      </p>
      <Image src={'/src42.png'} alt={'img'} width={300} height={300} />
      <p>
        바로 <Strong>서버</Strong>에서 일어나고 있죠?
      </p>
      <p>
        그래서 <Strong>server side rendering</Strong>이라고 부르는 것입니다.
      </p>
      <p>
        함축적인 의미라 많은 과정들이 이름에서 빠지긴 했지만 핵심은 위에
        말한거와 같습니다.
      </p>
      <p>아래의 이미지는 csr의 render인데,</p>
      <Image src={'/src43.png'} alt={'img'} width={300} height={300} />
      <p>fetch후 render가 client(browser)에서 일어나고 있죠?</p>
      <p>그래서 이 과정을 client side rendering이라고 부릅니다.</p>
      <p>핵심은 여기까지고 다음 과정들을 보자면,</p>
      <Image src={'/src44.png'} alt={'img'} width={700} height={700} />
      <p>fetch 작업이 끝나고 build된 html을 받는게 끝입니다.</p>
      <p>
        이것을 browser가 받아서 각종 엔진들이 화면에 콘탠츠들을 그려주게 됩니다.
      </p>
      <p>
        위 과정들을 보면 어떤것이 처음속도는 빠르고 느린지는 답이 나와있죠.
        <br />
        초기에 바로 주는 csr이 속도가 당연히 더 빠릅니다.
      </p>
      <p>하지만 전채적인 속도는 거의 동일할 것입니다.</p>
      <p>
        그렇다고 한다면 왜 굳이 csr을 잘쓰고 있다가 ssr로 넘어오게 된것일까요?
      </p>
      <p>이 이야기는 다음 챕터에서 종합적으로 다루어 보겠습니다.</p>
    </ContentSection>
  )
}

export default Page
