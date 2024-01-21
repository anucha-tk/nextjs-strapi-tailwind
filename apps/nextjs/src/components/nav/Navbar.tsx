'use client';
import ThemeChanger from './DarkSwitch';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import UnstyledLink from '../links/UnstyledLink';

const Navbar = () => {
  const navigation = [{ name: 'Blogs', link: '/blog' }];

  return (
    <div className='w-full'>
      <nav className='container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex w-full flex-wrap items-center justify-between lg:w-auto'>
                <UnstyledLink href='/'>
                  <span className='flex items-center space-x-2 text-2xl font-medium'>
                    <span>
                      <Image
                        src='/images/logo.svg'
                        alt='N'
                        width='50'
                        height='50'
                        className='w-12'
                      />
                    </span>
                    <span>BlogApp</span>
                  </span>
                </UnstyledLink>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='dark:focus:bg-trueGray-700 ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none lg:hidden dark:text-gray-300'
                >
                  <svg
                    className='h-6 w-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='my-5 flex w-full flex-wrap lg:hidden'>
                  <>
                    {navigation.map((item, index) => (
                      <UnstyledLink
                        key={index}
                        href={item.link}
                        className='-ml-4 w-full rounded-md px-4 py-2'
                      >
                        {item.name}
                      </UnstyledLink>
                    ))}
                    <UnstyledLink
                      href='/'
                      className='mt-3 w-full rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5'
                    >
                      Get Started
                    </UnstyledLink>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0'>
            {navigation.map((menu, index) => (
              <li className='nav__item mr-3' key={index}>
                <UnstyledLink
                  href={menu.link}
                  className='inline-block rounded-md px-4 py-2 text-lg font-normal no-underline'
                >
                  {menu.name}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='nav__item mr-3 hidden space-x-4 lg:flex'>
          <UnstyledLink
            href='#'
            className='rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-5'
          >
            Get Contact
          </UnstyledLink>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
