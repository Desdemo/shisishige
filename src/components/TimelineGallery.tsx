"use client"

import { useRef, useEffect, useState } from "react"
import { Camera, MapPin, PlayCircle } from "@/components/Icons"
import type { Photo } from "@/data/photos"

interface Props {
  photos: Photo[]
}

function TimelineItem({
  photo,
  index,
}: {
  photo: Photo
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`py-16 transition-all duration-1000 md:py-24 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    visible ? "scale-100" : "scale-95"
                  } group-hover:scale-105`}
                />
              </div>
              {photo.isLive && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
                  <PlayCircle size={14} />
                  Live
                </div>
              )}
            </div>
          </div>

          <div
            className={`flex flex-col justify-center ${
              index % 2 === 0
                ? "md:order-2 md:pl-8"
                : "md:order-1 md:pr-8 md:text-right"
            }`}
          >
            <div
              className={`transition-all duration-1000 delay-200 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-2 flex items-center gap-2 text-xs text-foreground/40 md:justify-start md:text-sm">
                <span className="text-foreground/60">
                  {photo.date.slice(0, 4)}
                </span>
                <span className="h-1 w-1 rounded-full bg-foreground/20" />
                <span>{photo.date.slice(5)}</span>
              </div>
              <h3 className="mb-2 text-xl font-serif font-semibold leading-snug md:text-2xl">
                {photo.alt}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/50">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {photo.location}
                </span>
                <span className="h-1 w-1 rounded-full bg-foreground/20" />
                <span className="flex items-center gap-1">
                  <Camera size={14} />
                  {photo.camera}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TimelineGallery({ photos }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-8 md:pt-32">
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-display tracking-[0.15em] text-foreground/30 uppercase italic">
            Timeline
          </span>
          <h2 className="text-3xl font-serif font-semibold leading-tight md:text-4xl">
            时间线
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-foreground/50">
            按时间顺序排列的摄影记录，每一帧都是某个时刻的切片。
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-[1px] top-0 bottom-0 hidden w-px bg-border md:left-1/2 md:-translate-x-px md:block" />

        {photos.map((photo, i) => (
          <TimelineItem key={photo.id} photo={photo} index={i} />
        ))}
      </div>
    </section>
  )
}
