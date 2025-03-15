
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    // Split text into words and wrap each with a span
    const words = heading.innerText.split(' ');
    heading.innerHTML = words
      .map(
        (word, index) =>
          `<span class="inline-block transform opacity-0 translate-y-8" style="transition-delay: ${
            index * 0.1 + 0.3
          }s;">${word}</span>`
      )
      .join(' ');

    // Animate each word
    const spans = heading.querySelectorAll('span');
    setTimeout(() => {
      spans.forEach((span) => {
        span.classList.add('transform-none', 'opacity-100');
        span.classList.remove('translate-y-8');
      });
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-load mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Full-Stack Developer
            </span>
          </div>

          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 ease-out-expo text-balance"
          >
            Hi, I'm Esakky Raja M
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-700 delay-[600ms] ease-out-expo text-balance" style={{
            opacity: 1,
            transform: 'none'
          }}>
            I build exceptional and accessible digital experiences for the web.
          </p>

          <div className="space-x-4 opacity-0 transform translate-y-8 transition-all duration-700 delay-[800ms] ease-out-expo" style={{
            opacity: 1,
            transform: 'none'
          }}>
            <a
              href="#projects"
              className="btn-primary inline-flex items-center rounded-full px-4 py-3"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="btn-outline rounded-full px-4 py-3"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', opacity: 1 }}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll down"
            className="inline-block animate-float"
          >
            <svg
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="34"
                rx="11"
                className="stroke-current"
                strokeWidth="2"
              />
              <circle
                className="animate-float fill-current"
                cx="12"
                cy="12"
                r="4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
