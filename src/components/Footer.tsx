
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-lg font-bold">
              <span className="text-primary">Esakky</span> Raja M
            </a>
            <p className="text-sm text-foreground/60 mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
          
          <div className="hidden md:block text-right">
            <h4 className="font-medium">Quick Links</h4>
            <div className="flex space-x-4 mt-1">
              <a href="#about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
