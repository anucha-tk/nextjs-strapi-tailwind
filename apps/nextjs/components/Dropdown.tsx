import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const DropdownMenu = ({ title }: { title: string }) => {
  return (
    <Menu.Item>
      {() => <button className="text-md-regular hover:bg-primary-dark">{title}</button>}
    </Menu.Item>
  )
}

export default function Dropdown() {
  const menus = ['Most recent', 'All']
  return (
    <section id="dropdown" className="flex self-stretch">
      <div className="top-16 flex w-full justify-center self-stretch text-right">
        <Menu as="div" className="relative inline-block w-full self-stretch text-left">
          <div>
            <Menu.Button className="flex w-full justify-between gap-spacing-md self-stretch rounded-lg border px-3.5 py-2.5 text-md-medium">
              Options
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute flex w-full flex-col gap-spacing-md border py-4">
              <div className="flex flex-col gap-spacing-lg">
                {menus.map((e, i) => (
                  <DropdownMenu key={i} title={e} />
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </section>
  )
}
