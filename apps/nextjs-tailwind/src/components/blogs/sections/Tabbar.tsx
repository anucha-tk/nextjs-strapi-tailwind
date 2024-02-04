'use client'
import { Tag } from '@repo/types/src/tag'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react'

export default function Tabbar({ tags }: { tags: Tag[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className={'flex justify-between gap-spacing-xl'}>
        <Tab
          className={
            'text-md-semibold text-quaternary ui-selected:text-brand-700 dark:text-quaternary-dark'
          }
        >
          View all
        </Tab>
        {tags.map((e, i) => (
          <Tab key={i} className={'text-md-semibold text-quaternary ui-selected:text-brand-700'}>
            {e.attributes?.name}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  )
}
