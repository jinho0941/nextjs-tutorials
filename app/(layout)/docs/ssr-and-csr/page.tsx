import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'

const code = `useEffect(() => {
  const fetchTodos = async () => {
    const startTime = performance.now()
    try {
      const response = await api.get<Todo[]>('/todos')
      setTodoList(response.data)
    } catch (error) {
      setError('Error fetching todo list')
    } finally {
      const endTime = performance.now()
      setFetchTime(endTime - startTime)
      setIsLoading(false)
    }
  }

  fetchTodos()
}, [])

const onCreate = async (title: string, description: string) => {
  try {
    const response = await api.post('/todos', { title, description })
    const todo = response.data
    setTodoList((prev) => [todo, ...prev])
  } catch (error) {
    console.log(error)
  }
}
`

const code1 = `export default async function Home() {
  const response = await api.get<Todo[]>('/todos')
  const todoList = response.data`

const code2 = `'use client'

import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'

import { createTodo } from '@/app/action/todo'

export const ServerCreateTodoForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    startTransition(async () => {
      const action = await createTodo(title, description)
      if (!action.success) {
        toast.error(action.message)
        return
      }
      toast.success(action.message)
    })
    e.preventDefault()
    setTitle('')
    setDescription('')
  }`

const Page = () => {
  return (
    <ContentSection>
      <p>이 부분을 명확하게 알려면 코드를 비교하는게 가장 확실한 방법입니다.</p>
      <p>
        여기에 모든 코드를 적기는 힘드니 아래 github link에서 확인하시길
        바랍니다.
      </p>
      <div>
        <a
          className='font-bold text-xl border-b pb-1 dark:border-white'
          target='_blank'
          href='https://github.com/ugaugaugaugaugauga/todo-client'
        >
          Github Link
        </a>
      </div>
      <p>base fetch와 server component fetch정도만 보고 비교해도 충분합니다.</p>
      <p>조금 예시를 가져와서 비교를 해보자면,</p>
      <CodeBlock code={code} />
      <p>
        이처럼 기존의 csr같은 경우에는 fetch와 interaction(인터렉션) 이 같이
        존재하게 됩니다.
      </p>
      <p>반면 ssr같은 경우에는</p>
      <CodeBlock code={code1} />
      <p>위 처럼 fetch는 server component에서,</p>
      <CodeBlock code={code2} />
      <p>
        인터렉션이 있는 부분은 client component에서 사용하는것을 볼수 있습니다.
      </p>
      <p>
        작은 프로젝트라 큰 채감이 없을수도 있지만 비즈니스가 복잡하면 복잡해
        질수록 csr은 애초에 결합된 구조라 분리할수 없지만,
      </p>
      <p>ssr은 역할에 맞게 분리가 되어 훨씬 복잡도가 줄어들게 되며</p>
      <p>그 뜻은 개발 속도가 매우 빨라지게 된다는 것입니다.</p>
      <p>개발자에 대한 효율성이 좋아진다는 말이죠.</p>
      <p>
        그래서 복잡성으로 따지면 ssr {'>'} csr {'>'} ssr + csr 이 되며 당연히
        개발속도도 엄청 빨라지게 되겠죠?
      </p>
      <p>
        이게 제가 생각하는 <Strong>next js를 사용하는 이유</Strong>입니다.
      </p>
    </ContentSection>
  )
}

export default Page
