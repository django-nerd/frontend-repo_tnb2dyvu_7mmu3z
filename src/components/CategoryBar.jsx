const categories = [
  { name: 'Trending' },
  { name: 'Tops' },
  { name: 'Jeans' },
  { name: 'Shoes' },
  { name: 'Dresses' },
  { name: 'Outerwear' },
  { name: 'Bags' },
  { name: 'Accessories' },
];

function CategoryBar({ onSelect }) {
  return (
    <div className="sticky top-16 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onSelect?.(cat.name)}
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
