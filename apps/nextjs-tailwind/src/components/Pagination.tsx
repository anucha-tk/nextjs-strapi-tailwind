'use client';
import { Pagination } from '@repo/types/src/response';
import React from 'react';
import Button from './buttons/Button';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Pagination({ pagination }: { pagination: Pagination }) {
  const router = useRouter();
  const start =
    pagination.page === 1
      ? '1'
      : `${(pagination.page - 1) * pagination.pageSize}`;
  const curr = pagination.page * pagination.pageSize;
  const end = curr > pagination.total ? pagination.total : curr + '';

  return (
    <div
      id='pagination'
      className='flex items-center gap-spacing-md self-stretch border-t border-t-[#EAECF0] pt-spacing-xl sm:gap-spacing-2xl sm:pt-spacing-2xl'
    >
      <Button
        leftIcon={ArrowLeft}
        disabled={pagination.page === 1}
        onClick={() => router.push(`/?page=${pagination.page - 1}`)}
        className={
          'flex items-center justify-center hover:text-primary gap-spacing-md rounded-md border border-[D0D5DD] p-spacing-md text-fg-tertiary shadow-sm dark:text-fg-tertiary-dark sm:flex-1 sm:justify-start sm:gap-spacing-sm sm:border-none sm:p-spacing-none sm:pr-2 sm:shadow-none'
        }
      >
        Prevoius
      </Button>
      <p
        id='paginate_number'
        className='items-start text-sm-regular text-fg-tertiary dark:text-fg-tertiary-dark sm:flex sm:gap-spacing-xxs'
      >
        Page {start} of {end}
      </p>
      <Button
        rightIcon={ArrowRight}
        disabled={pagination.page >= pagination.pageCount}
        onClick={() => router.push(`/?page=${pagination.page + 1}`)}
        className={
          'flex items-center justify-center hover:text-primary gap-spacing-md rounded-md border border-[D0D5DD] p-spacing-md text-fg-tertiary shadow-sm dark:text-fg-tertiary-dark sm:flex-1 sm:justify-end sm:gap-spacing-sm sm:border-none sm:p-spacing-none sm:pr-2 sm:shadow-none'
        }
      >
        Next
      </Button>
    </div>
  );
}
