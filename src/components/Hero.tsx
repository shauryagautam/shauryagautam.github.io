import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, XIcon, InstagramIcon, TelegramIcon, SocialLinks, type SocialLink } from './SocialIcons';

/**
 * Hero component - Main landing section with personal introduction and social links
 * 
 * Features:
 * - Animated background elements with glassmorphic design
 * - Personal introduction with call-to-action
 * - Social media links with hover animations
 * - Responsive design with mobile-first approach
 */
const Hero = () => {
  const socialLinks: SocialLink[] = [
    { icon: <LinkedInIcon size={24} />, href: "https://www.linkedin.com/in/shaurya13/", label: "LinkedIn" },
    { icon: <GitHubIcon size={24} />, href: "https://github.com/shauryagautam", label: "GitHub" },
    { icon: <XIcon size={22} />, href: "https://x.com/Shaurya1309", label: "X" },
    { icon: <InstagramIcon size={24} />, href: "https://www.instagram.com/mr.shauryagautam/", label: "Instagram" },
    { icon: <TelegramIcon size={24} />, href: "https://t.me/Shshaurya", label: "Telegram" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
              Data-Driven Product Management
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-8 text-balance tracking-tight drop-shadow-sm">
              Product Builder. <span className="italic text-accent animate-pulse-slow">Operator</span>. Founder.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl leading-relaxed font-light">
              Founder of Shaurya&Company. Architecting high-scale digital products and growth frameworks from zero.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="px-8 py-4 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-full font-medium hover:scale-105 transition-transform"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-neutral-200 dark:border-neutral-800 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

          {/* Social Orbit Section */}
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            >
              {/* Outer Orbit Circle */}
              <div className="absolute inset-0 dashed-border animate-[spin_60s_linear_infinite] opacity-50" />
              
              {/* Profile Image in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white dark:border-neutral-900 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] z-10 group/img transition-all duration-700">
                  <img 
                    src="/images/hero-profile.png" 
                    alt="Shaurya Kumar" 
                    className="w-full h-full object-cover scale-110 group-hover/img:scale-100 transition-transform duration-700 brightness-110 contrast-105"
                  />
                  <div className="absolute inset-0 bg-accent/5 mix-blend-overlay group-hover/img:opacity-0 transition-opacity duration-700" />
                </div>
                {/* Decorative glow behind image */}
                <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-accent/30 rounded-full blur-[80px] z-0 opacity-60" />
              </div>

              {/* Orbiting Icons */}
              {socialLinks.map((social, index) => {
                const angle = (index * 360) / socialLinks.length;
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    initial={{ rotate: angle }}
                    animate={{ rotate: angle + 360 }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    style={{
                      width: "100%",
                      height: 0,
                      transformOrigin: "center left",
                    }}
                  >
                    <div className="absolute right-0 -translate-y-1/2 flex items-center justify-center">
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ scale: 1.2, rotate: -angle }}
                        animate={{ rotate: -(angle + 360) }}
                        transition={{ 
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 0.2 }
                        }}
                        className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center shadow-lg border border-neutral-100 dark:border-neutral-800 text-neutral-500 hover:text-accent transition-colors z-20"
                      >
                        {social.icon}
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-neutral-300 to-transparent dark:from-neutral-700" />
      </motion.div>
    </section>
  );
};

export default Hero;
