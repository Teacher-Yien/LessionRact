import React from 'react';
import { Slidebar } from './Slidebar';
import { Content } from './Content';

export const Index = () => {
  return (
    <div className="flex h-screen w-full relative">
      <aside className="w-1/5 bg-gray-50 shadow-lg h-full sticky top-0">
        <Slidebar />
      </aside>
      <main className="w-4/5 ">
        <Content />
      </main>
    </div>
  );
};