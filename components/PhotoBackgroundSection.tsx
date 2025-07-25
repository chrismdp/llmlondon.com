import Image from 'next/image';
import { ReactNode } from 'react';

interface PhotoBackgroundSectionProps {
  photo: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: 'light' | 'medium' | 'heavy';
}

const overlayClasses = {
  light: 'bg-background/80',
  medium: 'bg-background/90', 
  heavy: 'bg-background/95'
};

/**
 * Section component with LLM London community photo background
 * Includes proper overlay for text readability
 */
export default function PhotoBackgroundSection({ 
  photo, 
  children, 
  className = '', 
  overlayOpacity = 'medium' 
}: PhotoBackgroundSectionProps) {
  return (
    <section className={`relative isolate overflow-hidden ${className}`}>
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={photo}
          alt="LLM London community event"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        {/* Overlay for text readability */}
        <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`}></div>
      </div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
}