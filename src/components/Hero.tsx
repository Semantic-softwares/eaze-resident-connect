
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-40 h-40 bg-gradient-to-br from-primary-500/30 to-secondary-400/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-gradient-to-tl from-primary-500/30 to-secondary-500/30 rounded-full blur-3xl -z-10"></div>
              
              <Card className="overflow-hidden border-0 shadow-lg rounded-2xl">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="w-full mx-auto max-w-sm transform transition-all duration-500 hover:scale-[1.02]">
                    <img 
                      src="/lovable-uploads/f15e10c8-909e-4e69-a5ef-198a148060da.png" 
                      alt="EstateEaze Mobile App" 
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  {/* Admin Dashboard Preview */}
                  <div className="absolute top-10 -right-16 md:-right-20 lg:-right-24 w-2/3 hidden md:block">
                    <div className="bg-white rounded-lg shadow-xl p-3 transform -rotate-6 scale-75 border border-gray-200">
                      <div className="bg-gray-50 p-2 rounded">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                        <div className="flex gap-2">
                          <div className="h-3 w-10 bg-primary-300 rounded"></div>
                          <div className="h-3 w-10 bg-secondary-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">EstateEaze Mobile App</h3>
                      <p className="text-sm text-gray-600">Everything at your fingertips</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
                      Learn more
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -left-4 w-8 h-8 rounded-full bg-primary-500/50 animate-pulse"></div>
              <div className="absolute -z-10 top-1/2 -right-4 w-6 h-6 rounded-full bg-secondary-500/50 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
