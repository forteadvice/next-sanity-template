'use client'

import type { TCarouselSlide } from './Carousel.Slide'
import CarouselPlayButton from './Carousel.PlayButton'

import { useState, useId, useEffect } from 'react'
import CarouselSlide from './Carousel.Slide'

type Props = {
  /** Provides a label that describes the purpose of the set of carousel. */
  ariaLabel: string
  /** Array of slides / carousel objects */
  slides?: TCarouselSlide[]
}

type Directions = 'left' | 'right'

export default function Carousel({ ariaLabel, slides }: Props) {
  const [autoPlay, setAutoPlay] = useState(true)
  const [pauseActions, setPauseActions] = useState(false)
  const [transformValue, setTransformValue] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(0)
  const [direction, setDirection] = useState<Directions>('right')

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (autoPlay && !pauseActions) {
      interval = setInterval(() => {
        move('right')
      }, 3000)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [autoPlay])

  useEffect(() => {
    if (pauseActions) {
      setTimeout(() => {
        setPauseActions(false)
      }, 700)
    }
  }, [pauseActions])

  if (!slides) return

  function move(direction: Directions) {
    if (!slides || pauseActions) return
    setPauseActions(true)
    if (direction === 'left') {
      setCurrentIndex(currentIndex == 0 ? maxSlideIndex : currentIndex - 1)
      setTransformValue(transformValue + 1)
    } else {
      setCurrentIndex(currentIndex == maxSlideIndex ? 0 : currentIndex + 1)
      setTransformValue(transformValue - 1)
    }
    setPreviousIndex(currentIndex)
    setDirection(direction)
  }

  // Generate unique identifiers
  const id = useId()
  const carouselItemsId = `carouselItems${id}`

  // Store maximum index value
  const maxSlideIndex = slides.length - 1

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
          onClick={() => move('left')}
          onFocus={() => {
            console.log('KASJDKJKS')
          }}
        >
          {'<-'}
        </button>

        <div>
          <div
            id={carouselItemsId}
            aria-live={autoPlay ? 'off' : 'polite'}
            className='relative transition-transform duration-700 transform-gpu h-0 pb-[66.5%]'
            style={{
              transform: `translateX(${transformValue * 100}%`,
            }}
          >
            {slides?.map((slide, index) => {
              return (
                <div
                  key={`${index}${id}`}
                  role='group'
                  aria-roledescription='slide'
                  aria-label={`${index + 1} of ${slides.length}`}
                  className='absolute top-0 left-0'
                  style={{
                    display: index !== currentIndex && index !== previousIndex ? 'none' : undefined,

                    transform:
                      index === currentIndex
                        ? `translateX(${transformValue * -100}%)`
                        : index === previousIndex && direction === 'right'
                          ? `translateX(${transformValue * -100 - 100}%)`
                          : index === previousIndex
                            ? `translateX(${transformValue * -100 + 100}%)`
                            : undefined,
                  }}
                >
                  <CarouselSlide {...slide} active={currentIndex === index} />
                </div>
              )
            })}
          </div>
        </div>

        <button
          className='absolute top-1/2 right-5 -translate-y-1/2 z-10 bg-white bg-opacity-75 w-10 h-10 rounded-full'
          aria-controls={carouselItemsId}
          aria-label='Next Slide'
          onClick={() => move('right')}
        >
          {'->'}
        </button>
      </div>
    </div>
  )
}
