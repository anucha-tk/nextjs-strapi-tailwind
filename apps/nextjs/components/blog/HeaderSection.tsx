import React from 'react'

export const HeaderSection = () => {
  return (
    <article id="header_section" className="flex flex-col items-center gap-16 self-stretch py-24">
      <div className="flex max-w-7xl flex-col items-start gap-8 self-stretch px-8" id="container">
        <div className="flex flex-col items-start gap-12 self-stretch" id="content">
          <div
            className="itmes flex max-w-3xl
               flex-col gap-6 self-stretch"
            id="heading_and_support"
          >
            <div
              className="flex flex-col items-start gap-3 self-stretch"
              id="heading_and_sup_heading "
            >
              <p className="text-md-semibold text-brand-secondary dark:text-brand-secondary-dark">
                Our blog
              </p>
              <p className="text-display-lg-medium">Resources and insights</p>
            </div>
            <p className="text-text text-xl-regular text-tertiary dark:text-tertiary-dark">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
