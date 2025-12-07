import { BannerImage } from "./BannerImage";

export function BannerAnimatedImages() {
  return (
    <div className="relative flex h-[230px] w-1/2 flex-row overflow-hidden">
      <BannerImage
        position="right-34 top-7 z-10 "
        src={"/toys-figures/superman.png"}
        width={200}
        height={50}
      />
      <BannerImage
        position="top-0 right-52 "
        src={"/toys-figures/joker.png"}
        width={230}
        height={70}
        animationDelay={1.6}
      />
      <BannerImage
        position="top-0 right-20 "
        src={"/toys-figures/travis.png"}
        width={150}
        height={70}
        animationDelay={0.8}
      />
      <BannerImage
        position="top-7 right-79 z-10"
        src={"/toys-figures/billy.png"}
        width={200}
        height={70}
        animationDelay={1.5}
      />
      <BannerImage
        position="top-3 right-80"
        src={"/toys-figures/homelander.png"}
        width={430}
        height={70}
        animationDelay={1.4}
      />
    </div>
  );
}

//TODO: add billy with the baby but when cropped right
