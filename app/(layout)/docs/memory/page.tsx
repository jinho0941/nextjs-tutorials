import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { NextButton } from '@/components/next-button'
import { PrevButton } from '@/components/prev-button'
import { Strong } from '@/components/strong'
import { Title } from '@/components/title'
import { routes } from '@/constant'
import Image from 'next/image'

const code7 = `const [todoList, setTodoList] = useState<string[]>([])
function onSubmit(values: z.infer<typeof formSchema>) {
  const { todo } = values
  setTodoList((prev) => [...prev, todo])
  form.reset()
}
  ...
{todoList.map((todo, index) => (
  <div key={index} className='mt-4 space-y-2'>
    {todo}
  </div>
))}
`
const code8 = `{todoList.map((todo, index) => (
  <div key={index} className='mt-4 space-y-2'>
    {todo}
  </div>
))}`

const Page = () => {
  return (
    <ContentSection>
      <Title title={'주기억장치(Memory)'} />
      <p>
        memory는 cpu를 설명하면서 잠깐 언급한것 처럼 실질적으로 프로그램이
        실행동안 사용하는 데이터를 저장하는 공간입니다.
        <br />
        특징은 데이터가 프로그램이 종료되면 전부 사라지는 휘발성의 성질을 가지고
        있으며 cpu에서 필요한 데이터를 불러서 사용하고, 저장하는 역할을 담당하게
        됩니다.
      </p>
      <p>
        이 메모리는 방금 todo를 작성하고 홈페이지를 새로고침 했을때 데이터가
        사라진 부분에 있어서 직접적인 연관이 있습니다.
      </p>
      <Image src={'/src2.png'} alt={'src2'} width={500} height={200} />
      <p>
        이 이미지를 기억하시나요?
        <br />
        생성을 하고 페이지 새로고침이 되면서 데이터가 전부 초기화가 되었습니다.
      </p>
      <p>
        그 이유는 페이지가 새로고침 되면서 마운트가 발생하고,
        <br />
        변수가 전부 초기화가되어 메모리에 존재했던 변수들이 다시 새로운
        값(빈값)으로 변경되었기 때문입니다.
      </p>
      <p>
        마운트가 지금 당장 어떤 의미인지는 알 필요 없습니다.
        <br />
        단지 지금은 새로고침을 하면 코드가 처음부터 다시 위에서 아래로 읽는다는
        과정이라는 것을 이해하시면 됩니다.
      </p>

      <p>아래의 코드를 보면서 이해를 해봅시다.</p>

      <CodeBlock code={code7} language={'tsx'} />

      <p>
        코드를 보면 초기에 todoList는 빈 List인것을 확인할수 있습니다.
        <br />
        그리고 뒤에 form을 통하여 submit을 실행시키면 기존에 있는 list + todo 를
        하여 배열에 추가가되며,
        <br />
        setState를 통해 re-render가 일어나며 페이지가 새로그려지며 추가된
        데이터가 화면에 나타나는것을 볼수 있습니다.
        <br />
        react를 이전에 다루었던 분이라면 이부분은 이론적, 느낌적으로 어떻게
        실행되는지 알고 있을거라 생각합니다.
      </p>
      <p>그렇다면 이 부분이 메모리랑 무슨 상관이 있는것일까요?</p>
      <p>
        이렇게 생성된 데이터는 해당 컴포넌트가 언마운트 되기 전까지 메모리에
        유지가 됩니다.
      </p>
      <p>
        그럼 현재 todo에{' '}
        <Strong text={"['해야할일1', '해야할일2', '해야할일3']"} /> 이
        저장되어있다고 가정하고,
        <br />
        이것이 어떻게 메모리에 등록되며,
        <br />
        언마운트가 될때 어떻게 소멸이 되면서{' '}
        <Strong
          text={'궁극적으로 왜 데이터가 영구적으로 저장이 안되는지'}
        />{' '}
        과정을 그림으로 이해해봅시다.
      </p>
      <Image src={'/src9.png'} alt={'src9'} width={800} height={400} />
      <p>
        위 그림처럼 메모리에 있는 값을 꺼내어 프로세서(cpu)가 처리를 하여
        브라우저에 해야할일 3개가 그려져 있는 상태입니다.
        <br />
        그리고 메모리에 값이 저장되어있죠.
      </p>
      <p>여기서 페이지 새로고침이 발생하면 어떻게 될까요?</p>
      <p>
        기존의 페이지는 언마운트가 되며 새로운 페이지가 마운트가 되며 코드가
        전부 재실행이 됩니다.
      </p>
      <p>
        이때 기존 페이지의 메모리에 있던 데이터들은 언마운트가 되면서 소멸이
        되어버립니다.
        <br />
        힘들게 작성했던 todoList가 사라진 것이죠.
      </p>
      <Image src={'/src10.png'} alt={'src10'} width={300} height={400} />
      <p>
        이 과정에서 메모리에 있는 데이터 소멸은 가비지 컬렉터(Garbage Collector)
        라는 녀석이 알아서 사용하지 않은 메모리를 소멸시켜줍니다.
      </p>
      <p>
        다음으로 새로운 컴포넌트가 마운트가 발생합니다.
        <br />
        쉽게 말해 소스코드를 위에서 아래로 실행하는 작업을 실행합니다.
      </p>
      <p>혹시 아까전에 보았던 소스코드를 기억하시나요?</p>
      <CodeBlock
        code={'const [todoList, setTodoList] = useState<string[]>([])'}
        language={'tsx'}
      />
      <p>마운트가 되면 이 소스코드도 다시 실행이 되겠죠?</p>
      <p>
        그렇게 되면 메모리에 다시 todoList라는 이름의 주소가 새로운 데이터가
        할당 됩니다.
        <br />
        이는 기존이랑 다른 주소에 할당이 될것입니다.
      </p>
      <p>
        그리고 위에 실행하는 녀석은 빈배열이죠?
        <br />
        그렇다면 메모리에 todoList라는 녀석의 주소는 0x123123(random)이 되며
        값은 빈 배열을 가지게 됩니다.
      </p>
      <p>이를 그림으로 보자면 아래와 같은 그림이 되겠지요.</p>
      <Image src={'/src11.png'} alt={'src11'} width={300} height={400} />
      <p>다음으로 이를 기반으로 map을 돌면서 브라우저에 데이터를 표현합니다.</p>
      <CodeBlock code={code8} language={'tsx'} />
      <p>
        현재 todoList의 메모리에는 무슨 값을 가지고 있나요?
        <br />
        빈 배열을 가지고 있습니다.
        <br />
        그렇기 때문에 브라우저는 빈값이 보이게 되는거죠.
      </p>
      <Image src={'/src12.png'} alt={'src12'} width={800} height={400} />
      <p>그림으로 보면 위와 같습니다.</p>
      <p>흠.. 그러면 메모리에 초기 데이터는 어떻게 로드가 될까요?</p>
      <p>제가 알기로는 크게 2가지 방식이 있습니다.</p>
      <p>
        첫번째로는 저장장치(storage)에서 데이터를 cpu가 메모리에 끌어올리는 방법
      </p>
      <p>
        두번째로는 웹 브라우저에서 네트워크 차원으로 데이터를 받아 또한 cpu가
        메모리에 끌어올리는 방법입니다.
      </p>
      <p>
        하지만 두 방법은 사실 뿌리가 같습니다.
        <br />
        동일하게 저장장치에서 데이터를 꺼내어 네트워크로 보내서 바로 렌더를
        하면,
        <br />
        이 방법이 서버에서 html 문서를 가져오는 방법이 되며,
        <br />내 컴퓨터에 있는 html 문서를 열게 된다면 저장장치에서 바로 꺼내어
        메모리에 등록이 되며 이를 기반으로 브라우저에 랜더가 됩니다.
      </p>
      <Image src={'/src13.png'} alt={'src13'} width={800} height={400} />
      <Image src={'/src14.png'} alt={'src14'} width={800} height={400} />
      <p>
        위 그림이 정확한 설명은 아니겠지만 대략적인 흐름을 이해하는데 도움이
        되었으면 합니다.
      </p>
      <p>
        정리하자면 메모리에 저장된 데이터로는 영속성(영구)이 없으며 이는
        프로그램이 실제로 돌아갈때 사용할 데이터들을 cpu가 사용하기 위한 말
        그대로 memory가 (잠시기억) 일시적으로 저장하는 것 으로 이해하면
        되겠습니다.
      </p>
      <p>그렇다면 영구적으로 데이터를 저장할려면 어떻게 해야할까요?</p>
      <p>
        이는 다음으로 설명할 보조기억장치(storage(HDD, SSD))가 담당하게 됩니다.
      </p>
    </ContentSection>
  )
}

export default Page
