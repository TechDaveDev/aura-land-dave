'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, MenuIcon, XIcon } from "@/components/Icons";

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-brand-blue hover:opacity-80 transition-opacity">
                Aura
              </Link>
            </div>

            {/* Desktop */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-text-secondary hover:text-text-primary font-medium transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Botón CTA y Menú Móvil */}
            <div className="flex items-center gap-4">
              <Link
                href="/pricing"
                className="hidden sm:inline-flex items-center gap-2 bg-action-button-blue text-white px-5 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-sm group"
              >
                Get Started
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-text-primary"
                aria-label="Abrir menú"
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-lg md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-text-primary font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-flex items-center gap-2 bg-action-button-blue text-white px-6 py-3 rounded-full font-semibold shadow-lg text-lg"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
