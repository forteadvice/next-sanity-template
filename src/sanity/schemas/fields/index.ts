import { baseImageSchema } from './baseImage/baseImage.schema'
import { flexibleLinkSchema } from './flexibleLink/flexibleLink.schema'
import { flexibleUrlSchema } from './flexibleUrl/flexibleUrl.schema'
import { portableTextSchema } from './portableText/portableText.schema'
import { portableTextSimpleSchema } from './portableTextSimple/portableTextSimple.schema'
import { headlineSchema } from './headline/headline.schema'
import { manchetSchema } from './manchet/manchet.schema'

export const fields = [
  baseImageSchema,
  flexibleUrlSchema,
  flexibleLinkSchema,
  portableTextSchema,
  portableTextSimpleSchema,
  headlineSchema,
  manchetSchema,
]
