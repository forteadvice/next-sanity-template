import { baseImageSchema } from './baseImage'
import { flexibleLinkSchema } from './flexibleLink'
import { flexibleUrlSchema } from './flexibleUrl'
import { portableTextSchema } from './portableText'
import { portableTextSimpleSchema } from './portableTextSimple'

export const fields = [
  baseImageSchema,
  flexibleUrlSchema,
  flexibleLinkSchema,
  portableTextSchema,
  portableTextSimpleSchema,
]
