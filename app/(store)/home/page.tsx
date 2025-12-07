import Image from "next/image";
import { HomeBanner } from "./components/HomeBanner";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    imageUrl: "/toys-figures/superman.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    imageUrl: "/toys-figures/joker.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    imageUrl: "/toys-figures/travis.png",
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    imageUrl: "/toys-figures/billy.png",
  },
  {
    id: 5,
    name: "Product 4",
    price: 49.99,
    imageUrl: "/toys-figures/billy.png",
  },
  {
    id: 6,
    name: "Product 4",
    price: 49.99,
    imageUrl: "/toys-figures/billy.png",
  },
];
export default function HomeShell() {
  return (
    <main className="flex flex-col gap-3 p-4">
      <HomeBanner />
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex h-64 flex-col overflow-hidden rounded-lg border p-4"
          >
            {/* Check [Image element guide](/Images.md)*/}
            <Image
              src={product.imageUrl}
              alt=""
              fill
              className="h-full translate-y-10 scale-125 object-cover object-top"
            />
            <div className="absolute bottom-0 left-4 w-full px-2 py-1 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
