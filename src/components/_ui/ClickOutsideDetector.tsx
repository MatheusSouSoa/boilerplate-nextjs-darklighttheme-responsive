import React, { useEffect, useRef, ReactNode } from 'react';

interface ClickOutsideDetectorProps {
  children: ReactNode;
  onClickOutside: () => void;
  isOpen: boolean;
}

const ClickOutsideDetector: React.FC<ClickOutsideDetectorProps> = ({ children, onClickOutside, isOpen }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClickOutside, isOpen]);

  return (
    <div ref={componentRef}>
      {children}
    </div>
  );
};

export default ClickOutsideDetector;
