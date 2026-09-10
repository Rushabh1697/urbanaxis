import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const AboutFounder = () => {
  const skills = [
    "AutoCAD", "SketchUp", "Photoshop", "Lumion", "Enscape", 
    "InDesign", "Adobe Suite", "3D Modeling", "Rendering", "Drafting"
  ];

  const projects = [
    "Commercial Mixed-Use Highrise Building (Thesis)",
    "Wayside Amenities",
    "Pilgrimage Centre, Alandi",
    "Tomorrow Lab � Coworking Workshop",
    "Skill Development Centre",
    "Pluralistic Coexistence Housing"
  ];

  const interests = ["Sketching", "Modeling", "Sports", "Design Exploration"];

  return (
    <section className="py-24 bg-white text-slate-800" id="about">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 overflow-hidden">
        
        {/* Hero Intro */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mb-32"
        >
          {/* Photo */}
          <motion.div variants={fadeInUp} className="flex-shrink-0 relative">
            <div className="absolute inset-0 border border-slate-300 transform translate-x-4 translate-y-4 rounded-sm"></div>
            <div className="w-64 h-80 md:w-80 md:h-[400px] rounded-sm overflow-hidden border border-slate-200 shadow-xl relative bg-white z-10">
              <img 
                src="/images/sameer-pashte.jpg" 
                alt="Ar. Sameer Pashte" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1544839655-15fa3cdd3a4b?q=80&w=800&auto=format&fit=crop"; 
                }}
              />
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4 tracking-tight">
              Sameer Pashte
            </motion.h2>
            <motion.span variants={fadeInUp} className="text-sm md:text-base uppercase tracking-[0.3em] font-medium text-slate-500 block mb-8">
              Principle Architect
            </motion.span>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 leading-relaxed font-light italic border-l-2 border-slate-300 pl-6 mb-8">
              "A motivated and detail-oriented architecture enthusiast with a fresh perspective and a strong commitment to learning. Passionate about thoughtful design, collaborative projects, and creating meaningful spaces where every line tells a story."
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Bio & Contact */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-12"
          >
            {/* About bio text */}
            <div className="relative p-8 md:p-10 bg-white rounded-sm border border-slate-200/60 shadow-sm backdrop-blur-sm group hover:shadow-md transition-shadow duration-500">
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-slate-400"></div>
              <div className="absolute top-0 left-0 w-[1px] h-8 bg-slate-400"></div>
              
              <motion.h3 variants={fadeInUp} className="text-2xl font-medium text-slate-800 mb-6 tracking-wide">Background</motion.h3>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <motion.p variants={fadeInUp}>
                  <strong className="font-semibold text-slate-800">Education:</strong> Architecture graduate from Lokmanya Tilak Institute Of Architecture And Design Studies, Navi Mumbai.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  <strong className="font-semibold text-slate-800">Experience:</strong> Internship experience at Dilip Deshmukh & Associates, Dombivli. Hands-on experience in municipal drawings, drafting, 3D modeling, rendering, liaisoning work, and working with UDCPR.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  <strong className="font-semibold text-slate-800">Core Focus:</strong> Interested in design thinking, urban spaces, workshops, housing, and mixed-use architecture.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  <strong className="font-semibold text-slate-800">Soft Skills:</strong> Strong in problem-solving, adaptability, clear communication, and precise time management.
                </motion.p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-8 md:p-10 bg-slate-50 rounded-sm shadow-sm">
              <motion.h3 variants={fadeInUp} className="text-xl font-medium text-slate-800 mb-6 tracking-wide">Contact Details</motion.h3>
              <div className="space-y-5">
                <motion.a variants={fadeInUp} href="mailto:sameerpsht@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="p-2 border border-slate-300 rounded-full"><Mail size={18} /></div>
                  <span className="font-light tracking-wide">sameerpsht@gmail.com</span>
                </motion.a>
                <motion.a variants={fadeInUp} href="tel:+917350021704" className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="p-2 border border-slate-300 rounded-full"><Phone size={18} /></div>
                  <span className="font-light tracking-wide">+91 7350021704</span>
                </motion.a>
                <motion.div variants={fadeInUp} className="flex items-center gap-4 text-slate-600">
                  <div className="p-2 border border-slate-300 rounded-full"><MapPin size={18} /></div>
                  <span className="font-light tracking-wide">Kalyan West, Thane, Maharashtra</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills & Projects */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            {/* Skills */}
            <div>
              <motion.h3 variants={fadeInUp} className="text-2xl font-medium text-slate-800 mb-8 border-b border-slate-200 pb-4 tracking-wide">
                Technical Toolkit
              </motion.h3>
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium tracking-wide text-slate-600 uppercase shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Featured Projects */}
            <div>
              <motion.h3 variants={fadeInUp} className="text-2xl font-medium text-slate-800 mb-8 border-b border-slate-200 pb-4 tracking-wide">
                Featured Academic Projects
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="group flex flex-col justify-between p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm relative overflow-hidden"
                  >
                    <div className="absolute right-0 bottom-0 opacity-5 w-32 h-32 transform translate-x-10 translate-y-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-700">
                      <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M0 100 V0 H100" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M20 100 V20 H100" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M40 100 V40 H100" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <h4 className="text-lg font-medium text-slate-800 leading-snug mb-4 group-hover:text-slate-600 transition-colors z-10">{project}</h4>
                    <div className="w-8 h-[1px] bg-slate-400 group-hover:w-full group-hover:bg-slate-300 transition-all duration-500 z-10"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <motion.h3 variants={fadeInUp} className="text-2xl font-medium text-slate-800 mb-8 border-b border-slate-200 pb-4 tracking-wide">
                Interests & Explorations
              </motion.h3>
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-slate-600 font-light"
                  >
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span className="tracking-wide text-lg">{interest}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutFounder;
