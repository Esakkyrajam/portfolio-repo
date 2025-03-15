
// Scroll observer utility
export const createScrollObserver = (
  selector: string,
  className: string = 'is-visible',
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          // Uncomment to hide elements when they're not in view
          // entry.target.classList.remove(className);
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

// Initialize scroll animations
export const initScrollAnimations = () => {
  // Basic fade in animations
  createScrollObserver('.fade-up', 'animate-fade-in');
  createScrollObserver('.fade-right', 'animate-fade-in-right');
  createScrollObserver('.fade-left', 'animate-fade-in-left');
  
  // Scale animations
  createScrollObserver('.scale-in', 'animate-scale-in');
  
  // Custom animations for specific elements
  createScrollObserver('.progress-ring-animate', 'animate-progress');
  
  // Staggered animations for lists
  const staggeredItems = document.querySelectorAll('.stagger-item');
  staggeredItems.forEach((item, index) => {
    item.setAttribute('style', `animation-delay: ${index * 0.1}s`);
  });
};

// Check if an element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Smooth scroll to element
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Parallax effect on scroll
export const parallaxOnScroll = (element: HTMLElement, speed: number = 0.5): void => {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
};
