import React from 'react';

export interface ModalProps {
  children: string | JSX.Element | JSX.Element[];
  isOpen: boolean;
}

const AppModalV2: React.FC<ModalProps> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="Modal-a fixed  inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

      {/* Modal Content max-w-lg overflow-y-auto */}
      <div className="Modal-b max-h-full relative z-60 w-full overflow-y-auto transform overflow-hidden rounded-lg bg-white shadow-xl transition-all   my-11 sm:h-auto sm:w-auto">
        {/* Modal Body */}
        <div className="px-6 py-4">
          {children}
        </div>
        {/* Footer (optional, placeholder for buttons/actions) */}
        <div className="px-6 py-3 bg-gray-50 text-right">
          {/* Add buttons/actions here */}
        </div>
      </div>
    </div>
  );
};

export default AppModalV2;
