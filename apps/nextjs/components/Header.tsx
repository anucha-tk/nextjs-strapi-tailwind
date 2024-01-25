import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'

const Header = () => {
  return (
    <header id="header_navigation" className="h-[72px] items-stretch md:h-20">
      <div className="flex h-full flex-shrink-0 flex-col items-center justify-center" id="header">
        <div className="flex w-full items-center justify-between px-8" id="container">
          <div className="flex items-center gap-10" id="content">
            <Link
              href="/"
              aria-label={siteMetadata.headerTitle}
              className="flex content-center items-center gap-2.5"
            >
              <Image
                src="/static/images/icons8-b-100.png"
                width={32}
                height={32}
                alt="logo"
                priority={true}
              />
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="text-center text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </Link>
            <div className="flex items-center gap-8" id="navigation">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hidden font-medium text-gray-500 dark:text-gray-100 sm:block"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-3" id="navigation_action">
            <ThemeSwitch />
            <button className="hidden content-center items-center gap-2 rounded-lg bg-[#7f56d9] px-4 py-2.5 text-white sm:flex">
              Contect Me
            </button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
