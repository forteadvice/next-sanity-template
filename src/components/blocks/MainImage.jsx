import SanityImage from '../SanityImage'

export default function MainImage({ data }) {
  return <SanityImage imageObj={data} width={500} heightRatio={1} sizes={'100vw'} />
}
