"use client"

import { useState, useEffect, useCallback } from "react"
import { MapPin, PlayCircle } from "@/components/Icons"
import type { Photo } from "@/data/photos"

interface Props {
  photos: Photo[]
}

export default function HeroCarousel({ photos }: Props) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(photos.length - 1)

  const next = useCallback(() => {
    setPrev(current)
    setCurrent((c) => (c + 1) % photos.length)
  }, [current, photos.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <div
        key={photos[current].id}
        className="absolute inset-0 animate-fade-in"
      >
        <img
          src={photos[current].src}
          alt={photos[current].alt}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />

      <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 md:p-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span>{photos[current].date}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <MapPin size={14} className="text-white/40" />
              <span>{photos[current].location}</span>
              {photos[current].isLive && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <PlayCircle
                    size={14}
                    className="text-white/60"
                  />
                  <span className="text-white/40">Live</span>
                </>
              )}
            </div>
            <h1 className="max-w-2xl text-3xl font-serif font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {photos[current].alt}
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i) }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-white"
                : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-1.5 md:hidden">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i) }}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current
                ? "w-6 bg-white"
                : "w-1 bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
