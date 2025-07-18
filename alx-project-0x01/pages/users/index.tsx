import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  posts: UserProps[];
}

// ✅ Get static props for pre-rendering
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

// ✅ Users page
const UsersPage: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl mb-6">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;