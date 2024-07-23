import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { Strong } from '@/components/strong'
import Image from 'next/image'

const code5 = 'const a = 10 + 20'
const code6 = 'MOV R1, #10;\nMOV R2, #20;\nADD R3, R1, R2;\nSTR R3, [R0]'

const Page = () => {
  return (
    <ContentSection>
      <p>
        cpu는 컴퓨터의 실행(processing)부분을 담당하는 핵심 부품입니다.
        <br />
        개념을 설명하는것보다 cpu가 코드래밸에서 어떤 작업을 수행하는지
        알아보는것이 이해해 더 직관적일거라 생각합니다.
        <br />
        그럼 아래의 간단한 코드를 보겠습니다.
      </p>
      <p className='text-muted-foreground'>
        javascript 컴파일러의 동작과정을 무시하고 실제 컴파일 된 이후에 실행하는
        부분만 고려합니다.
      </p>
      <CodeBlock code={code5} language={'javascript'} />
      <p>해당 코드를 어셈블리로 변환하면 아래와 같습니다.</p>
      <CodeBlock code={code6} language={'rust'} />
      <p>
        갑자기 어셈블리가 나와서 어렵게 느껴질수도 있습니다.
        <br />
        아시는분은 알겠지만 어셈블리 언어는 cpu가 직접 실행하는 명령어 즉
        기계어(10101000100)을 1:1로 문자로 변환한 언어입니다.
        <br />
        그러므로 어셈블리어의 각 명령어는 하나의 기계어 명령어에 해당합니다.
      </p>
      <p>
        어셈블리어가 곧 기계어이니, cpu가 실행하는 기계어를 보면 대략 cpu가 어떤
        일을 하는지 파악할수 있을리라 생각합니다.
      </p>
      <p>그러면 이제 명령어 하나씩 어떤 역할을 하는지 해석해 보겠습니다.</p>
      <p>R1(레지스터 R1(cpu캐시 메모리))에 10을 저장합니다.</p>
      <CodeBlock code={'MOV R1, #10;'} language={'rust'} />
      <p>R2 에 20을 저장합니다.</p>
      <CodeBlock code={'MOV R2, #20;'} language={'rust'} />
      <p>
        레지스터 R3에 R1과 R2의 값을 더합니다.
        <br />
        이렇게 하면 현제 R3에는 30이라는 값이 저장된 상태입니다.
      </p>
      <p>하지만 아직 30이라는 값을 a라는 변수에 저장을 하지 않았죠?</p>
      <CodeBlock code={'ADD R3, R1, R2;'} language={'rust'} />
      <p>
        마지막으로 R3에 있는 값을 [R0]에 저장합니다 이때 R0는 a의 주소값입니다.
      </p>
      <CodeBlock code={'STR R3, [R0];'} language={'rust'} />
      <p>이로서 a 주소에 있는 값은 30이 저장되게 됩니다.</p>
      <p>그림으로 설명하면 아래와 같습니다.</p>
      <Image src={'/src4.png'} alt={'src4'} width={600} height={500} />
      <p>
        초기 상태입니다.
        <br />
        현재 메모리에는 a값이 등록되어있고(이것도 cpu가 등록합니다)
        <br />
        이제 cpu는 새로 들어온 명령어들을 실행합니다.
      </p>
      <p>R1 레지스터에 10을 저장합니다.</p>
      <Image src={'/src5.png'} alt={'src5'} width={600} height={500} />
      <p>마찬가지로 R2에 20을 저장합니다.</p>
      <Image src={'/src6.png'} alt={'src6'} width={600} height={500} />
      <p>R3에 R1값과 R2값을 더한값을 저장합니다.</p>
      <Image src={'/src7.png'} alt={'src7'} width={600} height={500} />
      <p>마지막으로 a 메모리 주소(R0)에 R3에 있는 값을 저장합니다.</p>
      <Image src={'/src8.png'} alt={'src8'} width={600} height={500} />

      <p>
        이 과정을 보여준 이유는 cpu가 하는 역할이 대략적으로 어떤 일을 하는지
        알아보고자 함이 목적이라 정확한 동작방식이나 어셈블리는 모르셔도
        무관합니다.
      </p>

      <p>
        정리하자면 CPU는 프로세서의 기능을 하는 장치로써 값을 메모리에
        저장하거나 꺼내어 변경을 하고 다시 저장을 하거나 삭제, 등
        <br />
        <Strong>명령어</Strong>를 받아 처리하는 장치로 추상적으로 이해하시면
        됩니다.
      </p>
      <p>
        핵심은 우리가 작성하는 코드가 cpu에게 메모리에 저장을 하고 그 값을
        연산을 하고 네트워크 요청을 보내게 하는 등{' '}
        <Strong>최종적으로 cpu에게 명령을 내린다</Strong>
        라는 것을 이해하면 되겠습니다.
      </p>
    </ContentSection>
  )
}

export default Page
