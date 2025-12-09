import { HomeBanner } from './components/HomeBanner';
import { ProductCard } from './components/ProductCard';
//TODO: remove constants
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  stock: number;
  rating: number;
  reviews: number;
  features: string[];
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Superman Figure',
    description: 'The Man of Steel. A highly detailed collectible action figure featuring Superman in his classic suit.',
    price: 29.99,
    stock: 45,
    rating: 4.8,
    reviews: 124,
    features: ['Classic suit design', 'Interchangeable hands', 'Display stand included'],
    images: [
      '/toys-figures/superman.png',
      '/toys-figures/joker.png',
      '/toys-figures/travis.png',
      '/toys-figures/billy.png',
      '/toys-figures/homelander.png',
      '/toys-figures/homelander.png',
      '/toys-figures/homelander.png',
      '/toys-figures/homelander.png',
      '/toys-figures/homelander.png',
      '/toys-figures/homelander.png',
    ],
  },
  {
    id: 2,
    name: 'The Joker Figure',
    description: "The Clown Prince of Crime. This meticulously sculpted figure captures the chaotic energy of Batman's arch-nemesis.",
    price: 39.99,
    stock: 12,
    rating: 4.9,
    reviews: 89,
    features: ['Detailed facial expression', 'Includes Joker card accessory', 'Premium articulation'],
    images: ['/toys-figures/joker.png'],
  },
  {
    id: 3,
    name: 'Travis Scott Figure',
    description: 'La Flame. A limited edition action figure of the ASTROWORLD artist, complete with signature sneakers and mic.',
    price: 19.99,
    salePrice: 14.99,
    stock: 5,
    rating: 4.7,
    reviews: 210,
    features: ['Limited Edition', 'Microphone accessory', 'Custom box art'],
    images: ['/toys-figures/travis.png'],
  },
  {
    id: 4,
    name: 'Billy Butcher Figure',
    description: 'The leader of The Boys. Rough, violent, and determined to take down Supes.',
    price: 49.99,
    stock: 28,
    rating: 4.6,
    reviews: 56,
    features: ['Trench coat fabric', 'Crowbar accessory', 'Laser baby (sold separately) compatible'],
    images: ['/toys-figures/billy.png'],
  },
  {
    id: 5,
    name: 'Homelander Figure',
    description: 'The leader of The Seven. The most powerful Superhero on Earth, with a smile that hides a terrifying nature.',
    price: 49.99,
    salePrice: 44.99,
    stock: 100,
    rating: 4.5,
    reviews: 342,
    features: ['LED light-up eyes', 'Cloth cape', 'Flight stand'],
    images: ['/toys-figures/homelander.png'],
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
