"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "首页" },
  { href: "/collections", label: "专题" },
  { href: "/about", label: "简介" },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const prevScroll = useRef(0)
  const entered = useRef(false)

  useEffect(() => {
    entered.current = true
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      if (y > 120 && y > prevScroll.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      prevScroll.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const showBg = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        showBg ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className={`text-lg font-serif tracking-wide text-foreground transition-opacity hover:opacity-60 ${
            entered.current ? "" : "animate-slide-down"
          }`}
        >
          十四行诗
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm transition-all hover:opacity-60 ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/50"
              } ${entered.current ? "" : `animate-slide-up animate-delay-${(i + 1) * 100}`}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-6 w-6 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm transition-all hover:opacity-60 ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
