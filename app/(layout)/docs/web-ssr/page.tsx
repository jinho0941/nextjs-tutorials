import { ContentSection } from '@/components/content-section'

const Page = () => {
  return (
    <ContentSection>
      <p>이쯤이 아마 1998년 쯤 일것입니다.</p>
      <p>
        db에 데이터를 저장하고 html은 그 데이터를 받아와서 화면에 그려주고
        업데이트가 필요하게 되면서 등장하게 되었죠.
      </p>
      <p>흔히 3대장으로는 jsp, php, asp가 있습니다.</p>
      <p>
        이제 os를 제어할수 있는 java와 같은 언어로 db에 데이터를 저장하고,
        <br />
        jsp같은 탬플릿 엔진으로 html 과 연결시켜서 해당 html에서 해당 데이터를
        불러와서 render를 시키고,
        <br />
        render된 html이 client(browser)로 넘어가게 되면서,
        <br />
        생성과 같은 부분은 form형태로 서버로 넘기고,
        <br /> 서버가 해당 변동사항이 있는 html을 다시 client로 넘기는 형식으로
        작동되었습니다.
      </p>
      <p>이제 외부 데이터(storage)를 받아서 처리가 가능해졌습니다.</p>
      <p>하지만 이 방법이 또 불편했으니까 csr로 넘어오게 되었겠죠?</p>
      <p>오직 ssr로 만 이루어진 서버는 가장 큰 문제점이 있었습니다.</p>
      <p>
        바로 server 자원을 쓰는것이 아닌 단순하게 client에서 만 일어나는
        인터렉션에 대한 처리도
        <br /> 굳이 서버로까지 와서 결과물을 받아가야 됬던 부분입니다.
      </p>
      <p>
        그리고 인터렉션이 있을떄마다 화면도 깜빡거렸을 겁니다 새로운 html을
        받아서 다시 그렸으니.
      </p>
      <p>
        이런 문제점들이 있어서 다시 새로운 방법이 나왔고 그 방법론이 csr입니다.
      </p>
    </ContentSection>
  )
}

export default Page
