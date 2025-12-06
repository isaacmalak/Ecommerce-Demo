/**
     ### Home Layout Component 
     This component serves as the layout for the WHOLE store.
     It's not only for Home page but also for all other pages related to this layout.
 */

import { ReactNode } from "react";
import { StoreNavBar } from "./components/StoreNavBar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <StoreNavBar />

      {children}
    </div>
  );
}
