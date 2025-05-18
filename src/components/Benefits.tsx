
import { CheckCircle } from 'lucide-react';

const benefitsList = [
  "Increase resident satisfaction through transparent operations",
  "Reduce administrative workload by up to 70%",
  "Improve security with digital visitor management",
  "Streamline financial operations and ensure accountability",
  "Enhance communication between residents and management",
  "Generate detailed reports for decision-making",
  "Automate repetitive tasks like billing and notifications",
  "Provide 24/7 access to all estate information",
];

const Benefits = () => {
  return (
    <section id="benefits" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
              alt="Estate Management Benefits" 
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The EstateEaze Advantage</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive estate management solution transforms how estates operate, benefiting both residents and administrators.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
