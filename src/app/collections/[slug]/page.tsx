import { notFound } from "next/navigation"
import { collections } from "@/data/photos"
import { MapPin, Camera, PlayCircle, ArrowLeft } from "@/components/Icons"
import Link from "next/link"

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params
  const collection = collections.find((c) => c.slug === slug)

  if (!collection) notFound()

  return (
    <div className="pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <Link
          href="/collections"
          className="mb-8 flex items-center gap-1 text-sm text-foreground/40 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          返回专题
        </Link>

        <div className="mb-12 flex flex-col gap-3">
          <span className="text-xs font-display tracking-[0.15em] text-foreground/30 uppercase italic">
            {collection.date} · {collection.photoCount} 张
          </span>
          <h1 className="text-3xl font-serif font-semibold leading-tight md:text-5xl">
            {collection.title}
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-foreground/50">
            {collection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collection.photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              {photo.isLive && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
                  <PlayCircle size={14} />
                  Live
                </div>
              )}
              <div className="flex flex-col gap-1.5 p-5">
                <h3 className="text-sm font-serif font-semibold">{photo.alt}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-foreground/40">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {photo.location}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-foreground/20" />
                  <span className="flex items-center gap-1">
                    <Camera size={12} />
                    {photo.camera}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-foreground/20" />
                  <span>{photo.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
