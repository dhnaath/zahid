import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'arsip' | 'kontak';
  onNavigate: (page: 'home' | 'arsip' | 'kontak', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: 'home' | 'arsip' | 'kontak', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 duration-300 ${
        isScrolled
          ? 'bg-white/85 py-3 shadow-xs backdrop-blur-md'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-between px-4 sm:px-6 md:flex-row md:items-center">
        {/* Logo and Mobile Toggle */}
        <div className="flex w-full items-center justify-between md:w-auto">
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 cursor-pointer focus:outline-hidden"
            aria-label="Beranda Zahid Ibrahim"
          >
            <img
              src="/logo.svg"
              alt="Zahid Ibrahim Logo"
              className="h-10 w-auto duration-200 hover:opacity-85"
            />
          </button>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-2 text-gray-700 shadow-xs md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`h-0.5 w-5 bg-gray-800 transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-800 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-800 transition-all duration-300 ${
                mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            mobileMenuOpen ? 'mt-4 flex max-h-96 flex-col pb-4' : 'hidden md:flex'
          } items-center gap-6 overflow-hidden duration-300 md:mt-0 md:max-h-none md:flex-row md:pb-0 2xl:gap-8`}
        >
          <ul className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
            <li>
              <button
                onClick={() => handleLinkClick('home')}
                className={`text-sm font-medium duration-200 cursor-pointer ${
                  currentPage === 'home'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Beranda
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('home', 'metode-belajar')}
                className="text-sm font-medium text-gray-600 duration-200 hover:text-gray-900 cursor-pointer"
              >
                Metode Belajar
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('arsip')}
                className={`text-sm font-medium duration-200 cursor-pointer ${
                  currentPage === 'arsip'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Arsip Tulisan
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('home', 'newsletter')}
                className="text-sm font-medium text-gray-600 duration-200 hover:text-gray-900 cursor-pointer"
              >
                Newsletter
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('kontak')}
                className={`text-sm font-medium duration-200 cursor-pointer ${
                  currentPage === 'kontak'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Kolaborasi
              </button>
            </li>
          </ul>

          {/* Social Links */}
          <ul className="flex items-center gap-3 pt-3 md:border-l md:border-gray-200 md:pl-6 md:pt-0">
            <li>
              <a
                href="https://youtube.com/@zahidibr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-xs duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:text-red-600"
                title="YouTube Zahid Ibrahim"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/zahidibr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-xs duration-300 hover:-translate-y-0.5 hover:border-pink-500 hover:text-pink-600"
                title="Instagram @zahidibr"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@zahidibr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-xs duration-300 hover:-translate-y-0.5 hover:border-black hover:text-black"
                title="TikTok @zahidibr"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.34 6.34 0 0 0 1.87-4.49V8.75a8.16 8.16 0 0 0 4.9 1.62V6.91a4.83 4.83 0 0 1-1-.22z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://spotify.link/uM66OlI1IDb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-xs duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600"
                title="Podcast Spotify Zahid Ibrahim"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.297c-.217 0-.352-.066-.554-.183-3.228-1.947-6.993-2.029-10.702-1.27-.202.052-.466.135-.616.135-.502 0-.818-.4-.818-.818 0-.533.316-.787.704-.87 4.24-.937 8.572-.855 12.268 1.357.316.202.502.383.502.855 0 .502-.367.797-.784.797zm1.393-3.397c-.269 0-.45-.119-.637-.218-3.236-1.916-8.06-2.687-12.352-1.522-.249.068-.383.135-.616.135-.554 0-1.004-.45-1.004-1.004 0-.554.269-.922.802-1.072 1.44-.404 2.91-.704 5.063-.704 3.36 0 6.607.834 9.164 2.356.42.249.585.57.585 1.02 0 .56-.44 1.01-.995 1.01zm1.605-3.945c-.269 0-.435-.067-.668-.202-3.686-2.2-10.276-2.73-14.542-1.538-.186.052-.42.135-.668.135-.684 0-1.206-.533-1.206-1.222 0-.704.435-1.103.901-1.238 1.823-.533 3.863-.787 6.083-.787 3.78 0 7.74.787 10.634 2.475.404.233.668.554.668 1.17 0 .704-.57 1.207-1.202 1.207z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
