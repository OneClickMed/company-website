import React from 'react';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4">Are you sure you want to delete this article ?</p>
        <div className="flex justify-between">
          <button className="px-6 py-2 bg-ocmyellow text-white rounded hover:bg-red-600" onClick={onConfirm}>Delete</button>
          <button className="px-6 py-2 bg-ocmblue text-white rounded hover:bg-gray-500" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
