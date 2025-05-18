
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    price: "₦50,000",
    period: "per month",
    description: "Perfect for small estates just getting started",
    features: [
      "Up to 50 housing units",
      "Visitor management",
      "Basic financial reporting",
      "Standard support",
      "Mobile app access",
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "₦100,000",
    period: "per month",
    description: "Comprehensive solution for medium-sized estates",
    features: [
      "Up to 200 housing units",
      "Advanced visitor management",
      "Complete financial transparency",
      "Priority support",
      "Mobile app access",
      "Facility booking system",
      "Automated levy collection"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact for pricing",
    description: "Tailored solution for large estate complexes",
    features: [
      "Unlimited housing units",
      "Custom integrations",
      "Advanced security features",
      "Dedicated account manager",
      "White-label mobile app",
      "Custom reporting",
      "API access",
      "Multi-estate management"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your estate's needs. All plans include our core features with additional capabilities as you scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden shadow-lg border ${
                plan.highlighted 
                  ? 'border-primary-500 relative bg-white' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary-600 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button 
                  variant={plan.highlighted ? "default" : "outline"} 
                  className="w-full mb-8"
                >
                  Get Started
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-primary-500' : 'text-gray-500'
                      }`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
