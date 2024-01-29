import SvgIcon from '@/components/svg-icons'
import { Pagination } from '@repo/types/src/response'
import React, { Dispatch, SetStateAction } from 'react'

export default function Pagination({
  pagination,
  page,
  setPage,
}: {
  pagination: Pagination
  page: number
  setPage: Dispatch<SetStateAction<number>>
}) {
  const start = pagination.page === 1 ? '1' : `${(pagination.page - 1) * pagination.pageSize}`
  const end = `${pagination.page * pagination.pageSize}`

  function backHandle() {
    setPage(page - 1)
  }
  function nextHandle() {
    setPage(page + 1)
  }

  return (
    <div
      id="pagination"
      className="flex items-center gap-spacing-md self-stretch border-t border-t-[#EAECF0] pt-spacing-xl sm:gap-spacing-2xl sm:pt-spacing-2xl"
    >
      <button
        id="botton_wrap_left"
        className="flex items-center justify-center gap-spacing-md rounded-md border border-[D0D5DD] p-spacing-md shadow-sm sm:flex-1 sm:justify-normal sm:gap-spacing-sm sm:border-none sm:p-spacing-none sm:pl-2 sm:shadow-none"
        onClick={() => backHandle()}
      >
        <SvgIcon kind="arrowLeft" />
        <p className="hidden text-sm-semibold text-fg-tertiary dark:text-fg-tertiary-dark sm:block">
          Prevoius
        </p>
      </button>
      <p
        id="paginate_number"
        className="items-start text-sm-regular text-fg-tertiary dark:text-fg-tertiary-dark sm:flex sm:gap-spacing-xxs"
      >
        Page {start} of {end}
      </p>
      <button
        id="botton_wrap_right"
        className="flex items-center justify-center gap-spacing-md rounded-md border border-[D0D5DD] p-spacing-md text-fg-tertiary shadow-sm dark:text-fg-tertiary-dark sm:flex-1 sm:justify-end sm:gap-spacing-sm sm:border-none sm:p-spacing-none sm:pr-2 sm:shadow-none"
        onClick={() => nextHandle()}
      >
        <p className="hidden text-sm-semibold text-fg-tertiary dark:text-fg-tertiary-dark sm:block">
          Next
        </p>
        <SvgIcon kind="arrowRight" />
      </button>
    </div>
  )
}
