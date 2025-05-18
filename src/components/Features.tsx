
import { 
  Key, 
  DollarSign, 
  User, 
  Calendar, 
  Dog, 
  Wrench, 
  Bell, 
  FileText, 
  CreditCard 
} from 'lucide-react';

const features = [
  {
    icon: <Key className="h-8 w-8 text-primary-600" />,
    title: 'Access Control',
    description: 'Control vehicle access and reduce congestion at the gate. Our system integrates with facial recognition technology, allowing seamless, secure entry for residents.'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary-600" />,
    title: 'Automated Levy Billing',
    description: 'No more chasing payments. Generate and send bills automatically, with reminders for overdue accounts.'
  },
  {
    icon: <User className="h-8 w-8 text-primary-600" />,
    title: 'Visitor Management',
    description: 'Track and manage all visitors in real-time — from entry to exit.'
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary-600" />,
    title: 'Common Area Bookings',
    description: 'Easily book shared spaces like parks and clubhouses. Avoid double bookings and ensure fair use.'
  },
  {
    icon: <Dog className="h-8 w-8 text-primary-600" />,
    title: 'Pet Management',
    description: 'Keep pet records up-to-date and ensure all residents follow pet policies.'
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary-600" />,
    title: 'Contractor Management',
    description: 'Access a trusted list of recommended contractors for estate work and maintenance.'
  },
  {
    icon: <Bell className="h-8 w-8 text-primary-600" />,
    title: 'Real-Time Notifications',
    description: 'Be instantly updated when visitors or contractors enter the estate.'
  },
  {
    icon: <FileText className="h-8 w-8 text-primary-600" />,
    title: 'Document Repository',
    description: 'Access estate rules, policies, and notices — anytime, anywhere.'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary-600" />,
    title: 'In-App Insurance Purchases',
    description: 'Residents can now purchase car, home, or travel insurance directly through the app — convenient, secure, and right at your fingertips.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Estate Management Features</h2>
          <p className="text-lg text-gray-600">
            EstateEaze provides all the tools needed to run your estate efficiently with complete transparency and automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary-200 hover:scale-[1.02]"
            >
              <div className="mb-5 inline-block p-3 bg-primary-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
