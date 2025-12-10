import { Product } from '../../home/page';
import { ProductActions } from './ProductActions';

export function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="w-full max-w-md text-zinc-400">
      <div className="w-full rounded-3xl bg-[#0a0a0a] p-6 ring-1 ring-white/10">
        <ProductHeader
          name={product.name}
          rating={product.rating}
          reviews={product.reviews}
        />

        <ProductPrice price={product.price} salePrice={product.salePrice} />

        <ProductDescription description={product.description} />

        <ProductFeatures features={product.features} />

        <ProductActions stock={product.stock} />
      </div>
    </section>
  );
}

function ProductHeader({
  name,
  rating,
  reviews,
}: {
  name: string;
  rating: number;
  reviews: number;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight text-white">{name}</h1>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 text-yellow-500 ring-1 ring-yellow-500/20">
          <span className="text-sm">★</span>
          <span className="text-sm font-bold">{rating}</span>
        </div>
        <button className="cursor-pointer text-xs font-medium text-zinc-500 underline decoration-zinc-700 underline-offset-4 transition hover:text-zinc-300 hover:decoration-zinc-500">
          {reviews} Verified Reviews
        </button>
      </div>
    </>
  );
}

function ProductPrice({
  price,
  salePrice,
}: {
  price: number;
  salePrice?: number;
}) {
  if (salePrice) {
    const discount = Math.round(((price - salePrice) / price) * 100);
    return (
      <div className="mt-6 flex items-baseline gap-3">
        <p className="text-3xl font-bold tracking-tight text-white">
          ${salePrice}
        </p>
        <div className="flex flex-col items-start">
          <p className="text-sm font-medium text-zinc-500 line-through decoration-zinc-600">
            ${price}
          </p>
          <span className="text-[10px] font-bold tracking-wider text-red-400 uppercase">
            Save {discount}%
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-3xl font-bold tracking-tight text-white">${price}</p>
    </div>
  );
}

function ProductDescription({ description }: { description: string }) {
  return <p className="mt-5 text-sm leading-6 text-zinc-400">{description}</p>;
}

function ProductFeatures({ features }: { features: string[] }) {
  if (!features?.length) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
        Highlights
      </h3>
      <ul className="mt-3 grid gap-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-zinc-900/50 px-3 py-2 text-zinc-300"
          >
            <svg
              className="h-4 w-4 shrink-0 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
