import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { Subtitle } from '@/components/subtitle'
import { Power, Text, Workflow } from 'lucide-react'
import { Exam } from './_components/exam'
import { Exam2 } from './_components/exam2'

const code = `<div>내부 데이터</div>
<div>외부 데이터1</div>
<div>외부 데이터2</div>
`
const code1 = `내부 데이터
`
const code2 = `내부 데이터
외부 데이터1
외부 데이터2
`
const code3 = `'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

type Todo = {
  id: number
  userId: number
  todo: string
  completed: boolean
}

export const Exam = () => {
  const [todo, setTodo] = useState<Todo>()
  const interData = '나는 내부 데이터'

  const fetchTodo = async () => {
    try {
      const { data } = await axios.get<Todo>('https://dummyjson.com/todos/1')
      setTodo(data)
    } catch (error) {}
  }
  useEffect(() => {
    fetchTodo()
  }, [])

  return (
    <div>
      <div>{interData}</div>
      <div>id: {todo?.id}</div>
      <div>content: {todo?.todo}</div>
    </div>
  )
}

`
const code4 = ` return (
  <div>
    <div>{interData}</div>
    <div>id: {todo?.id}</div>
    <div>content: {todo?.todo}</div>
  </div>
)`

const code5 = `<div>id: {todo?.id}</div>
<div>content: {todo?.todo}</div>`

const code6 = `const [todo, setTodo] = useState<Todo>()
const interData = '나는 내부 데이터'`

const code7 = `useEffect(() => {
  fetchTodo()
}, [])`

const code8 = `const fetchTodo = async () => {
  try {
    const { data } = await axios.get<Todo>('https://dummyjson.com/todos/1')
    setTodo(data)
  } catch (error) {}
}`

const code9 = `{
  "id": 1,
  "todo": "Do something nice for someone you care about",
  "completed": false,
  "userId": 152
}`

const code10 = `return (
  <div>
    <div>{interData}</div>
    <div>id: {todo?.id}</div>
    <div>content: {todo?.todo}</div>
  </div>
)`

const code11 = `return (
  <div>
    <div>나는 내부 데이터</div>
    <div>id: 1</div>
    <div>content: Do something nice for someone you care about</div>
  </div>
)`

const Page = () => {
  return (
    <ContentSection>
      <p>
        이전글에 설명했던것 처럼 csr은 fetch를 client side에서 진행하고 render를
        하는것을 뜻합니다.
      </p>
      <p>
        보통 요즘 데부분의 사이트는 내부, 외부 데이터가 섞여있는 형태이기 때문에
        html도 아래와 같이 생겼습니다.
      </p>
      <CodeBlock code={code} language='html' />
      <p>
        이상황에서 fetch를 진행안하고 바로 html 을 render(build) 시키면 어떻게
        될까요?
      </p>
      <p>아마도 아래 결과물과 똑같이 생겼을 것입니다.</p>
      <CodeBlock code={code1} />
      <p>이유는 외부 데이터를 가져오지 않고 html을 render시켰기 때문인데요.</p>
      <p>
        그럼 외부 데이터를 가져온 뒤에 render를 하면 이제 아래와 같이 기대한
        값이 나오게 됩니다.
      </p>
      <CodeBlock code={code2} language='bash' />
      <p>
        그럼 이제부터 client에서 fetch와 render가 어떻게 되고 중간에 빈 값들은
        어떻게 되는지 코드 예시로 알아보겠습니다.
      </p>
      <Subtitle subtitle={'code'} icon={Text} />
      <p>csr을 이해하기 위해 사용할 예시코드는 아래와 같습니다.</p>
      <CodeBlock code={code3} />
      <p>결과물은 아래와 같습니다.</p>
      <Exam />
      <p>
        사실 위에 코드를 전부 이해할려면 알아야할 개념이 엄청 많기때문에,
        <br />
        fetch와 render 관점에서만 설명하겠습니다.
      </p>
      <CodeBlock code={code4} language='html' />
      <p>초기에 컴포넌트가 마운트가 되고 아래 html이 보이게 됩니다.</p>
      <CodeBlock code={'나는 내부 데이터'} />
      <p>이유는 마운트 될때 해당 데이터들이 초기화가 안되었기 때문인데요.</p>
      <CodeBlock code={code5} language='html' />
      <p>서로 코드를 비교해보면</p>
      <CodeBlock code={code6} />
      <p>
        todo는 아직 빈값(undefined)로 초기화가 되었고
        <br />
        interData는 '나는 내부 데이터'라는 string으로 초기화가 되었습니다.
      </p>
      <p>이 상태에서 렌더가 일어나니 위에 빈값들이 먼저 나오게 되는거죠.</p>
      <CodeBlock code={code7} />
      <p>
        이제 render가 끝났으니 useEffect가 실행됩니다.
        <br />
        내용은 fetchTodo 라는 함수를 () 실행 시킵니다.
      </p>
      <p>fetchTodo는 아래와 같이 생겼습니다.</p>
      <CodeBlock code={code8} />
      <p>
        비동기 함수이며 data를 fetch해서 useState의 set함수로 해당 data를 넣어서
        re render를 시켜주는것을 볼수 있습니다.
      </p>
      <CodeBlock code='const [todo,...]' />
      <p>
        그럼 해당 todo에는 data가 들어간 상태이며 아래의 json이 들어간 상태로
        다시 컴포넌트 render가 일어납니다.
      </p>
      <CodeBlock code={code9} />
      <p>
        그럼 아래에 html은 다시 빌드가 되며 이전과는 다르게 data들의 값이
        존재하는 상태로 들어가게 됩니다.
      </p>
      <CodeBlock code={code10} language='html' />
      <CodeBlock code={code11} language='html' />
      <p>이렇게 되면 결과물이 어떻게 되나요? 아래와 같이 될것입니다.</p>
      <Exam />
      <p>
        이렇게 되었을떄 문제점이 무엇일까요?
        <br />
        데이터는 성공적으로 잘 불러왔지만 사용감이 엄청 떨어집니다.
        <br />
        일단 첫번째로 눈이 아프고요. 아래의 버튼을 눌러서 fetch가 되는 과정을
        살펴볼까요?
      </p>
      <Exam2 />
      <p>
        위 결과물이 이전과 다른점은 패치 시점을 버튼을 눌렀을때로 한것입니다.
      </p>
      <p>
        버튼을 누르니까 값자기 없던 데이터가 나타나게 되었죠?
        <br />
        이것이 csr의 단점입니다 초기 js를 먼저 받아오고 dom을 빌드한 뒤에
        fetch가 일어나고 다시 render가 일어나서 기본적으로 html render가 2번
        일어나고 그 공백동안 로딩 처리도해줘야하며.. 등등
        <br />
        개발자 입장에서도 불편한 점들이 존재하죠.
      </p>
      <p>
        이런 과정들을 알게되면, 자연스럽게 장점과 단점을 알게되실거라
        생각합니다.
      </p>
      <p>코드로 먼저 알아보았는데 이제는 그림으로 흐름을 알아봅시다.</p>
    </ContentSection>
  )
}

export default Page
