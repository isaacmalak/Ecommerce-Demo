import { cn } from "@/app/utils/cn";
import Image from "next/image";

export function BannerImage({
  position,
  src,
  width,
  height,
  animationDelay,
}: {
  position: string;
  src: string;
  width: number;
  height: number;
  animationDelay?: number;
}) {
  const className = cn(
    `absolute animate-[slide-up_${animationDelay}s_ease-out_forwards]`,
    position,
  );
  return (
    <>
      <style>
        {`
        @keyframes slide-up {
          from { transform: translateY(100px); }
          to   { transform: translateY(0); }
        }
        `}
      </style>
      <Image
        src={src}
        width={width}
        height={height}
        alt=""
        className={className}
      />
    </>
  );
}
