import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis } from 'lenis/react';
import AboutUs from './AboutUs';
import { Agentation } from 'agentation';

gsap.registerPlugin(ScrollTrigger);

const HeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <picture>
      <source media="(max-width: 767px)" srcSet="/images/potraitbackground.jpeg" />
      <img 
        src="/images/background.jpeg" 
        alt="URBANAXIS Studio" 
        className="w-full h-full object-cover object-center select-none" 
      />
    </picture>
    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30 pointer-events-none" />
  </div>
);
const MagneticButton = ({ text, className, href, to, onClick, children }) => {
  const ref = React.useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = to ? Link : href ? 'a' : 'button';
  const props = to ? { to } : href ? { href } : {};

  return (
    <Component
      {...props}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={className}
    >
      <motion.span
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative z-10 block font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface group-hover:text-surface transition-colors duration-500 pointer-events-none"
      >
        {text}
      </motion.span>
      {children}
    </Component>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
        <Link to="/" className="inline-block w-48">
          <img src="/images/logo.png" alt="Urban Axis Studio" className="w-full h-auto object-contain drop-shadow-md brightness-0 invert opacity-90" />
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-10 items-start justify-center">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/narrative" className={getLinkClass('/narrative')}>Narrative</Link>
        <Link to="/practice" className={getLinkClass('/practice')}>Practice</Link>
        <Link to="/about" className={`${getLinkClass('/about')} whitespace-nowrap`}>About Us</Link>
      </div>
      <div className="flex-none mt-16">
        <a href="#contact" className="luxury-hover font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface/70 hover:text-on-surface transition-colors duration-500">Contact</a>
      </div>
    </nav>
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-5 px-6 flex md:hidden justify-between items-center ${isScrolled ? 'bg-surface-container-lowest/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent border-transparent'}`}>
      <Link to="/" className="inline-block w-36">
        <img src="/images/logo.png" alt="Urban Axis Studio" className="w-full h-auto object-contain drop-shadow-md brightness-0 invert opacity-90" />
      </Link>
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
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-40 bg-surface-container-lowest flex flex-col items-center justify-center pt-20 md:hidden h-[100dvh] overflow-y-auto"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
            }}
            className="flex flex-col gap-8 items-center text-center pb-20"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link to="/" className={getLinkClass('/')}>Home</Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link to="/narrative" className={getLinkClass('/narrative')}>Narrative</Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link to="/practice" className={getLinkClass('/practice')}>Practice</Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="luxury-hover font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface/70 hover:text-on-surface transition-colors duration-500 mt-8 block">Contact</a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
)};

const Footer = () => (
  <footer id="contact" className="gsap-lazy bg-surface-container-lowest w-full py-section-gap border-t border-white/5">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="md:col-span-1">
        <div className="mb-10 w-48">
          <img src="/images/logo.png" alt="Urban Axis Studio" className="w-full h-auto object-contain drop-shadow-md brightness-0 invert opacity-90" />
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
        <p className="font-headline-md text-lg md:text-2xl text-on-surface/95 italic tracking-wide mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Architecture of Quiet Intent
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pointer-events-auto">
          <MagneticButton text="About Us" to="/about" className="group inline-block relative px-8 py-4 md:px-12 md:py-5 overflow-hidden border border-secondary/40 bg-surface-container-high/30 backdrop-blur-md transition-all hover:border-secondary shadow-lg">
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </MagneticButton>
          <MagneticButton text="Contact" href="#contact" className="group inline-block relative px-8 py-4 md:px-12 md:py-5 overflow-hidden border border-secondary/40 bg-surface-container-high/30 backdrop-blur-md transition-all hover:border-secondary shadow-lg">
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </MagneticButton>
        </div>
      </motion.div>
    </header>

      {/* We removed the Founder Section from here since it's on a separate page */}
    </>
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
            <img alt="Detailed shot" className="w-full h-[700px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[10000ms] ease-linear group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHhWQaiiuKmODM6QwMfs7n076oD8xzKpme-3fh-xgjVP7k3NGrATxR1iRiV660xDTRrpESnhBaW_zytI-R8A7jPUAVo18o3xsYqovdWpiEog79FGCX-euFGuFqxe1itUF-9phhKgGMEh7aaUYY7B92oy__cWb3h7RrU91jWNaUzq6nFIP-LqUer0s7M3gi7ILC44I0v0cR1tankzcAhsolbz-cobUkCBr1jfX2-FiPIY-NbukHHpaNVr0g6abFTxTrXE6I8Z5UZA" />
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

  // Loading screen logic (triggered on route change)
  useEffect(() => {
    setIsLoading(true);
    // Fallback timer in case video fails to load or play
    const timer = setTimeout(() => setIsLoading(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          key={location.pathname}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-surface flex items-center justify-center pointer-events-none p-4"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
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

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(10px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    exit={{ opacity: 0, filter: 'blur(10px)' }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="w-full h-full"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/practice" element={<PageTransition><Practice /></PageTransition>} />
        <Route path="/narrative" element={<PageTransition><Narrative /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <Router>
        <GlobalLoader />
        <LazyGSAPAnimator />
        <div className="flex min-h-screen w-full">
          <Navbar />
          <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen w-full overflow-hidden">
            <main className="flex-1 w-full">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </Router>
      <Agentation />
    </ReactLenis>
  );
}
