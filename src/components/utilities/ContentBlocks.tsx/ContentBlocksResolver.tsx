import * as Blocks from './ContentBlocks'
import { upperFirst } from '@/lib/toUpperFirst'
import type {
  TContentBlock,
  TContentBlocks,
} from '@/sanity/schemas/objects/contentBlocks/contentBlocks.props'

type Props = {
  contentBlocks: TContentBlocks
}

export default function ContentBlocksResolver({ contentBlocks }: Props) {
  return (
    <>
      {contentBlocks.map((block) => {
        const Block = resolveBlocks(block)
        if (!Block) {
          return <div key={block._key}>Missing block: {upperFirst(block._type)}</div>
        }
        return <Block {...block} key={block._key} />
      })}
    </>
  )
}

type TBlockModule = typeof Blocks & Record<string, React.ComponentType<TContentBlock>>

function resolveBlocks(block: TContentBlock) {
  const blockName = upperFirst(block._type)
  const Block = (Blocks as TBlockModule)[blockName]
  
  if (Block) return Block
  console.error('Cant find block', upperFirst(block._type))
  return null
}
