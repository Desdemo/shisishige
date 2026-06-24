import Link from "next/link"
import { collections } from "@/data/photos"
import { ArrowRight, ImageIcon } from "@/components/Icons"

export default function CollectionsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-display tracking-[0.15em] text-foreground/30 uppercase italic">
            Collections
          </span>
          <h1 className="text-3xl font-serif font-semibold leading-tight md:text-4xl">
            专题
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-foreground/50">
            按主题分类的摄影系列，每一组都是一个完整的故事。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:border-foreground/20"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={collection.coverSrc}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-center gap-3 text-xs text-foreground/40">
                  <span>{collection.date}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/20" />
                  <span className="flex items-center gap-1">
                    <ImageIcon size={12} />
                    {collection.photoCount} 张
                  </span>
                </div>
                <h2 className="text-lg font-serif font-semibold leading-snug">
                  {collection.title}
                </h2>
                <p className="text-sm leading-relaxed text-foreground/50">
                  {collection.description}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs font-medium text-foreground/40 transition-all group-hover:text-foreground/70">
                  <span>查看全部</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
