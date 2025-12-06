import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div className="flex w-full max-w-7xl flex-col">{children}</div>;
}
