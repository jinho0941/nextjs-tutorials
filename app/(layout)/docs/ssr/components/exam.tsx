import axios from 'axios'

type Todo = {
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
}
