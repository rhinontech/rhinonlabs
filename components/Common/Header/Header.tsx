"use client";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact-us" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* "Shadow from top" - a gradient to ensure visibility if needed, or just the shadow on the nav itself. 
          Interpreting "shadow from top" as a drop shadow on the navbar + consistent fixed positioning. */}
      <nav
        data-state={menuState && "active"}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300"
      >
        <div
          className={cn(
            "w-full max-w-5xl rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300",
            // Add a subtle top highlight/shadow effect if that's what was meant, typically usually a white/10 border handles this.
            // "shadow from top" might also mean this:
            "shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset]" // Top inner highlight
          )}
        >
          <div className="relative flex items-center justify-between gap-6 px-6 py-3">
            {/* Logo + Mobile Menu Button */}
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src="/assets/Logo_Rhinon_Web_Full.png"
                  alt="Rhinon Tech Logo"
                  width={100}
                  height={100}
                  className="object-contain h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu - Centered using absolute positioning trick or just flex-1 justify-center */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ul className="flex gap-8 text-sm font-medium text-white/80">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-white hover:scale-105 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 block cursor-pointer lg:hidden text-white"
              >
                {menuState ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              <div className="hidden lg:block">
                <Button
                  asChild
                  size="sm"
                  className="h-9 rounded-full bg-white text-black hover:bg-white/90 px-5 text-xs font-semibold"
                >
                  <Link href="/contact-us">
                    Start a Project
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Dropdown (Outside the relative container flow to avoid width constraints if needed, but here simple is better) */}
            <div
              className={cn(
                "absolute top-full left-0 mt-4 w-full flex-col gap-4 rounded-2xl border border-white/10 bg-black/95 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 lg:hidden",
                menuState ? "flex opacity-100 scale-100" : "hidden opacity-0 scale-95"
              )}
            >
              <ul className="flex flex-col gap-4 text-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="block text-lg font-medium text-white/80 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  asChild
                  className="w-full rounded-full bg-white text-black hover:bg-white/90"
                >
                  <Link href="/contact-us">Start a Project</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};
