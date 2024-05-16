'use client'

import type { TCarouselSlide } from './Carousel.Slide'
import CarouselPlayButton from './Carousel.PlayButton'

import { useState, useId } from 'react'
import CarouselSlide from './Carousel.Slide'

type Props = {
  /** Provides a label that describes the purpose of the set of carousel. */
  ariaLabel: string
  /** Array of slides / carousel objects */
  slides?: TCarouselSlide[]
}

export default function Carousel({ ariaLabel, slides }: Props) {
  const [autoPlay, setAutoPlay] = useState(true)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [leftIdx, setLeftIdx] = useState(slides ? slides?.length - 1 : undefined)
  const [rightIdx, setRightIdx] = useState(slides ? 1 : undefined)
  const [tranformerNr, setTransformerNr] = useState(0)
  const [counrterTranformerNr, setCounterTransformerNr] = useState(0)

  if (!slides) return

  // Generate unique identifiers
  const id = useId()
  const carouselItemsId = `carouselItems${id}`

  const lastSlideIndex = slides.length - 1
  // const firstSlide = { ...slides[0] }
  // const lastSlide = { ...slides[lastSlideIndex] }

  function moveLeft() {
    const newCurrentIdx = currentIdx == 0 ? lastSlideIndex : currentIdx - 1
    setCurrentIdx(newCurrentIdx)
    setTransformerNr(tranformerNr + 1)
    setCounterTransformerNr(counrterTranformerNr - 1)
    setRightIdx(newCurrentIdx + 1)
  }
  function moveRight() {
    const newCurrentIdx = currentIdx == lastSlideIndex ? 0 : currentIdx + 1
    setCurrentIdx(newCurrentIdx)
    setCounterTransformerNr(counrterTranformerNr + 1)
    setTransformerNr(tranformerNr - 1)
    setLeftIdx(newCurrentIdx - 1)
  }

  return (
    <div
      aria-roledescription='carousel'
      aria-label={ariaLabel}
      className='w-full rounded-3xl overflow-hidden relative'
    >
      <div>
        <CarouselPlayButton autoPlay={autoPlay} setAutoPlay={setAutoPlay} />

        <button
          className='absolute top-1/2 left-5 -translate-y-1/2 z-10 bg-white bg-opacity-75 w-10 h-10 rounded-full'
          aria-controls={carouselItemsId}
          aria-label='Previous Slide'
          onClick={moveLeft}
        >
          {'<-'}
        </button>

        <div>
          <div
            id={carouselItemsId}
            aria-live={autoPlay ? 'off' : 'polite'}
            className='relative transition-transform duration-700 transform-gpu h-0 pb-[66.5%]'
            style={{
              transform: `translateX(${tranformerNr * 100}%`,
            }}
          >
            {/* <div className='flex-1'>
              <CarouselSlide {...lastSlide} active={false} />
            </div> */}

            {slides?.map((slide, idx) => {
              return (
                <div
                  key={`${idx}${id}`}
                  role='group'
                  aria-roledescription='slide'
                  aria-label={`${idx + 1} of ${slides.length}`}
                  style={{ transform: `` }}
                >
                  <CarouselSlide {...slide} active={currentIdx === idx} />
                </div>
              )
            })}

            {/* <div aria-hidden tabIndex={-1} className='flex-1'>
              <CarouselSlide {...firstSlide} active={false} />
            </div> */}
          </div>
        </div>

        <button
          className='absolute top-1/2 right-5 -translate-y-1/2 z-10 bg-white bg-opacity-75 w-10 h-10 rounded-full'
          aria-controls={carouselItemsId}
          aria-label='Next Slide'
          onClick={moveRight}
        >
          {'->'}
        </button>
      </div>
    </div>
  )
}
