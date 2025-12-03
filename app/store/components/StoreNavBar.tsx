import { NavItem } from "./NavItem";

const navItems = [
  { name: "Home", href: "/store" },
  { name: "Products", href: "/store/products" },
  { name: "About", href: "/store/about" },
  { name: "Contact", href: "/store/contact" },
];

export function StoreNavBar() {
  return (
    <div className="flex justify-between h-23">
        
      {navItems.map((item) => (
        <NavItem key={item.href} name={item.name} href={item.href} />
      ))}
    </div>
  );
}
