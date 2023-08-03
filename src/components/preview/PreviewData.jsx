'use client'

import { Slot } from '@radix-ui/react-slot'
import { useLiveQuery } from '@sanity/preview-kit'

export default function PreviewData(props) {
  const { initialData, query, params = {}, ...rest } = props
  const [data] = useLiveQuery(initialData, query, params)
  const previewProps = { ...rest, data }

  return <Slot {...previewProps} />
}
