"use client";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/feature" },
  { name: "Pricing", href: "/pricing" },
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
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 ",
            isScrolled && "bg-background/50 max-w-4xl border lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo + Mobile Menu Button */}
            <div className="flex w-full justify-between lg:w-auto">
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
                  className="object-contain h-10 w-auto"
                />
              </Link>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                {menuState ? (
                  <X className="size-6 duration-200" />
                ) : (
                  <Menu className="size-6 duration-200" />
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons + Mobile Menu */}
            <div
              className={cn(
                "lg:flex hidden w-fit items-center justify-end gap-4 rounded-3xl border-transparent p-0 shadow-none",
                menuState &&
                  "absolute top-full left-0 w-full flex flex-col space-y-4 bg-background border p-6 rounded-2xl shadow-2xl lg:hidden"
              )}
            >
              {/* Mobile Links */}
              {menuState && (
                <ul className="space-y-4 text-base lg:hidden">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* Book a Demo Button */}
                <div className="w-full sm:w-auto flex bg-foreground/10 rounded-2xl border p-1 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-foreground/20">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 sm:flex-initial h-[42px] rounded-xl px-5 text-sm font-medium bg-blue-900 hover:bg-blue-900 text-white transition-all duration-300 hover:text-white"
                  >
                    <Link href="/book-demo">
                      <span className="text-nowrap">Book a Demo</span>
                    </Link>
                  </Button>
                </div>

                {/* Get Started Button */}
                <div className="w-full sm:w-auto flex  p-1 transition-all duration-300 hover:scale-105 hover:shadow-lg ">
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="flex-1 sm:flex-initial h-[42px] rounded-xl px-5 text-sm font-medium border border-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Link href="https://app.rhinontech.com/auth/signup">
                      <span className="text-nowrap">Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
