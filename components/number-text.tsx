type Props = {
  num: number
  text: string
}

export const NumberText = ({ num, text }: Props) => {
  return (
    <div className='font-semibold text-xl'>
      {num}. {text}
    </div>
  )
}
