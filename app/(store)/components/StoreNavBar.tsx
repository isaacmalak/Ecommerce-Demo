import { Logo } from '@/app/components/Logo';
import { NavItem } from './NavItem';

const navItems = [
  { name: 'Home', href: '/home' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function StoreNavBar() {
  return (
    <nav className="flex h-18 items-center justify-between bg-red-900 px-6 backdrop-blur-xl">
      <Logo />
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <NavItem key={item.href} name={item.name} href={item.href} />
        ))}
      </div>
    </nav>
  );
}
