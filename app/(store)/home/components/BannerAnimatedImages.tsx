import { BannerImage } from "./BannerImage";

export function BannerAnimatedImages() {
  return (
    <div className="relative flex h-[200px] w-full flex-row overflow-hidden md:h-[230px] md:w-1/2">
      {/* Superman - Center Right */}
      <BannerImage
        position="right-10 top-5 w-24 z-10 md:right-34 md:top-7 md:w-[200px]"
        src={"/toys-figures/superman.png"}
        width={200}
        height={50}
      />
      {/* Joker - Mid Left */}
      <BannerImage
        position="right-20 top-0 w-28 md:right-52 md:top-0 md:w-[230px]"
        src={"/toys-figures/joker.png"}
        width={230}
        height={70}
        animationDelay={1.6}
      />
      {/* Travis - Far Right */}
      <BannerImage
        position="right-2 top-0 w-20 md:right-20 md:top-0 md:w-[150px]"
        src={"/toys-figures/travis.png"}
        width={150}
        height={70}
        animationDelay={1.9}
      />
      {/* Billy - Far Left */}
      <BannerImage
        position="right-32 top-5 w-24 z-10 md:right-79 md:top-7 md:w-[200px]"
        src={"/toys-figures/billy.png"}
        width={200}
        height={70}
        animationDelay={1.5}
      />
      {/* Homelander - Furthest Left */}
      <BannerImage
        position="right-44 top-2 w-30 md:right-100 md:top-3 md:w-[240px]"
        src={"/toys-figures/homelander.png"}
        width={240}
        height={70}
        animationDelay={1.4}
      />
    </div>
  );
}

//TODO: add billy with the baby but when cropped right
