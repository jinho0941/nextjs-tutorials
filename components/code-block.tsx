'use client'
import { CodeBlock as ReactCodeBlock, dracula } from 'react-code-blocks'

type Props = {
  code: string
  language?: string
}

export const CodeBlock = ({ code, language = 'tsx' }: Props) => {
  return (
    <div className='mt-6'>
      <ReactCodeBlock
        text={code}
        language={language}
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  )
}
