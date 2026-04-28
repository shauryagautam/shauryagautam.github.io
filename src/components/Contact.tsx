import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, XIcon, InstagramIcon, TelegramIcon } from './SocialIcons';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Let's build the <span className="italic text-neutral-400">future</span> together.
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-md">
              Whether you have a specific project in mind or just want to chat about product strategy, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:shauryagautam139@outlook.com"
                className="flex items-center gap-4 text-2xl font-serif font-bold hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                shauryagautam139@outlook.com
              </a>

              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: <LinkedInIcon size={20} />, href: "https://www.linkedin.com/in/shaurya13/", label: "LinkedIn" },
                  { icon: <GitHubIcon size={20} />, href: "https://github.com/shauryagautam", label: "GitHub" },
                  { icon: <XIcon size={18} />, href: "https://x.com/Shaurya1309", label: "X" },
                  { icon: <InstagramIcon size={20} />, href: "https://www.instagram.com/mr.shauryagautam/", label: "Instagram" },
                  { icon: <TelegramIcon size={20} />, href: "https://t.me/Shshaurya", label: "Telegram" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-accent transition-all hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900/50 p-12 rounded-[40px] border border-neutral-100 dark:border-neutral-800">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif font-bold">Message Sent!</h3>
                <p className="text-neutral-500">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-400">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Steve Jobs"
                    className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-accent transition-colors text-xl font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-400">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="steve@apple.com"
                    className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-accent transition-colors text-xl font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="How can I help you?"
                    className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-accent transition-colors text-xl font-serif resize-none"
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full py-6 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
