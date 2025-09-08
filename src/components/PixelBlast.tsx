"use client";

import React, { useEffect, useRef } from 'react';

interface PixelBlastProps {
  variant?: 'circle' | 'square' | 'hexagon';
  pixelSize?: number;
  color?: string;
  patternScale?: number;
  patternDensity?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleSpeed?: number;
  rippleThickness?: number;
  rippleIntensityScale?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  liquidWobbleSpeed?: number;
  speed?: number;
  edgeFade?: number;
  transparent?: boolean;
  className?: string;
}

const PixelBlast: React.FC<PixelBlastProps> = ({
  variant = 'circle',
  pixelSize = 6,
  color = '#B19EEF',
  patternScale = 3,
  patternDensity = 1.2,
  pixelSizeJitter = 0.5,
  enableRipples = true,
  rippleSpeed = 0.4,
  rippleThickness = 0.12,
  rippleIntensityScale = 1.5,
  liquid = true,
  liquidStrength = 0.12,
  liquidRadius = 1.2,
  liquidWobbleSpeed = 5,
  speed = 0.6,
  edgeFade = 0.25,
  transparent = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      if (!transparent) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);
      }

      timeRef.current += speed * 0.016;

      const cols = Math.floor(width / (pixelSize * patternScale));
      const rows = Math.floor(height / (pixelSize * patternScale));

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * pixelSize * patternScale;
          const y = j * pixelSize * patternScale;

          let intensity = Math.sin((i + j) * 0.1 + timeRef.current) * 0.5 + 0.5;
          
          if (enableRipples) {
            const centerX = width / 2;
            const centerY = height / 2;
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const ripple = Math.sin(distance * rippleThickness - timeRef.current * rippleSpeed * 10) * rippleIntensityScale;
            intensity *= Math.max(0, ripple);
          }

          if (liquid) {
            const wobbleX = Math.sin(x * 0.01 + timeRef.current * liquidWobbleSpeed) * liquidStrength;
            const wobbleY = Math.cos(y * 0.01 + timeRef.current * liquidWobbleSpeed) * liquidStrength;
            intensity *= Math.sin((x + wobbleX) * liquidRadius * 0.01) * 0.5 + 0.5;
            intensity *= Math.cos((y + wobbleY) * liquidRadius * 0.01) * 0.5 + 0.5;
          }

          intensity *= patternDensity;

          // Edge fade
          const edgeDistanceX = Math.min(x / width, (width - x) / width);
          const edgeDistanceY = Math.min(y / height, (height - y) / height);
          const edgeFactor = Math.min(edgeDistanceX, edgeDistanceY) / edgeFade;
          intensity *= Math.min(1, edgeFactor);

          if (intensity > 0.1) {
            const currentPixelSize = pixelSize + (Math.random() - 0.5) * pixelSizeJitter;
            const alpha = Math.min(1, intensity);
            
            // Parse color and apply alpha
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

            if (variant === 'circle') {
              ctx.beginPath();
              ctx.arc(x + currentPixelSize/2, y + currentPixelSize/2, currentPixelSize/2, 0, Math.PI * 2);
              ctx.fill();
            } else if (variant === 'square') {
              ctx.fillRect(x, y, currentPixelSize, currentPixelSize);
            } else if (variant === 'hexagon') {
              ctx.beginPath();
              const centerX = x + currentPixelSize/2;
              const centerY = y + currentPixelSize/2;
              const radius = currentPixelSize/2;
              for (let k = 0; k < 6; k++) {
                const angle = (k * Math.PI) / 3;
                const px = centerX + radius * Math.cos(angle);
                const py = centerY + radius * Math.sin(angle);
                if (k === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
              }
              ctx.closePath();
              ctx.fill();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    variant, pixelSize, color, patternScale, patternDensity, pixelSizeJitter,
    enableRipples, rippleSpeed, rippleThickness, rippleIntensityScale,
    liquid, liquidStrength, liquidRadius, liquidWobbleSpeed, speed, edgeFade, transparent
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default PixelBlast;