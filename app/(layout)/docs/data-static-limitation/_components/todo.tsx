'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const formSchema = z.object({
  todo: z
    .string()
    .min(1, { message: '글자를 입력해 주세요.' })
    .max(10, { message: '최대 글자수는 10글자 입니다.' }),
})

export const Todo = () => {
  const [todoList, setTodoList] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { todo } = values
    setTodoList((prev) => [...prev, todo])
    form.reset()
  }

  return (
    <div className='min-w-80 w-1/2 border-black dark:border-white rounded-lg p-4 border'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full'
        >
          <FormField
            control={form.control}
            name='todo'
            render={({ field }) => (
              <FormItem>
                <FormLabel>TODO</FormLabel>
                <FormControl>
                  <Input
                    placeholder='todo 를 입력하고 enter를 눌러 생성하세요!'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      {todoList.map((todo, index) => (
        <div key={index} className='mt-4 space-y-2'>
          {todo}
        </div>
      ))}
    </div>
  )
}
