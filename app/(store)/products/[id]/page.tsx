// FILE: app/products/[id]/page.tsx

import { products } from '../../home/page';
import { ProductDetails } from '../components/ProductDetails';
import { ProductImagesPanel } from '../components/ProductImagesPanel';

// 1. Make the function async
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>; // 2. Type params as a Promise
}) {
  // 3. Await the params before using them
  const { id } = await params;
  const product = products[0];
  return (
    <main>
      <div className="flex flex-row items-center px-6 py-6">
        {/* Images panel */}
        <ProductImagesPanel images={product.images} />
        <div className="mx-8 h-[600px] w-px bg-white/10" />
        {/* Product details */}
        <ProductDetails product={product} />
      </div>
    </main>
  );
}
