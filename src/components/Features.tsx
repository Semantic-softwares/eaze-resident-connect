
import { Shield, Users, Bell, CreditCard, BarChart, Calendar } from 'lucide-react';

const features = [
  {
    icon: <BarChart className="h-8 w-8 text-primary-600" />,
    title: 'Estate Accounts Transparency',
    description: 'Access real-time financial reports and transactions, ensuring complete transparency in estate fund management.'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary-600" />,
    title: 'Visitor Tracking',
    description: 'Enhance security with digital visitor passes and real-time tracking for all estate guests.'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary-600" />,
    title: 'Levy Automation',
    description: 'Automate levy collection, payment reminders, and receipt generation for hassle-free estate finances.'
  },
  {
    icon: <Bell className="h-8 w-8 text-primary-600" />,
    title: 'Real-time Notifications',
    description: 'Stay informed with instant alerts about estate activities, maintenance, and important announcements.'
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary-600" />,
    title: 'Facility Booking',
    description: 'Easily schedule and manage estate facilities like halls, gyms, and recreational spaces.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    title: 'Resident Directory',
    description: 'Access a secure directory of verified residents with contact information for community building.'
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
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary-200"
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
