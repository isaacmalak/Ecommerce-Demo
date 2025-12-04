import { cn } from "@/app/utils/cn";
import Image from "next/image";

export function BannerImage({
  position,
  src,
  width,
  height,
}: {
  position: string;
  src: string;
  width: number;
  height: number;
}) {

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
      className={cn("absolute  animate-[slide-up_1.0s_ease-out_forwards]", position)}
      />
      </>
  );

}

