import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const GenMarkDown = ({ data, className }: { data: string; className?: string }) => {
  // eslint-disable-next-line react/no-children-prop
  return <Markdown children={data} remarkPlugins={[remarkGfm]} className={className} />
}
