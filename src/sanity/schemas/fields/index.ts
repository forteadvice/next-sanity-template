import { baseImageSchema } from './baseImage/baseImage.schema'
import { flexibleLinkSchema } from './flexibleLink/flexibleLink.schema'
import { flexibleRefsSchema } from './flexibleRefs/flexibleRefs.schema'
import { portableTextSchema } from './portableText/portableText.schema'
import { portableTextSimpleSchema } from './portableText/portableTextSimple.schema'
import { headlineSchema } from './headline/headline.schema'
import { manchetSchema } from './manchet/manchet.schema'

export const fields = [
  baseImageSchema,
  flexibleLinkSchema,
  flexibleRefsSchema,
  portableTextSchema,
  portableTextSimpleSchema,
  headlineSchema,
  manchetSchema,
]
