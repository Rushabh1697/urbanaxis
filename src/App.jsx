import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis } from 'lenis/react';
import AboutUs from './AboutUs';
import Catalogue from './Catalogue';

gsap.registerPlugin(ScrollTrigger);

const HeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <img 
      src="/images/background.jpeg" 
      alt="URBANAXIS Studio" 
      className="w-full h-full object-cover object-center select-none" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30 pointer-events-none" />
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  const getLinkClass = (path) => {
    return `luxury-hover font-label-sm text-label-sm uppercase tracking-[0.2em] transition-colors duration-500 ${
      isActive(path) ? 'text-secondary' : 'text-on-surface/70 hover:text-on-surface'
    }`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
  <>
    <nav className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-r border-white/5 py-12 px-10 flex-col justify-between hidden md:flex">
      <div className="flex-none mb-16">
        <Link to="/"><h1 className="font-headline-md text-[24px] uppercase tracking-[0.3em] text-on-surface leading-normal">URBANAXIS<br/>STUDIO</h1></Link>
      </div>
      <div className="flex-1 flex flex-col gap-10 items-start justify-center">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
        <Link to="/narrative" className={getLinkClass('/narrative')}>Narrative</Link>
        <Link to="/practice" className={getLinkClass('/practice')}>Practice</Link>
        <Link to="/about" className={`${getLinkClass('/about')} whitespace-nowrap`}>About Us</Link>
      </div>
      <div className="flex-none mt-16">
        <a href="#contact" className="luxury-hover font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface/70 hover:text-on-surface transition-colors duration-500">Contact</a>
      </div>
    </nav>
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-white/5 py-5 px-6 flex md:hidden justify-between items-center">
      <Link to="/"><h1 className="font-headline-md text-[18px] uppercase tracking-[0.3em] text-on-surface">URBANAXIS</h1></Link>
      <button onClick={toggleMobileMenu} className="text-on-surface p-2 focus:outline-none z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </nav>
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-40 bg-surface-container-lowest flex flex-col items-center justify-center pt-20 md:hidden h-[100dvh] overflow-y-auto">
        <div className="flex flex-col gap-8 items-center text-center pb-20">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
          <Link to="/narrative" className={getLinkClass('/narrative')}>Narrative</Link>
          <Link to="/practice" className={getLinkClass('/practice')}>Practice</Link>
          <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="luxury-hover font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface/70 hover:text-on-surface transition-colors duration-500 mt-8">Contact</a>
        </div>
      </div>
    )}
  </>
)};

const Footer = () => (
  <footer id="contact" className="gsap-lazy bg-surface-container-lowest w-full py-section-gap border-t border-white/5">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="md:col-span-1">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-headline-md text-[20px] uppercase tracking-[0.3em] text-on-surface">URBANAXIS STUDIO</h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed max-w-[280px]">
          Shaping contemporary spaces through
          architectural discipline and refined simplicity.
          Timeless in character. Enduring in presence.
        </p>
      </div>
      <div className="md:col-span-1">
        <h4 className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary mb-10">Explore</h4>
        <ul className="space-y-6">
          <li><Link to="/projects" className="luxury-hover font-body-md text-on-surface-variant/80 hover:text-on-surface transition-colors inline-block">Projects</Link></li>
          <li><Link to="/narrative" className="luxury-hover font-body-md text-on-surface-variant/80 hover:text-on-surface transition-colors inline-block">Narrative</Link></li>
          <li><Link to="/practice" className="luxury-hover font-body-md text-on-surface-variant/80 hover:text-on-surface transition-colors inline-block">Practice</Link></li>
          <li><Link to="/about" className="luxury-hover font-body-md text-on-surface-variant/80 hover:text-on-surface transition-colors inline-block">About Us</Link></li>
        </ul>
      </div>
      <div className="md:col-span-1">
        <h4 className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary mb-10">Contact</h4>
        <ul className="space-y-6">
          <li><a className="luxury-hover font-body-md text-on-surface-variant/80 hover:text-on-surface transition-colors inline-block" href="mailto:arbanaxis26@gmail.com">arbanaxis26@gmail.com</a></li>
        </ul>
      </div>
      <div className="md:col-span-1">
        <h4 className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary mb-10">Follow</h4>
        <div className="flex gap-8 mb-12">
            <a className="luxury-hover font-body-md text-on-surface-variant/80 hover:text-on-surface transition-colors" href="https://www.instagram.com/urbanaxisstudio?igsh=MXJhNGRncTFuc2R1eQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="luxury-hover font-body-md text-on-surface-variant/80 hover:text-on-surface transition-colors" href="#">LinkedIn</a>
        </div>
        <div className="pt-10 border-t border-white/5">
          <p className="font-label-sm text-on-surface-variant/40 tracking-[0.1em]">&copy; 2025 URBANAXIS STUDIO.</p>
          <p className="font-label-sm text-on-surface-variant/40 tracking-[0.1em] mt-1 italic">Built for Permanence.</p>
        </div>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <>
    {/* Hero Section */}
    <header className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden pb-16 md:pb-24">
      <HeroBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="relative z-10 text-center max-w-5xl px-margin-mobile flex flex-col items-center pointer-events-none"
      >
        <p className="font-headline-md text-lg md:text-2xl text-on-surface/90 italic tracking-wide mb-6">
          Architecture of Quiet Intent
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pointer-events-auto">
          <Link to="/projects" className="group inline-block relative px-8 py-4 md:px-12 md:py-5 overflow-hidden border border-secondary/40 bg-surface-container-high/30 backdrop-blur-md transition-all hover:border-secondary">
            <span className="relative z-10 font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface group-hover:text-surface transition-colors duration-500">View Projects</span>
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </Link>
          <Link to="/about" className="group inline-block relative px-8 py-4 md:px-12 md:py-5 overflow-hidden border border-secondary/40 bg-surface-container-high/30 backdrop-blur-md transition-all hover:border-secondary">
            <span className="relative z-10 font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface group-hover:text-surface transition-colors duration-500">About Us</span>
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </Link>
          <a href="#contact" className="group inline-block relative px-8 py-4 md:px-12 md:py-5 overflow-hidden border border-secondary/40 bg-surface-container-high/30 backdrop-blur-md transition-all hover:border-secondary">
            <span className="relative z-10 font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface group-hover:text-surface transition-colors duration-500">Contact</span>
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
        </div>
      </motion.div>
    </header>

      {/* We removed the Founder Section from here since it's on a separate page */}
    </>
  );

