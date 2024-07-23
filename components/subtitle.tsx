import { LucideIcon } from 'lucide-react'

type Props = {
  subtitle: string
  icon?: LucideIcon
}

export const Subtitle = ({ subtitle, icon: Icon }: Props) => {
  return (
    <h3 className='text-2xl font-bold flex items-center gap-x-2'>
      {Icon && <Icon />}
      {subtitle}
    </h3>
  )
}
