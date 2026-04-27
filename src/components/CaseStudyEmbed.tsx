import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyEmbedProps {
  title: string;
  category: string;
  url: string;
  image?: string;
}

const CaseStudyEmbed: React.FC<CaseStudyEmbedProps> = ({ title, category, url, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group border border-white/10"
    >
      <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-md">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">
            {category}
          </span>
          <h3 className="text-3xl font-serif font-bold">{title}</h3>
        </div>
        <div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group/link"
          >
            {url.includes('notion.site') ? 'Case Study' : 'Project'} <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="relative w-full aspect-video md:aspect-21/9 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            <span className="text-neutral-500 font-serif italic">Preview not available</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
        
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/40 backdrop-blur-sm"
        >
          <span className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">
            {url.includes('notion.site') ? 'Read on Notion' : 'Visit Project'}
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default CaseStudyEmbed;
