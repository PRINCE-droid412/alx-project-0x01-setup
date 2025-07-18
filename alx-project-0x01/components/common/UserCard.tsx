import React from 'react';
import { UserProps } from '@/interfaces';

interface Props {
  user: UserProps;
}

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition duration-300">
      <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-700 mt-2">📧 {user.email}</p>
      <p className="text-sm text-gray-700">🌐 {user.website}</p>
      <p className="text-sm text-gray-700">📞 {user.phone}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>🏢 {user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
      </div>
      <div className="mt-2 text-xs text-gray-400 italic">
        {user.address.street}, {user.address.city}
      </div>
    </div>
  );
};

export default UserCard;
