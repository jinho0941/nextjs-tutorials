'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'sonner'

export const Exam = () => {
  const data = '저장 데이터'
  const [savedData, setSaveData] = useState(localStorage.getItem('data'))

  const saveData = () => {
    localStorage.setItem('data', data)
    setSaveData(data)
    toast.success('데이터가 성공적으로 저장되었습니다.')
  }

  const deleteData = () => {
    const data = localStorage.getItem('data')
    if (!data) {
      toast.error('현재 데이터가 존재하지 않습니다.')
      return
    }
    localStorage.removeItem('data')
    setSaveData('')
    toast.success('데이터가 성공적으로 삭제되었습니다.')
  }

  return (
    <div className='flex flex-col items-start gap-y-4 border p-4 rounded-lg dark:border-white'>
      <span>{data}</span>
      <Button onClick={saveData}>저장하기</Button>
      <span>저장된 데이터는: {savedData}</span>
      <Button onClick={deleteData}>삭제하기</Button>
    </div>
  )
}
