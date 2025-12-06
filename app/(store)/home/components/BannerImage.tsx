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
  const delay = animationDelay ? `${animationDelay}s` : "1.2s";

  const classString = `absolute`;
  const className = cn(classString, position);
  return (
    <>
      <style>
        {`
        @keyframes slide-up {
          from { transform: translateY(100px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1;  }
        }
        `}
      </style>
      <Image
        src={src}
        width={width}
        height={height}
        alt=""
        className={className}
        style={{
          animation: `slide-up ${delay} ease-in-out forwards`,
        }}
      />
    </>
  );
}
