'use client'

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
    <div className='p-4 border rounded-lg dark:border-white space-y-4'>
      <div>{interData}</div>
      <div>id: {todo?.id}</div>
      <div>content: {todo?.todo}</div>
    </div>
  )
}