const Projects = () => (
  <div className="pt-24 gsap-lazy">
    {/* Featured Projects */}
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex justify-between items-end mb-24"
        >
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-secondary mb-6 block">Selected Works</span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Featured Projects</h3>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Link to="/project/the-sea-dream" className="group cursor-pointer block">
            <div className="aspect-[4/5] overflow-hidden mb-10 bg-surface-container relative">
              <div className="absolute inset-0 bg-surface-container-highest/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img alt="Exterior view of a minimalist residence" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/prabhadevi-main.jpg?v=2" />
            </div>
            <div className="flex justify-between items-start border-t border-white/5 pt-8">
              <div>
                <h4 className="font-headline-md text-[28px] text-on-surface mb-2 group-hover:text-secondary transition-colors duration-300">The Sea Dream</h4>
                <p className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface-variant/60">Mumbai</p>
              </div>
              <span className="font-label-sm text-label-sm text-secondary/40">01</span>
            </div>
          </Link>
          <Link to="/project/bangalore-house" className="group cursor-pointer block">
            <div className="aspect-[4/5] overflow-hidden mb-10 bg-surface-container relative">
              <div className="absolute inset-0 bg-surface-container-highest/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img alt="Interior of a modern gallery space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/banglore-main.jpg?v=2" />
            </div>
            <div className="flex justify-between items-start border-t border-white/5 pt-8">
              <div>
                <h4 className="font-headline-md text-[28px] text-on-surface mb-2 group-hover:text-secondary transition-colors duration-300">Banglore house</h4>
                <p className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface-variant/60">Architecture & Interior, Banglore</p>
              </div>
              <span className="font-label-sm text-label-sm text-secondary/40">02</span>
            </div>
          </Link>
          </div>
      </div>
    </section>
  </div>
);

const Practice = () => (
  <div className="pt-24 gsap-lazy">
    <section className="py-section-gap bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-secondary mb-8">Our Practice</span>
            <h3 className="font-headline-lg text-headline-lg mb-10 leading-[1.2] text-on-surface">Spatial Poetics for Contemporary Living.</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md leading-relaxed">
              We believe in the resonance of architectural volume. Our studio is dedicated to the pursuit of spatial permanence—creating environments that bridge the gap between structural integrity and the lived experience.
            </p>
          </div>
          <div className="md:col-start-7 md:col-span-6 relative group overflow-hidden">
            <img alt="Detailed shot" className="w-full h-[700px] object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHhWQaiiuKmODM6QwMfs7n076oD8xzKpme-3fh-xgjVP7k3NGrATxR1iRiV660xDTRrpESnhBaW_zytI-R8A7jPUAVo18o3xsYqovdWpiEog79FGCX-euFGuFqxe1itUF-9phhKgGMEh7aaUYY7B92oy__cWb3h7RrU91jWNaUzq6nFIP-LqUer0s7M3gi7ILC44I0v0cR1tankzcAhsolbz-cobUkCBr1jfX2-FiPIY-NbukHHpaNVr0g6abFTxTrXE6I8Z5UZA" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Narrative = () => (
  <div className="pt-24 gsap-lazy">
    <section className="py-section-gap bg-surface relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.5em] text-secondary mb-12">The Narrative</span>
          <h3 className="font-headline-lg text-headline-lg mb-16 italic text-on-surface/90 leading-tight">"The spatial quality of a room is its most profound conversation with the human spirit."</h3>
          <div className="h-32 w-[1px] bg-gradient-to-b from-secondary/40 to-transparent mb-16"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-16 leading-relaxed">
            Explore our Narrative section to discover the stories behind our sites, the environmental factors that shape our forms, and the architectural principles that guide every blueprint.
          </p>
        </div>
      </div>
    </section>
  </div>
);
const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const lenis = useLenis();

  // Scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, lenis]);

  // Loading screen logic (only runs once on mount)
  useEffect(() => {
    // Fallback timer in case video fails to load or play
    const timer = setTimeout(() => setIsLoading(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-surface flex items-center justify-center pointer-events-none p-4">
      <motion.video 
        src="/images/loadingscreen.mp4" 
        autoPlay
        muted
        playsInline
        onEnded={() => setIsLoading(false)}
        className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 object-contain mix-blend-lighten" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </div>
  );
};

const LazyGSAPAnimator = () => {
  const location = useLocation();

  useGSAP(() => {
    const elements = gsap.utils.toArray('.gsap-lazy');
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    
    // Refresh ScrollTrigger after routing changes to ensure proper calculations
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return null;
};

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <Router>
        <GlobalLoader />
        <LazyGSAPAnimator />
        <div className="flex min-h-screen w-full">
          <Navbar />
          <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen w-full">
            <main className="flex-1 w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/narrative" element={<Narrative />} />
                <Route path="/project/:projectId" element={<Catalogue />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ReactLenis>
  );
}
