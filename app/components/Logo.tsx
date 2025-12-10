import Link from 'next/link';
import { cn } from '../utils/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      className="text-center transition-transform duration-300 hover:-translate-y-1"
      href={'/home'}
    >
      <h1
        className={cn(
          'text-5xl font-bold text-yellow-400 drop-shadow-[4px_4px_0px_rgba(255,115,0,1)]',
          className
        )}
      >
        El S7s Group
      </h1>
    </Link>
  );
}
