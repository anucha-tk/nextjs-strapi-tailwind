import React from 'react'

export const BlogPageHeader = () => {
  return (
    <section className="flex flex-col items-center self-stretch" id="blog_page_header">
      <article id="header_section" className="flex flex-col items-center gap-16 self-stretch px-24">
        <div className="flex flex-col items-center gap-8 self-stretch py-8" id="container">
          <div className="flex flex-col items-center gap-12 self-stretch" id="content">
            <div className="flex flex-col items-center gap-6" id="heading_and_support">
              <div
                className="flex flex-col items-center justify-center gap-3 self-stretch"
                id="heading_and_sub_heading"
              >
                <p className="font-semibold text-primary-600 dark:text-[#CECFD2]">About Us</p>
                <p className="text-5xl text-md-semibold font-semibold text-gray-900 dark:text-white">
                  About the company
                </p>
              </div>
              <p className="text-xl-normal text-gray-500">
                Learn more about the company and the team behind it.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article></article>
      <article></article>
    </section>
  )
}
