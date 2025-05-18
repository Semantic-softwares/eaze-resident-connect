
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/8c7621e9-b3e2-47d2-b874-95d5d210213c.png" 
                alt="EstateEaze Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-600 font-medium">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button size="sm">Request Demo</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#features" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Features</a>
            <a href="#benefits" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Benefits</a>
            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Testimonials</a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Pricing</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Contact</a>
            <div className="pt-2">
              <Button className="w-full">Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
