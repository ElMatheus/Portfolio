import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationProps {
  target: number;
  duration?: number;
  trigger?: boolean;
}

export const useCounterAnimation = ({ 
  target, 
  duration = 2000, 
  trigger = true 
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!trigger) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration, trigger]);

  return count;
};