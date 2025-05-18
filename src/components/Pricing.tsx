
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  CardTitle,
  CardDescription
} from '@/components/ui/card';

const pricingPlans = [
  {
    name: "Standard Plan",
    description: "For smaller estates",
    housesLimit: "Up to 20 Houses",
    price: "$10",
    period: "per month",
    buttonText: "Get Started",
    buttonAction: "default",
    highlighted: false,
    features: [
      "Free Notification SMS",
      "Free Training & Onboarding",
      "Custom Android / iOS App",
      "Unlimited Users Per Household",
      "Boom Gate Automation Integration",
      "Document & Policy Repository",
      "Pet Management",
      "Visitor & Contractor Management",
      "Automated Levy Billing & Statements",
      "Community Notices & Decision-Making Tools"
    ],
    featureDescriptions: {
      "Free Notification SMS": "Keep residents updated in real-time with no extra cost.",
      "Free Training & Onboarding": "We provide setup assistance and training for both administrators and residents.",
      "Custom Android / iOS App": "Your estate gets its own branded mobile app.",
      "Unlimited Users Per Household": "No extra charges per user — every family member can stay connected.",
      "Boom Gate Automation Integration": "Integrate smart access control for smooth and secure vehicle entry.",
      "Document & Policy Repository": "Central access to estate rules, regulations, and notices.",
      "Pet Management": "Register, track, and manage household pets with ease.",
      "Visitor & Contractor Management": "Track and control access with real-time notifications.",
      "Automated Levy Billing & Statements": "Instant digital billing and tracking for all resident payments.",
      "Community Notices & Decision-Making Tools": "Transparent communication and voting tools for estate matters."
    }
  },
  {
    name: "Custom Plan",
    description: "For medium-sized estates",
    housesLimit: "20-100 Houses",
    price: "Request Quote",
    period: "",
    buttonText: "Contact Us",
    buttonAction: "default",
    highlighted: true,
    features: [
      "Free Notification SMS",
      "Free Training & Onboarding",
      "Custom Android / iOS App",
      "Unlimited Users Per Household",
      "Boom Gate Automation Integration",
      "Document & Policy Repository",
      "Pet Management",
      "Visitor & Contractor Management",
      "Automated Levy Billing & Statements",
      "Community Notices & Decision-Making Tools"
    ],
    featureDescriptions: {
      "Free Notification SMS": "Keep residents updated in real-time with no extra cost.",
      "Free Training & Onboarding": "We provide setup assistance and training for both administrators and residents.",
      "Custom Android / iOS App": "Your estate gets its own branded mobile app.",
      "Unlimited Users Per Household": "No extra charges per user — every family member can stay connected.",
      "Boom Gate Automation Integration": "Integrate smart access control for smooth and secure vehicle entry.",
      "Document & Policy Repository": "Central access to estate rules, regulations, and notices.",
      "Pet Management": "Register, track, and manage household pets with ease.",
      "Visitor & Contractor Management": "Track and control access with real-time notifications.",
      "Automated Levy Billing & Statements": "Instant digital billing and tracking for all resident payments.",
      "Community Notices & Decision-Making Tools": "Transparent communication and voting tools for estate matters."
    }
  },
  {
    name: "Consultation",
    description: "For larger estates and complexes",
    housesLimit: "100+ Houses",
    price: "Request Quote",
    period: "",
    buttonText: "Contact Us",
    buttonAction: "outline",
    highlighted: false,
    features: [
      "Free Notification SMS",
      "Free Training & Onboarding",
      "Custom Android / iOS App",
      "Unlimited Users Per Household",
      "Boom Gate Automation Integration",
      "Document & Policy Repository",
      "Pet Management",
      "Visitor & Contractor Management",
      "Automated Levy Billing & Statements",
      "Community Notices & Decision-Making Tools"
    ],
    featureDescriptions: {
      "Free Notification SMS": "Keep residents updated in real-time with no extra cost.",
      "Free Training & Onboarding": "We provide setup assistance and training for both administrators and residents.",
      "Custom Android / iOS App": "Your estate gets its own branded mobile app.",
      "Unlimited Users Per Household": "No extra charges per user — every family member can stay connected.",
      "Boom Gate Automation Integration": "Integrate smart access control for smooth and secure vehicle entry.",
      "Document & Policy Repository": "Central access to estate rules, regulations, and notices.",
      "Pet Management": "Register, track, and manage household pets with ease.",
      "Visitor & Contractor Management": "Track and control access with real-time notifications.",
      "Automated Levy Billing & Statements": "Instant digital billing and tracking for all resident payments.",
      "Community Notices & Decision-Making Tools": "Transparent communication and voting tools for estate matters."
    }
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your estate's needs. All plans include our core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full flex flex-col ${
                plan.highlighted 
                  ? 'border-primary shadow-lg shadow-primary/10' 
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-500">{plan.description}</CardDescription>
                <p className="text-sm font-medium text-gray-600 mt-1">{plan.housesLimit}</p>
              </CardHeader>
              
              <CardContent className="pt-4 pb-0 flex-grow">
                <div className="mb-5">
                  {plan.price !== "Request Quote" ? (
                    <div>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  ) : (
                    <span className="text-xl font-semibold">{plan.price}</span>
                  )}
                </div>
                
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex">
                      <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">{feature}</p>
                        <p className="text-sm text-gray-500">{plan.featureDescriptions[feature]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-6 pb-4">
                <Button 
                  variant={plan.buttonAction === "outline" ? "outline" : "default"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
