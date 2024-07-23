import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { LinkText } from '@/components/link-text'
import { NextButton } from '@/components/next-button'
import { PrevButton } from '@/components/prev-button'
import { Title } from '@/components/title'
import { routes } from '@/constant'
import Image from 'next/image'

const Page = () => {
  return (
    <ContentSection>
      <Title title={'정적 데이터'} />
    </ContentSection>
  )
}

export default Page
