import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const VirenMakwanaSection = () => {
  return (
    <section className="py-24 bg-surface-container-lowest border-t border-white/5" id="viren">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-5xl mx-auto py-12"
        >
          {/* Left Column: Image */}
          <motion.div variants={fadeIn} className="flex-shrink-0 relative">
            <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-white/5 shadow-2xl transition-transform duration-700 hover:scale-[1.02] relative z-10">
              <img 
                src="/images/virenmakwana.jpeg" 
                alt="Viren Makwana" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"; 
                }}
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-white/10 scale-110 -z-10"></div>
            <div className="absolute inset-0 rounded-full border border-white/5 scale-125 -z-10"></div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h2 variants={fadeIn} className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-3 tracking-wide font-light">
              Viren Makwana
            </motion.h2>
            <motion.span variants={fadeIn} className="font-label-sm text-sm lg:text-base uppercase tracking-[0.4em] text-secondary block mb-8 font-semibold text-gray-400">
              Principal Architect
            </motion.span>
            <motion.p variants={fadeIn} className="font-body-md text-gray-300 leading-relaxed text-lg max-w-2xl font-light">
              An architecturally driven professional with a refined expertise in residential and institutional design. Dedicated to meticulous spatial planning, comprehensive working drawings, and seamless consultant coordination. Adept at navigating complex compliance regulations, ensuring precise execution from conceptualization to the final built form.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SameerPashteSection = () => {
  return (
    <section className="py-24 bg-surface-container-lowest border-t border-white/5" id="sameer">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-20 max-w-5xl mx-auto py-12"
        >
          {/* Right Column: Image (using alternating design for better flow) */}
          <motion.div variants={fadeIn} className="flex-shrink-0 relative">
            <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-white/5 shadow-2xl transition-transform duration-700 hover:scale-[1.02] relative z-10">
              <img 
                src="/images/sameer-pashte.jpg" 
                alt="Ar. Sameer Pashte" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1544839655-15fa3cdd3a4b?q=80&w=800&auto=format&fit=crop"; 
                }}
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-white/10 scale-110 -z-10"></div>
            <div className="absolute inset-0 rounded-full border border-white/5 scale-125 -z-10"></div>
          </motion.div>

          {/* Left Column: Bio */}
          <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h2 variants={fadeIn} className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-3 tracking-wide font-light">
              Sameer Pashte
            </motion.h2>
            <motion.span variants={fadeIn} className="font-label-sm text-sm lg:text-base uppercase tracking-[0.4em] text-secondary block mb-8 font-semibold text-gray-400">
              Principal Architect
            </motion.span>
            <motion.p variants={fadeIn} className="font-body-md text-gray-300 leading-relaxed text-lg max-w-2xl font-light">
              A motivated and detail-oriented architecture enthusiast with a fresh perspective and a strong commitment to learning. Passionate about thoughtful design, collaborative projects, and creating meaningful spaces where every line tells a story.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div className="w-full pt-20"> {/* Padding top to clear fixed navbar */}
      {/* Page Header */}
      <section className="py-20 bg-surface-container-lowest text-center border-b border-white/5 relative z-10">
        <h1 className="text-5xl md:text-6xl font-headline-md tracking-[0.2em] text-white uppercase font-light">About Us</h1>
        <div className="w-24 h-[1px] bg-secondary mx-auto mt-8"></div>
      </section>

      <VirenMakwanaSection />
      <SameerPashteSection />
    </div>
  );
};

export default AboutUs;
