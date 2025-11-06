function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-600">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="text-lg font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">waav</span>
            </span>
          </div>
          <p className="text-gray-600 max-w-sm">
            A community-powered marketplace to buy and sell fashion you love. Secure payments and buyer protection included.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Discover</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Women</a></li>
            <li><a href="#" className="hover:text-gray-900">Men</a></li>
            <li><a href="#" className="hover:text-gray-900">Kids</a></li>
            <li><a href="#" className="hover:text-gray-900">Vintage</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-900">Buying</a></li>
            <li><a href="#" className="hover:text-gray-900">Selling</a></li>
            <li><a href="#" className="hover:text-gray-900">Safety</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Press</a></li>
            <li><a href="#" className="hover:text-gray-900">Legal</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} waav. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
