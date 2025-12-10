'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export function ProductImagesPanel({ images }: { images: string[] }) {
  const [image, setImage] = useState(images[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent ANY scrolling of the parent page
      e.preventDefault();
      e.stopPropagation();

      // Manually scroll this container horizontally
      container.scrollLeft += e.deltaY;
    };

    // { passive: false } is REQUIRED to be able to call e.preventDefault()
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="flex w-1/2 justify-end">
      <div className="flex max-h-[650px] w-2/3 flex-col items-center rounded-3xl bg-[#34000030] p-6">
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
          ref={scrollContainerRef}
          className="scrollbar-thumb-red-950 scrollbar-thin scrollbar-track-red-400/10 w-full overflow-x-scroll"
        >
          <div className="flex min-w-max flex-row justify-center gap-2 py-4">
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
    </div>
  );
}
