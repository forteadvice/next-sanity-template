import { textImageSchema } from '../textImage/textImage.schema'
import { textSectionSchema } from '../textSection/textSection.schema'

// Prepped block-map ready to use in docs
export const defaultBlocks = mapBlocks([textImageSchema, textSectionSchema])

function mapBlocks(blockArray: Array<{ name: string; type: string }>) {
  return blockArray.map((block) => ({
    name: block.name,
    type: block.name,
  }))
}
