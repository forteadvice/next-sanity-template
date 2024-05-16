type Props = {
  autoPlay: boolean
  setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Play button for Carousel that appears on focus within
 */
export default function CarouselPlayButton({ autoPlay, setAutoPlay }: Props) {
  return (
    <button
      aria-label={autoPlay ? 'Stop automatic slide show' : 'Stop automatic slide show'}
      onClick={() => setAutoPlay(!autoPlay)}
      className='opacity-0 pointer-events-none focus-within:opacity-100 focus-within:pointer-events-auto absolute top-10 left-10 z-10 bg-white px-2'
    >
      {autoPlay ? 'Pause' : 'Play'}
    </button>
  )
}
