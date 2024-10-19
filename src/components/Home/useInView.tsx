import { useState, useEffect } from 'react';

const useInView = (options: IntersectionObserverInit): [(element: HTMLDivElement | null) => void, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element, options]);

  return [setElement, isVisible];
};

export default useInView;
