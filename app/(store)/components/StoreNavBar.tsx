import { Logo } from '@/app/components/Logo';
import { NavItem } from './NavItem';
import { Info, PersonStandingIcon,  PhoneIcon } from 'lucide-react';

const navItems = [
  {
    name: 'Products',
    href: '/products',
    icon: <PersonStandingIcon className="h-5 w-5" />,
  },
  { name: 'About', href: '/about', icon: <Info className="h-5 w-5" /> },
  {
    name: 'Contact',
    href: '/contact',
    icon: <PhoneIcon className="h-4 w-4" />,
  },
];

export function StoreNavBar() {
  return (
    <nav className="flex h-18 items-center justify-between bg-red-900 px-6 backdrop-blur-xl">
      <Logo />
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            name={item.name}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </nav>
  );
}
