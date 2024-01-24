import Image from 'next/image'
import React from 'react'
import SvgIcon from '@/components/svg-icons'

export const FeaturedArticle = () => {
  return (
    <article
      id="featured_article"
      className="relative flex max-h-[720px] max-w-[1216px] flex-col items-start gap-spacing-7xl self-stretch"
    >
      <div
        className=" flex flex-1 flex-col items-start gap-8 self-stretch overflow-hidden rounded-2xl border border-gray-200"
        id="image"
      >
        <Image
          src={'/static/images/canada/neom.jpg'}
          alt="image"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            // maxHeight: '720px',
            objectFit: 'cover',
          }}
          priority
          width={500}
          height={300}
        />
      </div>
      <div
        className="absolute bottom-0 z-20 flex w-full flex-col content-center items-center self-stretch pt-spacing-9xl"
        id="button_panel"
      >
        <div
          className="flex flex-col items-start gap-spacing-4xl self-stretch p-spacing-4xl"
          id="attribution"
        >
          <div className="flex flex-col items-start gap-spacing-3xl self-stretch" id="container">
            <div
              className="flex flex-col items-start gap-spacing-md self-stretch"
              id="heading_and_text"
            >
              <div className="flex items-start gap-spacing-xl self-stretch" id="heading_and_icon">
                <p className="flex-1 text-display-xs-semibold text-white">
                  Improve your design skills: Develop an "eye" for design
                </p>
                <SvgIcon kind="arrowUpRight" href="/" size={8} strokColor="white" strokWidth={2} />
              </div>
              <p className="text-md-regular text-white">
                Tools and trends change, but good design is timeless. Learn how to quickly develop
                an "eye" for design.
              </p>
            </div>
            <div
              className="flex items-start gap-spacing-3xl self-stretch text-white"
              id="author_and_categories"
            >
              <div className="flex flex-1 items-start gap-spacing-4xl" id="autor">
                <div className="flex flex-col items-start gap-spacing-md" id="text_and_autor">
                  <p className="text-sm-semibold">Written by</p>
                  <div className="flex items-center gap-spacing-lg" id="avatar_label_group">
                    <div
                      className="flex h-10 w-10 content-center items-center rounded-full bg-primary-dark"
                      id="avatar"
                    >
                      <Image
                        src={'/static/images/Avatar_human.png'}
                        alt="image"
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-sm-semibold">Amélie Laurent</p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-spacing-md" id="publish_date">
                  <p className="text-sm-semibold">Published on</p>
                  <div className="flex h-[40px] items-center gap-spacing-md py-spacing-md">
                    <p className="text-md-semibold">10 April 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-spacing-md" id="text_and_date"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
