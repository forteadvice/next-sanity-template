import * as Blocks from '../sections'

export default function ContentBlocks({ blocks }) {
  return (
    <>
      {blocks.map((block, idx) => {
        const Block = resolveBlocks(block)
        if (!Block) {
          return <div key={block._key}>Missing block: {upperFirst(block._type)}</div>
        }
        return <Block data={block} blockIdx={idx} key={block._key} />
      })}
    </>
  )
}

function resolveBlocks(block) {
  const Block = Blocks[upperFirst(block._type)]
  if (Block) return Block
  console.error('Cant find block', upperFirst(block._type))
  return null
}

function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
