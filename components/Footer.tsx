'use client'

import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
import { Logo } from './Logo'

const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/E6b03FbFqR6CDyEqIIrch4?s=cl&p=i&mlu=4'

export function Footer() {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Register Now', href: '/register' },
  ]

  return (
    <footer className="relative bg-brand-purple py-16 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="flex w-full items-start justify-between max-lg:flex-col max-lg:gap-12">
          <div className="flex flex-col gap-5 max-w-md">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] sm:tracking-[-0.05em] leading-[100%] text-white">
              Ready to make <br /> your mark?
            </h2>
            <p className="text-lg md:text-xl font-medium leading-[130%] tracking-[-0.02em] text-white/70">
              Compete with the best, win weekly prizes, and secure eternal glory.
            </p>
            <div className="flex items-center gap-5 mt-2">
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-lilac transition-colors"
                aria-label="Join our WhatsApp community"
                title="Join our WhatsApp community"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@jejesleague.com"
                className="flex items-center gap-2 text-white/60 hover:text-brand-lilac transition-colors text-sm"
              >
                <Mail className="h-4 w-4" /> hello@jejesleague.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Quick Links</h3>
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xl font-semibold tracking-[-0.02em] text-white transition-colors hover:text-brand-lilac"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-between max-sm:items-start max-sm:flex-col max-sm:gap-3 border-t border-white/10 pt-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-12 w-12 text-brand-lilac" />
            <span className="font-bold text-lg tracking-[-0.02em] text-white">
              Jeje&apos;s <span className="text-brand-lilac">League of Champions</span>
            </span>
          </Link>
          <div className="text-right max-sm:text-left">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Jeje&apos;s <span className="font-semibold">League of Champions</span>. All rights reserved.
            </p>
            <p className="text-xs text-white/30 mt-1">Not affiliated with the official Premier League.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
