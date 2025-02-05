"use client";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

// Separate the part that uses useSearchParams into its own component
function HeaderContent({ dark, pathname }) {
  const searchParams = useSearchParams();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerHeight = header.clientHeight;
        setIsScrolled(window.scrollY > headerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const cardId = hash.substring(1);

    if (cardId) {
      const cardElement = document.getElementById(cardId);
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <header
      className={`header ${isScrolled && "header-float"} ${dark && "dark"}`}
    >
      <Link href="/" className="header__logo">
        <Image alt="" src="/assets/logo-asmad.png" width={60} height={50} />
        <div>
          SMAD <br />
          INTEGRATED SERVICES
        </div>
      </Link>
      <nav>
        <Link href="/" prefetch={true}>
          Home
        </Link>
        <Link href="/general" prefetch={true}>
          General
        </Link>
        <Link href="/about" prefetch={true}>
          About
        </Link>
        <Link href="/#services">Services</Link>
        <Link href="/projects" prefetch={true}>
          Projects
        </Link>
      </nav>

      <div className="header__buttons">
        <button>Contact us</button>
      </div>
    </header>
  );
}

// Main Header component with Suspense boundary
export default function Header({ dark }) {
  const pathname = usePathname();

  return (
    <Suspense fallback={<div className="header-loading">Loading...</div>}>
      <HeaderContent dark={dark} pathname={pathname} />
    </Suspense>
  );
}