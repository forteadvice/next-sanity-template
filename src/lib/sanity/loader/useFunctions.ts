import { type QueryResponseInitial } from '@sanity/react-loader'

// import { useQuery } from './useQuery'
import { useQuery } from '@sanity/react-loader'
import { frontpageQuery } from '../queries/frontpageQuery'

export function useFrontpage(initial: QueryResponseInitial<any>) {
  console.log(initial)
  return useQuery<any>(frontpageQuery, {}, { initial })
}
