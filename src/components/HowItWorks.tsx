
import { Search, Settings, School, LifeBuoy } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Demo',
    description: 'We start by understanding your estate\'s needs. You\'ll get a live demo of how EstateEaze can fit into your current setup.',
    icon: <Search className="h-10 w-10 text-primary-600" />
  },
  {
    number: '02',
    title: 'Onboarding & Setup',
    description: 'Once you\'re in, we\'ll help you set up your estate profile, user accounts, and custom settings — fast and hassle-free.',
    icon: <Settings className="h-10 w-10 text-primary-600" />
  },
  {
    number: '03',
    title: 'Training & Go-Live',
    description: 'We offer training for administrators and residents to ensure everyone knows how to use the platform effectively.',
    icon: <School className="h-10 w-10 text-primary-600" />
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Our team is always here to assist you with updates, technical support, or feature adjustments as your estate grows.',
    icon: <LifeBuoy className="h-10 w-10 text-primary-600" />
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Working Process</h2>
          <p className="text-lg text-gray-600">
            Experience seamless estate management in four easy steps, designed for efficiency and ease of use.
          </p>
        </div>
        
        <div className="relative">
          {/* Process line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary-200 flex flex-col items-center text-center"
              >
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-5 rounded-full mb-6">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-3">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
