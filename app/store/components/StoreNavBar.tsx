import { Logo } from "@/app/components/Logo";
import { NavItem } from "./NavItem";

const navItems = [
  { name: "Home", href: "/store" },
  { name: "Products", href: "/store/products" },
  { name: "About", href: "/store/about" },
  { name: "Contact", href: "/store/contact" },
];

export function StoreNavBar() {
  return (
    <div className="flex justify-between h-23 backdrop-blur-xl bg-red-900 px-6 items-center"> 
    <Logo /> 
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <NavItem key={item.href} name={item.name} href={item.href} />
        ))}
      </div>
    </div>
  );
}
