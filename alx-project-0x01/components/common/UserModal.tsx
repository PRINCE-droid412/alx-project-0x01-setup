import React from 'react';
import { UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">User Details</h2>
        <p className="text-sm text-gray-700"><strong>Name:</strong> {user.name}</p>
        <p className="text-sm text-gray-700"><strong>Email:</strong> {user.email}</p>
        <p className="text-sm text-gray-700"><strong>Username:</strong> {user.username}</p>
        <p className="text-sm text-gray-700"><strong>Phone:</strong> {user.phone}</p>
        <p className="text-sm text-gray-700"><strong>Website:</strong> {user.website}</p>
        <div className="mt-3 text-xs text-gray-500">
          <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
