type Props = {
  text: string
}

export const Strong = ({ text }: Props) => {
  return <strong className='font-bold'>{text}</strong>
}
