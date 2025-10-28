"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

export default function Navbar() {
  const getpath = usePathname();

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(
        e.currentTarget.getAttribute("href")
      );
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    // Cleanup listeners on unmount
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []); // Runs only on client after mount

  const toggleMenu = () => {
    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.querySelector(".menu-toggle");
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  };

  function closeMenu() {
    if (window.innerWidth < 600) {
      const navLinks = document.getElementById("navLinks");
      const menuToggle = document.querySelector(".menu-toggle");
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  }

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Image
              src="/logo.png" // Path from /public folder
              alt="Hero Banner"
              className="object-cover object-center"
              height={50}
              width={50}
              priority // Loads image fast (for hero sections)
              style={{ borderRadius: "50px" }}
            />
            <h1 className="logo-name">A ONE VENDING SERVICE</h1>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links" id="navLinks">
            <li>
              <Link className={getpath === '/' ? "active-color" : ""} href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className={getpath === '/product' ? "active-color" : ""} href="/product" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link className={getpath === '/service' ? "active-color" : ""} href="/service" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link className={getpath === '/about' ? "active-color" : ""} href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link className={getpath === '/service-area' ? "active-color" : ""} href="/service-area" onClick={closeMenu}>
                Service-area
              </Link>
            </li>
            <li>
              <Link className={getpath === '/faqs' ? "active-color" : ""} href="/faqs" onClick={closeMenu}>
                Faqs
              </Link>
            </li>
            <li>
              <Link className={getpath === '/contact' ? "active-color" : ""} href="/contact" onClick={closeMenu}>
                Contact          
              </Link>
            </li>
            <li>
              <Link className={getpath === '/blog' ? "active-color" : ""} href="/blog" onClick={closeMenu}>
                Blog          
              </Link>
            </li>

          </ul>
        </nav>
      </header>
    </>
  )
}
