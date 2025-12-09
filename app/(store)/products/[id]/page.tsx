// FILE: app/products/[id]/page.tsx

import { products } from '../../home/page';
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
      <div className="flex flex-row justify-between px-6 py-6">
        {/* Images panel */}
        <ProductImagesPanel images={product.images} />
        <section></section>
      </div>
    </main>
  );
}
