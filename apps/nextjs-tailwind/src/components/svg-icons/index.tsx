import { ArrowLeft, ArrowRight, ArrowUpRight } from './icon'

const components = {
  arrowUpRight: ArrowUpRight,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
}

type SvgIconProps = {
  kind: keyof typeof components
  href?: string | undefined
  size?: number
  className?: string
}

const SvgIcon = ({ kind, href, size = 8, className }: SvgIconProps) => {
  const SocialSvg = components[kind]

  return (
    <a className={`text-sm transition ${className}`} rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current h-${size} w-${size}`}
      />
    </a>
  )
}

export default SvgIcon
