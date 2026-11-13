/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetodeBelajar } from './components/MetodeBelajar';
import { NewsletterSection } from './components/NewsletterSection';
import { KolaborasiBanner } from './components/KolaborasiBanner';
import { ArsipPage } from './components/ArsipPage';
import { KontakPage } from './components/KontakPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'arsip' | 'kontak'>('home');

  // Handle URL hash routing
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();

      if (hash === '#arsip' || pathname === '/arsip') {
        setCurrentPage('arsip');
        window.scrollTo(0, 0);
      } else if (hash === '#kontak' || pathname === '/kontak') {
        setCurrentPage('kontak');
        window.scrollTo(0, 0);
      } else if (hash === '#metode-belajar' || hash === '#newsletter' || hash === '#kolaborasi') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleNavigate = (page: 'home' | 'arsip' | 'kontak', sectionId?: string) => {
    setCurrentPage(page);

    if (page === 'home') {
      if (sectionId) {
        window.location.hash = sectionId;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToNewsletter = () => {
    if (currentPage !== 'home') {
      handleNavigate('home', 'newsletter');
    } else {
      const el = document.getElementById('newsletter');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('newsletter-name');
        if (nameInput) nameInput.focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#242424]">
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero onJoinClick={scrollToNewsletter} />
            <MetodeBelajar onNavigateToArchive={() => handleNavigate('arsip')} />
            <NewsletterSection onNavigateToArchive={() => handleNavigate('arsip')} />
            <KolaborasiBanner onOpenCustomContact={() => handleNavigate('kontak')} />
          </>
        )}

        {currentPage === 'arsip' && <ArsipPage />}

        {currentPage === 'kontak' && <KontakPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
