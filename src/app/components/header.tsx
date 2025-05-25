"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // O el ícono que estés usando

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // Scroll hacia abajo
      } else {
        setShowHeader(true); // Scroll hacia arriba
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[40%] max-w-4xl rounded-2xl bg-background/30 backdrop-blur-sm shadow-lg transition-transform duration-300 md:rounded-full ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container  mx-auto px- py-4  flex justify-center items-center">
        
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-neutral-900 hover:text-amber-50 transition-colors font-bold">
              {item.name}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isOpen && (
        <div className="flex justify-center items-center flex-col md:hidden ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block my-1 py-2 px-4 hover:bg-accent font-bold rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
