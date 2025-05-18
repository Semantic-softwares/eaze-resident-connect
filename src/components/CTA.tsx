
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Estate Management?</h2>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
          Join hundreds of estates already enjoying the benefits of our all-in-one management solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="bg-white text-primary-700 hover:bg-gray-100 text-base">
            Schedule a Demo
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
