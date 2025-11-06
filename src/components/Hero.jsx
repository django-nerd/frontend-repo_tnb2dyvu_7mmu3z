import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1">
            Community marketplace
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
            Buy and sell fashion with waav
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Turn your wardrobe into cash and discover unique pieces from people like you. Safe payments, buyer protection, and fast shipping.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors">
              Start selling
            </a>
            <a href="#browse" className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50">
              Browse items
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <div>
              Trusted by 2M+ members
            </div>
            <div>
              Buyer & seller protection
            </div>
          </div>
        </div>
        <div className="relative h-[420px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <Spline scene="https://prod.spline.design/2LkLQv3m6EK5bY1W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
