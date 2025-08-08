import React from 'react';

type modelTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CreateModal: React.FC<modelTypes> = ({ open, onClose, children }) => {
  if (!open) return null; // No renderiza si no está abierto

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 relative min-w-[300px] max-w-[90%]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <div className='text-black text-2xl'>
            {children}
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
