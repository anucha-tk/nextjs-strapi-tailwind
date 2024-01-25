import React from 'react'

export const HeaderSection = () => {
  return (
    <article
      id="header_section"
      className="flex flex-col items-center gap-16 self-stretch py-spacing-7xl sm:py-24"
    >
      <div
        className="flex max-w-7xl flex-col items-start gap-8 self-stretch px-4 sm:px-8"
        id="container"
      >
        <div
          className="flex flex-1 flex-col items-start gap-spacing-4xl self-stretch sm:flex-none sm:gap-12"
          id="content"
        >
          <div
            className="itmes flex max-w-3xl
               flex-col gap-spacing-xl self-stretch sm:gap-6"
            id="heading_and_support"
          >
            <div
              className="flex flex-col items-start gap-3 self-stretch"
              id="heading_and_sup_heading "
            >
              <p className="text-sm-semibold text-brand-secondary dark:text-brand-secondary-dark sm:text-md-semibold">
                Our blog
              </p>
              <p className="text-display-md-semibold sm:text-display-lg-medium">
                Resources and insights
              </p>
            </div>
            <p className="text-text text-lg-regular text-tertiary dark:text-tertiary-dark sm:text-xl-regular">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
