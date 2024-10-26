import { Zap, Shield, BarChart3, Code2, Laptop, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    title: "Lightning Fast",
    description: "Test thousands of scenarios in seconds with our optimized engine"
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Risk Analysis",
    description: "Comprehensive risk metrics and performance analytics"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
    title: "Advanced Charts",
    description: "Professional-grade charting with multiple timeframes"
  },
  {
    icon: <Code2 className="h-8 w-8 text-blue-500" />,
    title: "Custom Strategies",
    description: "Write and test custom strategies in Python or JavaScript"
  },
  {
    icon: <Laptop className="h-8 w-8 text-blue-500" />,
    title: "Cloud Powered",
    description: "Access your strategies and results from anywhere"
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-500" />,
    title: "Real-time Data",
    description: "Connect to live market data for real-time testing"
  }
];

export function Features() {
  return (
    <section id="features" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Advanced Features for Professional Traders</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}