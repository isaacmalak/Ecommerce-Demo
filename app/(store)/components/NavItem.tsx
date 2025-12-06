import Link from "next/link";
import { ReactNode } from "react";
type navProps = {
  name: string;
  href: string;
  icon?: ReactNode;
};
export function NavItem({ name, href, icon }: navProps) {
  return (
    <Link href={href}>
      {icon}
      {name}
    </Link>
  );
}
