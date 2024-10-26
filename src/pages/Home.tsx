import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Trading?</h2>
            <p className="text-xl mb-8 text-blue-100">Join professional traders who trust Nexus Replay</p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}