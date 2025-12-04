//TODO: Refactor this component to include banner content as divided sections

import { BannerAnimatedImages } from "./BannerAnimatedImages";
import { BannerContent } from "./BannerContent";

export function HomeBanner() {
  return (
    <div className="m-6 flex flex-row justify-between gap-10 rounded-3xl bg-red-950 p-5">
      {/* left side of the banner*/}
      <BannerContent />
      {/* right side of the banner*/}
      <BannerAnimatedImages />
    </div>
  );
}
