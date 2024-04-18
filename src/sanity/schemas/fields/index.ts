import { baseImageSchema } from './baseImage/baseImage.schema'
import { flexibleLinkSchema } from './flexibleLink/flexibleLink.schema'
import { flexibleUrlSchema } from './flexibleUrl/flexibleUrl.schema'
import { portableTextSchema } from './portableText/portableText.schema'
import { portableTextSimpleSchema } from './portableTextSimple/portableTextSimple.schema'

export const fields = [
  baseImageSchema,
  flexibleUrlSchema,
  flexibleLinkSchema,
  portableTextSchema,
  portableTextSimpleSchema,
]
