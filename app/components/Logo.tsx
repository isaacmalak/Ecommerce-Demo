import { cn } from "../utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={
        cn(className) +
        "flex items-center text-2xl font-bold text-amber-400 drop-shadow-2xl drop-shadow-amber-600"
      }
    >
      El S7s Group
    </div>
  );
}
