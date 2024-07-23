type Props = {
  children: React.ReactNode
}

export const Strong = ({ children }: Props) => {
  return <strong className='font-bold'>{children}</strong>
}
