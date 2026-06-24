import { Camera, Envelope, InstagramLogo } from "@/components/Icons"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-serif tracking-wide">
              十四行诗
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/50">
              每一帧，都是一行诗。
              用镜头书写光的十四行。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-[0.2em] text-foreground/30 uppercase">
              导航
            </span>
            <a href="/" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
              首页
            </a>
            <a href="/collections" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
              专题
            </a>
            <a href="/about" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
              简介
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-[0.2em] text-foreground/30 uppercase">
              联系
            </span>
            <a
              href="mailto:hello@14poetry.com"
              className="flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-foreground"
            >
              <Envelope size={14} />
              hello@14poetry.com
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-foreground"
            >
              <InstagramLogo size={14} />
              @14.poetry
            </a>
            <div className="mt-2 flex items-center gap-2 text-xs text-foreground/30">
              <Camera size={12} />
              <span>Sony A7R V / iPhone 16 Pro</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} 十四行诗. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
