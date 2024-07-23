import { CodeBlock } from '@/components/code-block'
import { ContentSection } from '@/components/content-section'
import { NextButton } from '@/components/next-button'
import { NumberText } from '@/components/number-text'
import { PrevButton } from '@/components/prev-button'
import { Strong } from '@/components/strong'
import { Title } from '@/components/title'
import { routes } from '@/constant'
import Image from 'next/image'
import { Exam } from './_components/exam'

const code = `export const Exam = () => {
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
`
const code1 = `<span>저장된 데이터는: {savedData}</span>`
const code2 = `const [savedData, setSaveData] = useState(localStorage.getItem('data'))`
const code3 = `  const saveData = () => {
    localStorage.setItem('data', data)
    setSaveData(data)
    toast.success('데이터가 성공적으로 저장되었습니다.')
  }`

const Page = () => {
  return (
    <ContentSection>
      <Title title={'보조기억장치(Storage)'} />

      <p>
        이전 글에서 다루었던 memory는 프로그램이 실행되는 동안에 데이터를 저장을
        하고, <br /> 해당 프로그램이 종료되거나 해당 데이터를 프로그램에서
        메모리에서 제거하면 사라지는 특성을 가지고 있었습니다.
      </p>

      <p>
        핵심은 데이터가 휘발성을 가지고 있어서 프로그램을 계속 켜 두지 않는 이상
        영구적으로 영구적으로 존재하지 않는다는 것입니다.
      </p>
      <p>
        이전 글에서 잠시나마 언급했던 부분이지만 삭제를 하지않는한, <br />
        프로그램이 꺼져도, 컴퓨터가 꺼지더라도 영구적으로 데이터를 저장해주는{' '}
        <Strong text={'Storage'} /> 에 대해서 어떻게 작동하는지 알아봅니다.
      </p>
      <Image src={'/img5.jpg'} alt={'img5'} width={600} height={400} />
      <p>
        storage 흔히 익숙한 이미지는 Hard Disk 일것입니다.
        <br />
        요즘은 ssd 가격이 많이 내려가서 ssd가 더 익숙할수도 있을거 같내요.
      </p>
      <p>
        hdd나 ssd 는 둘다 storage 입니다.
        <br />
        둘의 공통점은 전력 공급이 중단이 되어도 데이터를 유지시켜준다는 것이죠.
      </p>
      <p>
        이 특성 때문에 컴퓨터가 종료되어 전력공급이 중단되어도 데이터가 남아있게
        됩니다.
      </p>
      <p className='text-muted-foreground'>
        반면에 메모리는 전력공급이 중단되면 데이터가 전부 사라지죠.
      </p>
      <p>
        그렇다고 한다면 방금 예제에서 영구적으로 데이터를 저장할려면 어떻게
        해야할까요?
      </p>

      <Image src={'/src2.png'} alt={'src2'} width={500} height={200} />

      <p>정답은 이번 챕터에서 설명드릴 storage에 저장하는 것입니다.</p>
      <p>
        서버에 저장을 하던, 데이터베이스에 저장을 하던 궁극적으로 storage에
        저장된다는것은 변함이없습니다.
        <br />
        단지 네트워크로 해당 storage에 저장된 데이터를 가져오는것인가 혹은
        storage에 저장된 최적화된 DB.file에서 데이터를 가져오는 것이냐 차이일
        뿐입니다.
      </p>

      <p>
        그렇다고 한다면 어떻게 storage에 데이터를 저장할까요?
        <br />
        또한 그 데이터는 어떻게 다시 가져올까요?
        <br />
        저장된 데이터는 어떻게 ui에 다시 반영을 할까요?
      </p>

      <p>이부분도 설명과 예제로 이해해 봅시다.</p>

      <NumberText num={1} text={'어떻게 storage에 데이터를 저장할까요?'} />
      <Image src={'/img6.jpg'} alt={'img5'} width={600} height={400} />
      <p>
        이부분은 사실 os가 담당하는 영역입니다.
        <br />
        예전에 컴퓨터가 나온지 얼마되지 않은 시절에는 데이터를 들고오고 메모리에
        등록한뒤,
        <br />
        저장장치에 넣고 하는 로직을 전부 작성한 상태로 프로그램을 작성하였다고
        합니다.
      </p>
      <p>
        하나의 software 프로그램을 작성하기위해 hardware를 제어하는 로직을 전부
        작성을 해야했죠.
      </p>
      <p>
        제가 이 말을 하는 이유는 storage(hard disk) 에 데이터를 저장하는 행위가
        hardware를 제어하는 os에서 담당하는 영역이기 때문입니다.
      </p>
      <p>그리고 os는 hardware를 제어할수있는 추상화된 api를 제공해주죠.</p>
      <p>
        보통 window를 많이쓰니 window 에서 hardware관련 작업을 할려면 window
        api를 사용하면됩니다.
        <br />
        프로그래밍 언어에서 라이브러리로 제공해주기 때문에 직접 사용할일은 거의
        없죠.
      </p>
      <p>
        그렇다면 다시 돌아가서 데이터를 저장할려면 javascript에서 제공해주는
        window api를 사용하여 hardware에 저장한 뒤,
        <br />
        다시 api를 이용하여 데이터를 가져오면 될까요?
      </p>

      <p>
        음.. 반은 맞고 반은 틀렸다가 답변이 되겠내요.
        <br />
        node 환경이라면 몰라도 browser위에서 돌아가는 javascript는 os api를 사용
        못합니다.
      </p>

      <p>
        이게 무슨 말인지 알려면 node환경이랑 browser가 어떤 차이가 있는지
        알아야합니다.
        <br />이 부분도 핵심이긴하지만 지금 설명하기에는 너무 길어질거 같으니
        일단 browser에서는 직접적으로 저장을 못한다는 것만 알고 넘어갑시다.
      </p>

      <p>
        대신 browser에서 데이터를 저장할수있게 몇개 제공해주는 옵션들이
        있습니다.
      </p>
      <p>
        그것이 많이 들어보셧을 localStorage, sessionStorage, cookies 입니다.
        <br />
        간접적으로 storage에 저장을 할수있는 녀석들이죠.
      </p>
      <p>
        그러고 보니 이름도 storage가 붙내요. 이름에서 역할을 유추 할수 있죠?
      </p>

      <p>
        그럼 전체적으로 어떻게 작업이 진행되는지 그림으로 먼저 보고 다음으로
        코드에서 구현이 어떻게 되는지 보면서 흐름을 이해해 봅시다.
        <br />
        이번 예시에서는 localStorage를 사용합니다.
      </p>

      <p>아래 예시를 사용해볼까요?</p>
      <Exam />
      <p>
        저장하기 버튼을 누르면 데이터가 생성이 되고.
        <br />
        해당 데이터는 새로고침을 해도 사라지지가 않습니다.
      </p>
      <p>
        하지만 삭제하기 버튼을 누르면 사라지고 새로고침을 하면 데이터가 사라지게
        됩니다.
      </p>
      <p>구현 코드는 아래와 같습니다.</p>
      <CodeBlock code={code} />
      <p>
        전부를 설명하기에는 글이 너무 길어지니 간단하게 흐름을 설명하겠습니다.
      </p>
      <CodeBlock code={code1} language='html' />
      <p>이 부분이 저장된 데이터를 불러오는 부분입니다.</p>
      <CodeBlock code={code2} />
      <p>
        해당 데이터는 이렇게 localStorage에 저장된 data라는 녀셕을
        불러오고있습니다.
        <br />
        저장하기 누르기 전에는 해당 데이터가 저장이 안되어 있으니 존재하지
        않겠죠?
      </p>
      <p>그렇다면 어떻게 값을 storage에 저장하는지 보겠습니다.</p>
      <CodeBlock code={code3} />
      <p>
        localStorage.setItem 이라는 method를 사용해서 값을 저장합니다.
        <br />
        <span className='text-muted-foreground'>
          set.. toast.. 는 ui 업데이트와 알림기능이라 크게 신경안쓰셔도 됩니다.
        </span>
      </p>
      <p>
        이렇게 되면 storage에 data라는 key값의 value가 '저장 데이터'로 저장이
        됩니다.
      </p>
      <p>이 상태에서 새로고침을 하면</p>
      <CodeBlock code={code2} />
      <p>다시 이 부분이 실행이 되고</p>
      <p>이제는 'data'의 값이 존재하니 저장 데이터가 savedData에 할당되며</p>
      <CodeBlock code={code1} language='html' />
      <p>저장된 데이터는: 저장 데이터</p>
      <p>이렇게 저장된 데이터를 볼수있게 됩니다.</p>
      <p>
        이처럼 storage는 데이터를 삭제하기 전까지는 유지된다는 특징으로,
        <br />
        저장되는 데이터는 storage에 저장을 하고 불러온다 라는 흐름을 이해하시면
        되겠습니다.
      </p>
    </ContentSection>
  )
}

export default Page
