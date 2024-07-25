type Props = {
  num: number
  text: string
}

export const NumberText = ({ num, text }: Props) => {
  return (
    <div className='font-semibold md:text-xl text-lg'>
      {num}. {text}
    </div>
  )
}
