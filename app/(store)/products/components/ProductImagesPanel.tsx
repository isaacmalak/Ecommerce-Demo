'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ProductImagesPanel({ images }: { images: string[] }) {
  const [image, setImage] = useState(images[0]);
  return (
    <div className="flex w-1/4 flex-col items-center border px-4 py-7">
      <div className="relative h-125 w-full border">
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
      <div className="flex flex-row">
        {images.map((imgSrc, index) => (
          <button
            key={index}
            onClick={() => setImage(imgSrc)}
            className="relative m-2 h-20 w-20 cursor-pointer border"
          >
            <Image key={index} src={imgSrc} alt="" fill />
          </button>
        ))}
      </div>
    </div>
  );
}
