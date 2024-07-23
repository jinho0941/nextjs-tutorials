import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const DownloadButton = () => {
  return (
    <Button className='ml-2 gap-x-2' size={'sm'} asChild>
      <a href='https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_DOC.doc'>
        <Download />
        다운로드
      </a>
    </Button>
  )
}
