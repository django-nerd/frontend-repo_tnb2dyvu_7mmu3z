import { Heart } from "lucide-react";

const demoProducts = [
  {
    id: 1,
    title: "Levi's 501 Original Jeans",
    price: 38,
    size: "M",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop",
    condition: "Good",
  },
  {
    id: 2,
    title: "Nike Air Force 1",
    price: 72,
    size: "42",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
    condition: "Very good",
  },
  {
    id: 3,
    title: "Vintage Leather Jacket",
    price: 120,
    size: "L",
    image: "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZWF0aGVyJTIwSmFja2V0fGVufDB8MHx8fDE3NjI0MzAwODF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    condition: "Good",
  },
  {
    id: 4,
    title: "Zara Linen Shirt",
    price: 22,
    size: "S",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    condition: "Like new",
  },
  {
    id: 5,
    title: "Converse Chuck Taylor",
    price: 40,
    size: "41",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    condition: "Good",
  },
  {
    id: 6,
    title: "Mango Satin Dress",
    price: 35,
    size: "M",
    image: "https://images.unsplash.com/photo-1617744257651-40b1fef11b5a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYW5nbyUyMFNhdGluJTIwRHJlc3N8ZW58MHwwfHx8MTc2MjQzMDA4MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    condition: "Very good",
  },
];

function ProductCard({ product }) {
  return (
    <a href="#" className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur h-9 w-9 border border-gray-200 hover:bg-white">
          <Heart className="h-4 w-4 text-gray-700" />
        </button>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h3>
          <span className="ml-2 inline-flex shrink-0 items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{product.size}</span>
        </div>
        <div className="mt-1 flex items-center justify-between text-sm text-gray-600">
          <span>{product.condition}</span>
          <span className="font-semibold text-gray-900">${product.price}</span>
        </div>
      </div>
    </a>
  );
}

function ProductGrid({ title = 'Fresh finds' }) {
  return (
    <section id="browse" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {demoProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
