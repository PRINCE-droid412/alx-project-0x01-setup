import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl mb-4">Posts</h1>
        <PostCard title="My First Post" content="This is a sample post content." />
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
