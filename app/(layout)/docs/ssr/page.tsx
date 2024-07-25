import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { Exam } from './components/exam'

const code = `type Todo = {
  id: number
  userId: number
  todo: string
  completed: boolean
}

const fetchData = async () => {
  try {
    const { data } = await axios.get<Todo>('https://dummyjson.com/todos/1')
    return data
  } catch (error) {
    throw new Error('fetch 도중에 에러가 발생했습니다.')
  }
}

export const Exam = async () => {
  const todo = await fetchData()
  const interData = '나는 내부 데이터'

  return (
    <div className='p-4 border rounded-lg dark:border-white space-y-4'>
      <div>{interData}</div>
      <div>id: {todo.id}</div>
      <div>content: {todo.todo}</div>
    </div>
  )
}`
const code1 = `export const Exam = async () => {
  const todo = await fetchData()`

const Page = () => {
  return (
    <ContentSection>
      <p>ssr은 이 tutorial에 메인 콘탠츠 입니다.</p>
      <p>
        next js 가 나오면서 부분 ssr, csr이 가능해 지면서 초기 data fetch는
        ssr로 진행하고 뒤에 인터렉션에 따라서 csr이 되게끔 하는게 핵심이죠.
      </p>
      <p>
        조금 더 예기하자면 완전 처음에는 오직 ssr로만 이루어진 사이트들이
        대부분이였고(php, jsp)
        <br />
        client에서 일어나는 인터렉션처리의 어려움과 비 효율성 때문에 csr(react,
        vue, angular)로 왔다가.
        <br />
        csr의 여러 문제점들 때문에 ssr의 장점과 csr의 장점을 혼합한 ssr+csr이
        next js입니다.
      </p>
      <p>
        그럼 지금부터 next js 의 server component를 이용하여 ssr을 구현해보고,
        <br />
        마찬가지로 csr과 무엇이 다른지 그림으로 흐름을 이해해 보겠습니다.
      </p>
      <p>
        이전에 말했던것 처럼 csr을 이해하셧다면 그렇게 어려운 개념이 아닙니다.
      </p>
      <p>아래 코드는 ssr 예시코드입니다.</p>
      <CodeBlock code={code} />
      <p>결과물은 동일합니다.</p>
      <Exam />
      <p>주목해야 할 부분은</p>
      <CodeBlock code={code1} />
      <p>이처럼 component 에서 비동기로 data를 호출한다는 부분인데</p>
      <p>
        이 부분은 코드로는 이해하기 힘듭니다. 그러니 바로 개념으로 넘어가서
        확인해봅시다.
      </p>
    </ContentSection>
  )
}

export default Page
