import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Trending');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <CategoryBar onSelect={setSelectedCategory} />
      <main>
        <ProductGrid title={`${selectedCategory} picks`} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
