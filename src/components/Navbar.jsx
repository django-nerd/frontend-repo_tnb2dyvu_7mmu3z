import { Search, ShoppingBag, User, PlusCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">waav</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Women</a>
            <a href="#" className="hover:text-gray-900">Men</a>
            <a href="#" className="hover:text-gray-900">Kids</a>
            <a href="#" className="hover:text-gray-900">Home</a>
          </nav>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search brands, items, and more"
              className="w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
            <PlusCircle className="h-4 w-4" />
            Sell
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 h-10 w-10 hover:bg-gray-50">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search brands, items, and more"
            className="w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
