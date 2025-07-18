import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

const UsersPage: React.FC = () => {
  const handleClick = () => alert('Button clicked!');

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl mb-4">Users</h1>
        <Button label="Click Me" onClick={handleClick} />
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
