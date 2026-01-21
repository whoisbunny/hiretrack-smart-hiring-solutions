'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Get hash from URL on mount and when pathname changes
    const updateHash = () => {
      setHash(window.location.hash);
    };
    
    updateHash();
    
    // Listen for hash changes
    const handleHashChange = () => {
      updateHash();
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Also poll for hash changes (in case hashchange event doesn't fire)
    // Check every 200ms to catch any missed hash changes
    const interval = setInterval(() => {
      const currentHash = window.location.hash;
      setHash(currentHash);
    }, 200);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearInterval(interval);
    };
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/features') {
      return pathname === '/features';
    }
    if (path === '/installation-guide') {
      return pathname === '/installation-guide' || pathname?.startsWith('/installation-guide');
    }
    // For home page sections, check both pathname and hash
    if (path.startsWith('/#')) {
      // Only check if we're on the home page
      if (pathname !== '/' && pathname !== '') {
        return false;
      }
      
      const sectionHash = path.substring(1); // Remove leading '/' to get '#features', '#downloads', etc.
      
      // If there's a hash in the URL, only match exact hash
      if (hash) {
        return hash === sectionHash;
      }
      
      // If no hash and it's the overview link (#features), make it active by default
      // Otherwise, no home page section should be active when there's no hash
      return sectionHash === '#features';
    }
    return false;
  };

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/#features', label: 'Overview' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#roles', label: 'Roles' },
    { href: '/installation-guide', label: 'Installation Guide' },
    { href: '/#downloads', label: 'Downloads' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <svg
                className="w-5 h-5 text-accent-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold text-foreground">HireTrack</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    // Update hash immediately when link is clicked
                    if (link.href.startsWith('/#')) {
                      const newHash = link.href.substring(1);
                      setHash(newHash);
                    }
                  }}
                  className={`text-sm transition-colors ${
                    active
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
