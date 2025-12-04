import { BannerImage } from "./BannerImage";

export function BannerAnimatedImages() {
  return (
    <div className="relative flex h-[230px] w-full flex-row justify-end overflow-hidden rounded-3xl">
      <BannerImage
        position=" right-34 top-5 z-10 "
        src={"/toys-figures/superman.png"}
        width={200}
        height={50}
      />
      <BannerImage
        position="top-2 right-52 "
        src={"/toys-figures/joker.png"}
        width={230}
        height={70}
      />
      <BannerImage
        position="top-0 right-20 "
        src={"/toys-figures/travis.png"}
        width={150}
        height={70}
      />
    </div>
  );
}
