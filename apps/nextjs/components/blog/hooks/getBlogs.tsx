import { useQuery } from '@tanstack/react-query'
import { getBlogs } from 'services/api/services/blog'
import { ENUM_QUERY_KEY } from 'services/react-query/constants/query.constants'

const useGetBlogs = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [ENUM_QUERY_KEY.BLOGS],
    queryFn: getBlogs,
  })
  return { data, isError, isLoading }
}

export default useGetBlogs
