"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { List, X } from "@/components/Icons"

const links = [
  { href: "/", label: "首页" },
  { href: "/collections", label: "专题" },
  { href: "/about", label: "简介" },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const prevScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
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
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-serif tracking-wide text-foreground transition-opacity hover:opacity-60"
        >
          十四行诗
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-all hover:opacity-60 ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <List size={20} />
          )}
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
