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
  animationDelay?: string;
}) {
  if (!animationDelay) {
    animationDelay = "1.0s";
  }
  const className = cn(
    `absolute animate-[slide-up_${animationDelay}_ease-out_forwards]`,
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
