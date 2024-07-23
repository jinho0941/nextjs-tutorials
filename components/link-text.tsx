type Props = {
  href: string
  text: string
}

export const LinkText = ({ href, text }: Props) => {
  return (
    <a
      href={href}
      target='_blank'
      className='ml-1 font-bold underline text-sky-500'
    >
      {text}
    </a>
  )
}
