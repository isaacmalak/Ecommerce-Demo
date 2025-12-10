// FILE: app/products/[id]/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';
import { Product, products } from '../../home/page';
import { ProductDetails } from '../components/ProductDetails';
import { ProductImagesPanel } from '../components/ProductImagesPanel';

// 1. Make the function async
export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>; // 2. Type params as a Promise
}) {
  // 3. Await the params before using them

  const search = useSearchParams();
  const product = search.get('product') as unknown as Product;
  const parsedProduct = JSON.parse(product as unknown as string) as Product;
  return (
    <main>
      <div className="flex flex-row items-center px-6 py-6">
        {/* Images panel */}
        <ProductImagesPanel images={parsedProduct.images} />
        <div className="mx-8 h-[600px] w-px bg-white/10" />
        {/* Product details */}
        <ProductDetails product={parsedProduct} />
      </div>
    </main>
  );
}
