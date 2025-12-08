import { HomeBanner } from "./components/HomeBanner";
import { ProductCard } from "./components/ProductCard";
//TODO: remove constants
export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
const products: Product[] = [
  {
    id: 1,
    name: "Superman Figure",
    price: 29.99,
    imageUrl: "/toys-figures/superman.png",
  },
  {
    id: 2,
    name: "The Joker Figure",
    price: 39.99,
    imageUrl: "/toys-figures/joker.png",
  },
  {
    id: 3,
    name: "Travis Scott Figure",
    price: 19.99,
    imageUrl: "/toys-figures/travis.png",
  },
  {
    id: 4,
    name: "Billy Butcher Figure",
    price: 49.99,
    imageUrl: "/toys-figures/billy.png",
  },
  {
    id: 5,
    name: "Homelander Figure",
    price: 49.99,
    imageUrl: "/toys-figures/homelander.png",
  },
];
export default function HomeShell() {
  return (
    <main className="flex flex-col gap-3 p-4">
      <HomeBanner />
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
