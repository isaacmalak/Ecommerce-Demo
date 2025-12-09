'use client';

import { Product } from '../../home/page';
import { motion } from 'framer-motion';

export function ProductDetails({ product }: { product: Product }) {
  return (
    <motion.section className="w-full max-w-md text-zinc-400">
      <div className="w-full rounded-3xl bg-[#0a0a0a] p-6 ring-1 ring-white/10">
        <motion.div>
          <ProductHeader
            name={product.name}
            rating={product.rating}
            reviews={product.reviews}
          />
        </motion.div>

        <motion.div>
          <ProductPrice price={product.price} salePrice={product.salePrice} />
        </motion.div>

        <motion.div>
          <ProductDescription description={product.description} />
        </motion.div>

        <motion.div>
          <ProductFeatures features={product.features} />
        </motion.div>

        <motion.div>
          <ProductActions stock={product.stock} />
        </motion.div>
      </div>
    </motion.section>
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
        <span className="cursor-pointer text-xs font-medium text-zinc-500 underline decoration-zinc-700 underline-offset-4 transition hover:text-zinc-300 hover:decoration-zinc-500">
          {reviews} Verified Reviews
        </span>
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

function ProductActions({ stock }: { stock: number }) {
  return (
    <div className="mt-6 border-t border-white/10 pt-6">
      {stock < 20 && (
        <div className="mb-4 flex w-fit items-center gap-2 rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-amber-500">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-xs font-bold">Only {stock} left</p>
        </div>
      )}

      <div className="flex gap-3">
        <button className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-base font-bold text-black shadow-lg shadow-white/5 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Add to Cart
        </button>
        <button className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
