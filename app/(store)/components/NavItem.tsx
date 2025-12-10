import Link from 'next/link';
import { ReactNode } from 'react';
type navProps = {
  name: string;
  href: string;
  icon: ReactNode;
};
export function NavItem({ name, href, icon }: navProps) {
  return (
    <Link href={href} className="rounded-full bg-red-950 px-4 py-3">
      <div className="flex flex-row items-center justify-center gap-2">
        {name}
        <div>{icon}</div>
      </div>
    </Link>
  );
}
