
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Manage Your Estate <span className="text-gradient">Efficiently</span> and <span className="text-gradient">Transparently</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              EstateEaze is an all-in-one estate management system built to empower estate residents and administrators with transparency, automation, and real-time communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base flex items-center gap-2">
                Request a Demo <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-600 hover:bg-primary-50">
                View Features
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-xl p-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                    alt="Estate Management Dashboard" 
                    className="w-full h-auto rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">EstateEaze Dashboard</h3>
                    <p className="text-gray-600 text-sm">All your estate management tools in one place</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
