'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ProductImagesPanel({ images }: { images: string[] }) {
  const [image, setImage] = useState(images[0]);
  return (
    <div className="flex w-1/4 flex-col items-center rounded-3xl bg-[#34000030] p-6">
      <div className="relative h-100 w-full rounded-2xl bg-red-800/5 p-30">
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
      <div className="w-full overflow-auto">
        <div className="flex min-w-max list-inside flex-row gap-2 overflow-x-auto pt-4">
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
