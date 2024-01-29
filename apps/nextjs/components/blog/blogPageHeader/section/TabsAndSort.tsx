'use client'
import Tabbar from './Tabbar'
import { useQuery } from '@tanstack/react-query'
import { getTags } from 'services/api/services/tag'
import { ENUM_QUERY_KEY } from 'services/react-query/constants/query.constants'

export const TabsAndSort = () => {
  const { data } = useQuery({
    queryKey: [ENUM_QUERY_KEY.TAGS],
    queryFn: () => getTags(),
  })
  const tags = data?.data.slice(0, 3) ?? []

  // FIX: tab active not working?
  return (
    <article
      id="tabs_and_sort"
      className="container mx-auto flex flex-col justify-center gap-spacing-4xl self-stretch"
    >
      <div id="herdizontal_tabs" className="flex flex-col justify-center">
        <Tabbar tags={tags} />
      </div>
    </article>
  )
}
