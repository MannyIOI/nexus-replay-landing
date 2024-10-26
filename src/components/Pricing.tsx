import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for beginners and hobby traders",
    features: [
      "Up to 5 trading strategies",
      "1 year historical data",
      "Basic technical indicators",
      "Email support",
      "Daily market updates",
      "Community access"
    ]
  },
  {
    name: "Professional",
    price: "$99",
    description: "For serious traders and small teams",
    features: [
      "Unlimited trading strategies",
      "5 years historical data",
      "Advanced technical indicators",
      "Priority support",
      "Real-time market data",
      "API access",
      "Custom indicators",
      "Team collaboration"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For institutions and large teams",
    features: [
      "Everything in Professional",
      "Unlimited historical data",
      "Custom development",
      "Dedicated support",
      "Private cloud deployment",
      "SLA guarantee",
      "Custom integrations"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your trading needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-500 to-blue-600 transform scale-105'
                  : 'bg-gray-800'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-300">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}