import { ReactNode } from "react";

export function DashboardLayout({children} : { children: ReactNode}){
     return <div className="flex w-full flex-col max-w-7xl ">
         {children}
     </div>
}