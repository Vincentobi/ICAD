import { useEffect, useRef, useState } from 'react';

function useCountUp(end, duration = 3000) {
  const [value, setValue] = useState(0);
  const raf = useRef();

  useEffect(() => {
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.floor(eased * end);

      setValue(current);

      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      }
    };

    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [end, duration]);

  return value;
}

function easeOutQuart(t) {
  return 1 - --t * t * t * t;
}

/**
 * CountUp that only animates when the element enters the viewport.
 */
export default function CountUpOnScroll({
  end,
  duration = 3000,
  locale = true,
  prefix = '',
  suffix = '',
  className = '',
  // IntersectionObserver options
  threshold = 0.5,
  once = true, // count only once per scroll
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Watch for scroll-into-view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  const count = useCountUp(end, duration, isVisible);
  const formatted = locale ? count.toLocaleString() : count;

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}