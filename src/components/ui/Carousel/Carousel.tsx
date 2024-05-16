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

type TSlideStore = {
  transformNr: number
  currentIdx: number
  previousIdx: number
  direction: 'left' | 'right'
}

export default function Carousel({ ariaLabel, slides }: Props) {
  const [autoPlay, setAutoPlay] = useState(true)
  const [slideStore, setSlideStore] = useState<TSlideStore>({
    transformNr: 0,
    currentIdx: 0,
    previousIdx: 0,
    direction: 'right',
  })
  const [disableButtons, setDisableButtons] = useState(false)

  if (!slides) return

  // Generate unique identifiers
  const id = useId()
  const carouselItemsId = `carouselItems${id}`

  const maxSlideIndex = slides.length - 1

  function moveLeft() {
    if (!slides || disableButtons) return
    setSlideStore({
      transformNr: slideStore.transformNr + 1,
      previousIdx: slideStore.currentIdx,
      currentIdx: slideStore.currentIdx == 0 ? maxSlideIndex : slideStore.currentIdx - 1,
      direction: 'left',
    })
    pauseButtonActions()
  }

  function moveRight() {
    if (!slides || disableButtons) return
    setSlideStore({
      transformNr: slideStore.transformNr - 1,
      previousIdx: slideStore.currentIdx,
      currentIdx: slideStore.currentIdx == maxSlideIndex ? 0 : slideStore.currentIdx + 1,
      direction: 'right',
    })
    pauseButtonActions()
  }

  function pauseButtonActions() {
    setDisableButtons(true)
    setTimeout(() => {
      setDisableButtons(false)
    }, 700)
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
              transform: `translateX(${slideStore.transformNr * 100}%`,
            }}
          >
            {slides?.map((slide, idx) => {
              return (
                <div
                  key={`${idx}${id}`}
                  role='group'
                  aria-roledescription='slide'
                  aria-label={`${idx + 1} of ${slides.length}`}
                  className='absolute top-0 left-0'
                  style={{
                    display:
                      idx !== slideStore.currentIdx && idx !== slideStore.previousIdx
                        ? 'none'
                        : undefined,

                    transform:
                      idx === slideStore.currentIdx
                        ? `translateX(${slideStore.transformNr * -100}%)`
                        : idx === slideStore.previousIdx && slideStore.direction === 'right'
                          ? `translateX(${slideStore.transformNr * -100 - 100}%)`
                          : idx === slideStore.previousIdx
                            ? `translateX(${slideStore.transformNr * -100 + 100}%)`
                            : undefined,
                  }}
                >
                  <CarouselSlide {...slide} active={slideStore.currentIdx === idx} />
                </div>
              )
            })}
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
