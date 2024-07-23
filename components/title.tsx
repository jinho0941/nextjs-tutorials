type Props = {
  title: string
}

export const Title = ({ title }: Props) => {
  return (
    <h1 className='text-3xl font-bold border-b dark:border-white pb-2'>
      {title}
    </h1>
  )
}
