import { ArrowUpRight } from './icon'

const components = {
  arrowUpRight: ArrowUpRight,
}

type SvgIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
  color?: string
  strokColor?: string
  strokWidth?: number
}
const SvgIcon = ({
  kind,
  href,
  size = 8,
  color = 'white',
  strokColor,
  strokWidth,
}: SvgIconProps) => {
  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-${color} h-${size} w-${size} stroke-${strokColor} stroke-${strokWidth}`}
      />
    </a>
  )
}

export default SvgIcon
