import { Product } from '../../home/page';

export function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="w-1/2">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-white">{product.name}</h1>
        <p className="mt-4 text-2xl font-semibold text-white">
          ${product.price}
        </p>
      </div>
    </section>
  );
}
