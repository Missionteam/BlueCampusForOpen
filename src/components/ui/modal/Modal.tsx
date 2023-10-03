import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
         <button
          onClick={onClose}
          className="float-right text-lg font-bold transform hover:scale-110"
        >
          ×
        </button>  */}
        {children}
      {/* </div> */}
    </div>
  );
};

export default Modal;