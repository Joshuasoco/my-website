import React, { useEffect } from 'react';
import { CircleX } from 'lucide-react';
export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }

    // Cleanup on unmount or when isOpen changes
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <span className='x-hover'>
            <CircleX 
            color='#363636' 
            size={20} 
            strokeWidth={1.5}
            />
          </span>
        </button>
        {children}
      </div>
    </div>
  );
}
