/**
     ### Home Layout Component 
     This component serves as the layout for the WHOLE store.
     It's not only for Home page but also for all other pages related to this layout.
 */
'use client';
import { ReactNode } from 'react';
import { StoreNavBar } from './components/StoreNavBar';
import { AnimatedPages } from './components/AnimatedPages';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <StoreNavBar />
      <AnimatedPages>{children}</AnimatedPages>
    </div>
  );
}
