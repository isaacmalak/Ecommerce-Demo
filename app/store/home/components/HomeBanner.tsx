//TODO: Refactor this component to include banner content as divided sections

import { BannerImage } from "./BannerImage";

export function HomeBanner() {
  return (
    <div className="m-6 flex flex-row justify-between gap-10 rounded-3xl
     bg-red-950 p-5">
      {/* left side of the banner*/}
      <div className="flex w-1/4 flex-col justify-center bg-black rounded-lg p-4 font-serif">
        <h2 className="text-2xl font-bold text-white opacity-80">
          Looking for DOPE figures?
        </h2>
        <p className="text-lg text-white opacity-70">
          You&apos;ve come to the right place! Browse rare and limited-edition
          figures, snag exclusive drops, and discover new pieces added weekly —
          fast shipping and authentic guarantees included.
        </p>
      </div>
      {/* right side of the banner*/}
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
    </div>
  );
}
