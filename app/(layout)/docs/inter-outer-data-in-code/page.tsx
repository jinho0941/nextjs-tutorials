import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { NumberText } from '@/components/number-text'
import { Strong } from '@/components/strong'
import { Subtitle } from '@/components/subtitle'
import { SquareGanttChart } from 'lucide-react'
import Image from 'next/image'

const code = `app.get('/todo', (req, res) => {
  res.json({ todo: '아자' });
});
`
const code1 = `app.get('/todo', (req, res) => {
  res.json({ todo: '아자123' });
});
`
const Page = () => {
  return (
    <ContentSection>
      <p>
        이전에 내부, 외부 데이터에 대해 간단하게 알아보았습니다.
        <br />
        이번에는 code level에서 javascript로 제어 유무에 따라 실질적으로 어떻게
        구분이 되는지 알아봅시다.
      </p>
      <Subtitle subtitle={'내부 데이터(코드)'} icon={SquareGanttChart} />
      <p>
        local storage는 앞에서 다루었고 사실 중요하는 생각이 들지 않아서
        넘어가겠습니다.
      </p>
      <NumberText num={1} text={'html'} />
      <CodeBlock code={'<div>123</div>'} language='html' />
      <CodeBlock code={'123'} language='html' />
      <p>
        기본적으로 html으로 build된 dom은 내부데이터로 취급됩니다.
        <br />
        id, class로 해당 dom요소에 접근하여 javascript로 조작이 가능하기
        때문인데요.
      </p>
      <p>기존 코드에 id를 붙인뒤</p>
      <CodeBlock code={'<div id="111">123</div>'} language='html' />
      <p>아래와 같이 해당 dom 요소를 선택하고</p>
      <CodeBlock
        code={'const element = document.getElementById("111")'}
        language='javascript'
      />
      <p>해당 dom의 내용을 555로 바꾸면 해당 div 내용이 바뀌게 됩니다.</p>
      <CodeBlock code={'element.textContent = "555"'} language='javascript' />
      <CodeBlock code={'555'} language='html' />
      <p>
        이렇게 되면 javascript로 제어가 가능한 요소이니 html으로 build된 dom은
        내부 데이터 입니다.
      </p>
      <NumberText num={2} text={'css'} />
      <CodeBlock code={'<div style="color: red">123</div>'} language='html' />
      <div className='bg-gray-800 p-2 text-red-500'>123</div>
      <p>마찬가지로 해당 dom 요소를 선택하고</p>
      <CodeBlock
        code={'const element = document.getElementById("111")'}
        language='javascript'
      />
      <p>dom의 text color를 blue로 바꾸면, </p>
      <CodeBlock code={'element.style.color = "blue"'} language='javascript' />
      <div className='bg-gray-800 p-2 text-blue-500'>123</div>
      <p>위에 처럼 바뀌게 됩니다.</p>
      <p>따라서 css도 js로 조작이 가능하니 내부 데이터 입니다.</p>

      <NumberText num={0} text={'DOM?'} />
      <p>
        js는 사실 build된 dom을 조작할수 있는데 dom의 구성요소는 html(content)과
        css(style)이기 때문에 결국 js로 조작이 가능하다고 쉽게 설명하였습니다.
      </p>
      <NumberText num={3} text={'javascript variable'} />
      <CodeBlock code={'let a = 10'} language='javascript' />
      <CodeBlock code={'a = 20'} language='javascript' />
      <p>
        위 코드는 굳이 설명을 안해도 될정도로 기초적인 부분이라,
        <br />
        외부 데이터가 왜 초기화 된 이후에는 내부 데이터로 취급하는지
        알아보겠습니다.
      </p>

      <CodeBlock
        code={'let { todo } = axios.get("/api/todo") // {todo: "아자"}'}
        language='javascript'
      />
      <p>위 처럼 작성을 하면 todo에는 초기값이 아자 가 됩니다.</p>
      <CodeBlock code={'todo = 123'} language='javascript' />
      <p>
        그 다음에 위처럼 다시 123으로 재할당하면 어떻게 되나요?
        <br />
        당연하게도 todo는 123이 됩니다.
      </p>
      <p>
        그러므로 외부 데이터로 초기화를 하여도 이후에 js로 조작이 가능하기
        때문에 초기화 이후에는 내부 데이터(변수)가 된다고 이해하시면 됩니다.
      </p>
      <Subtitle subtitle={'외부 데이터(코드)'} icon={SquareGanttChart} />
      <p>
        이전에 설명했던것 처럼 외부 데이터는 사실상 서버 데이터가 전부입니다.
      </p>
      <CodeBlock code={code} />
      <p>
        위에 코드는 express의 서버 로직인데 /todo에 접근을 하면 todo: 아자 의
        값을 가지고 있는 json을 반환해줍니다.
      </p>

      <CodeBlock
        code={'let { todo } = axios.get("/api/todo") // {todo: "아자"}'}
      />
      <p>해당 json은 browser에서 위와 같은 형태로 받아오게 됩니다.</p>
      <p>
        이때 당연하게도 todo의 변수 초기값은 이전에 설명했던것 처럼 아자 가
        됩니다.
      </p>
      <p>하지만 여기서 서버 반환값을 바꾸게 되면 어떻게 될까요?</p>
      <CodeBlock code={code1} />
      <p>위 처럼 아자123 으로 바꾸고 다시 초기화를 하게 되면</p>
      <CodeBlock
        code={'let { todo } = axios.get("/api/todo") // {todo: "아자123"}'}
      />
      <p>코드는 동일하지만 데이터는 바뀌게 됩니다.</p>
      <p>마찬가지로 javascript로 제어를 하지않았는데 불구하고 바뀌게 되었죠.</p>
      <p>
        이런 네트워크 단에서 데이터를 가져오고,
        <br /> javascript로 초기 값을 설정하는것이 아닌 외부로 부터 가져오는것을
        외부 데이터 라고합니다.
      </p>
      <p>여기서 외부 데이터는 다음 챕터에서 배울 내용인 패치(fetch) 입니다.</p>
    </ContentSection>
  )
}

export default Page
