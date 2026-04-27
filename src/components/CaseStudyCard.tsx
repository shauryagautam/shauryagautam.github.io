import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  href: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, category, description, image, metrics, href }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group block glass-card p-4 md:p-8 hover:bg-white/20 dark:hover:bg-neutral-900/40"
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 mb-8">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
            <ArrowUpRight className="text-neutral-950" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-2">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {category}
            </span>
            <h3 className="text-3xl font-serif font-bold group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="flex gap-8 mt-4 border-t border-white/10 pt-6">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-xl font-bold font-serif">{metric.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default CaseStudyCard;
