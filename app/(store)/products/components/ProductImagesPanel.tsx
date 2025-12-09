'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ProductImagesPanel({ images }: { images: string[] }) {
  const [image, setImage] = useState(images[0]);
  return (
    <div className="flex w-1/4 flex-col items-center rounded-3xl bg-[#34000030] p-6">
      <div className="relative h-100 w-full rounded-2xl bg-red-800/5 p-5">
        <div className="relative h-full w-full">
          <Image
            key={image}
            src={image}
            fill
            alt=""
            className="object-contain opacity-0 transition-opacity duration-750 data-[loaded=true]:opacity-100"
            onLoadingComplete={(img) => {
              img.setAttribute('data-loaded', 'true');
            }}
          />
        </div>
      </div>
      <div
        onWheel={(wheelEvent) => {
          wheelEvent.currentTarget.scrollLeft += wheelEvent.deltaY;
          wheelEvent.preventDefault();
        }}
        className="scrollbar-thumb-red-950 scrollbar-thin scrollbar-track-red-400/10 w-full overflow-x-scroll"
      >
        <div className="flex min-w-max flex-row gap-2 py-4">
          {images.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setImage(imgSrc)}
              className="relative h-30 w-20 cursor-pointer"
            >
              <Image
                key={index}
                src={imgSrc}
                alt=""
                fill
                className="object-scale-down"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
