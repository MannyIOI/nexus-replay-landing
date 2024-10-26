import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-32 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-8">
        Replay Your Trading Journey
        <span className="text-blue-500"> With Precision</span>
      </h1>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Nexus Replay is your professional-grade backtesting platform. Analyze, optimize, and validate your trading strategies with institutional-grade precision.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
          <span>Start Free Trial</span>
          <ArrowRight className="h-5 w-5" />
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg transition-colors">
          View Demo
        </button>
      </div>
    </section>
  );
}