
import { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  threshold?: number; // Controls when the fade effect triggers (0 to 1)
  delay?: number; // Optional delay in milliseconds
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // When the section enters the viewport
      if (entries[0].isIntersecting) {
        // Add a small delay if specified
        if (delay) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(true);
        }
        // Once it's visible, we don't need to observe anymore
        if (domRef.current) observer.unobserve(domRef.current);
      }
    }, { threshold });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
