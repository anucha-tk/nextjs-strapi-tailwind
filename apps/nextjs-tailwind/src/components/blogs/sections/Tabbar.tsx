'use client';

import { Tag } from '@repo/types/src/tag';
import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

export default function Tabbar({ tags }: { tags: Tag[] }) {
  const params = useSearchParams();
  const qs = params.get('filter[tag]');

  return (
    <Tabs aria-label='Options' fullWidth selectedKey={qs === null ? 'all' : qs}>
      <Tab
        key={'all'}
        title={'View All'}
        href={`/?page=1`}
        className='text-md-semibold text-quaternary ui-selected:text-brand-700 dark:text-quaternary-dark'
      />
      {tags.map((tag) => (
        <Tab
          href={`/?page=1&filter[tag]=${tag.attributes?.name}`}
          key={tag.attributes?.name}
          title={tag.attributes?.name}
          className='text-md-semibold text-quaternary ui-selected:text-brand-700 dark:text-quaternary-dark'
        />
      ))}
    </Tabs>
  );
}
