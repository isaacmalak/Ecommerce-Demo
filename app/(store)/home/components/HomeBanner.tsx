import { BannerAnimatedImages } from "./BannerAnimatedImages";
import { BannerContent } from "./BannerContent";

export function HomeBanner() {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-red-950 p-4 md:flex-row md:gap-10 md:p-5">
      {/* left side of the banner*/}
      <BannerContent />
      {/* right side of the banner*/}
      <BannerAnimatedImages />
    </div>
  );
}
