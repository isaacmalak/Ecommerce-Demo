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
    <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
      <div className="flex w-full max-w-lg flex-col items-center rounded-3xl bg-[#34000030] p-4 lg:max-h-[650px] lg:w-2/3 lg:p-6">
        <div className="relative h-72 w-full rounded-2xl bg-red-800/5 p-5 md:h-96 lg:h-100">
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
                className="relative h-20 w-16 cursor-pointer md:h-30 md:w-20"
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
