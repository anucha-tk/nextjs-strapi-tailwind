import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const MarkDown = ({ data }: { data: string }) => {
  // eslint-disable-next-line react/no-children-prop
  return <Markdown children={data} remarkPlugins={[remarkGfm]} />
}
