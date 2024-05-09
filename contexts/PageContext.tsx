"use client"

import React, { createContext, useState, ReactNode } from 'react';

interface PageContextType {
  currentPage: string;
  setPage: (pageName: string) => void;
}

const PageContext = createContext<PageContextType>({
  currentPage: '',
  setPage: () => {},
});

const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const setPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <PageContext.Provider value={{ currentPage, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };