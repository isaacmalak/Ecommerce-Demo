/**
     ### Home Layout Component 
     This component serves as the layout for the WHOLE store.
     It's not only for Home page but also for all other pages related to this layout.
 */
'use client';
import { ReactNode } from 'react';
import { StoreNavBar } from './components/StoreNavBar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function HomeLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  return (
    <div>
      <StoreNavBar />
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
