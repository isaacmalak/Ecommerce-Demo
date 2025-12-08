import Image from 'next/image';
import { Product } from '../page';
import Link from 'next/link';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={''}
      className="group relative flex h-64 flex-col overflow-hidden rounded-3xl bg-red-900/20 p-4"
    >
      {/* Check [Image element guide](/Images.md)*/}
      <Image
        src={product.imageUrl}
        alt=""
        fill
        className="h-full translate-y-10 scale-125 object-cover object-top duration-900 group-hover:scale-150 group-hover:transform group-hover:transition group-hover:duration-500"
      />
      <div className="absolute bottom-0 left-4 w-full px-2 py-1 backdrop-blur-sm">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-white">${product.price}</p>
      </div>
    </Link>
  );
}
