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
    <main>
      <HomeBanner />
      <div className="grid grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="h-1/4 overflow-hidden rounded-lg border p-4"
          >
            <Image
              src={product.imageUrl}
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
