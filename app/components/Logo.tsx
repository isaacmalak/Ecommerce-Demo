import { cn } from "../utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={
        cn(className) +
        "text-amber-400 drop-shadow-2xl drop-shadow-amber-600 items-center font-bold text-2xl flex"
      }
    >
      El S7s Group
    </div>
  );  
}
