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
      if (isOpen && componentRef.current && !componentRef.current.contains(event.target as Node)) {
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

const ClickOutDetection: React.FC<ClickOutsideDetectorProps> = ({ children, onClickOutside, isOpen })=> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        alert("Outside Clicked.");
        console.log("Outside Clicked.");
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div className="">
      {children}
    </div>
  );
};

export {
  ClickOutsideDetector,
  ClickOutDetection
} 
