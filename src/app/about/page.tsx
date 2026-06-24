import { Camera, MapPin, Envelope, InstagramLogo } from "@/components/Icons"

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-display tracking-[0.15em] text-foreground/30 uppercase italic">
            About
          </span>
          <h1 className="text-3xl font-serif font-semibold leading-tight md:text-4xl">
            简介
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/photographer-profile/800/600"
                alt="摄影师"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2 md:justify-center">
            <h2 className="text-2xl font-serif font-semibold leading-snug">
              关于我
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-foreground/60">
              <p>
                你好，我是一名自由摄影师，热衷于用镜头探索世界。
                从城市街角到荒野山川，我一直在寻找那些独特的光影瞬间。
              </p>
              <p>
                摄影对我来说不仅是一种记录，更是一种思考方式。
                每一张照片都是我与世界的一次对话。
              </p>
              <p>
                这个站点是我摄影作品的集合，同时也是我使用
                Apple Live Photo 技术的实验场 —— 我希望让静态的影像也能拥有时间的维度。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
              <Camera size={18} />
            </div>
            <h3 className="mb-2 text-sm font-serif font-semibold">设备</h3>
            <div className="flex flex-col gap-1.5 text-sm text-foreground/50">
              <span>Sony A7R V + FE 24-70mm f/2.8 GM II</span>
              <span>Sony FE 70-200mm f/2.8 GM II</span>
              <span>iPhone 16 Pro</span>
              <span>DJI Mavic 3 Pro</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
              <MapPin size={18} />
            </div>
            <h3 className="mb-2 text-sm font-serif font-semibold">足迹</h3>
            <div className="flex flex-col gap-1.5 text-sm text-foreground/50">
              <span>中国 · 四川 / 云南 / 西藏</span>
              <span>中国 · 新疆 / 甘肃 / 青海</span>
              <span>日本 · 东京 / 京都 / 北海道</span>
              <span>冰岛 · 雷克雅未克 · 环岛</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
              <Envelope size={18} />
            </div>
            <h3 className="mb-2 text-sm font-serif font-semibold">联系</h3>
            <div className="flex flex-col gap-1.5 text-sm text-foreground/50">
              <a href="mailto:hello@14poetry.com" className="hover:text-foreground transition-colors">
                hello@14poetry.com
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <InstagramLogo size={14} />
                @14.poetry
              </a>
              <span className="mt-1 text-xs text-foreground/30">
                欢迎约拍 / 合作 / 交流
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 md:p-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-display tracking-[0.15em] text-foreground/30 uppercase italic">
              Live Photos
            </span>
            <h3 className="text-xl font-serif font-semibold leading-snug">
              关于 Apple Live Photo 支持
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-foreground/50">
              本网站支持 Apple Live Photo 格式。标有 &quot;Live&quot;
              标签的照片包含一段短暂的前后动态影像。
              在支持的设备上，这些照片将以静音循环视频的形式呈现，
              让瞬间更加生动。Live Photo 使用 HEIC + MOV 格式存储，
              保持了高质量的同时也照顾了兼容性。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
