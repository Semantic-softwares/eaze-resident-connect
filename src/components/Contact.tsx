
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    estateUnits: '',
    country: '',
    estateName: '',
    message: '',
    modules: {
      billingInsurance: false,
      visitorManagement: false,
      contractor: false,
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      country: value
    }));
  };

  const handleCheckboxChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [id]: !prev.modules[id as keyof typeof prev.modules]
      }
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Create the email subject and body
    const subject = `EstateEaze Inquiry from ${formData.estateName || formData.name}`;
    
    let body = `Name: ${formData.name}\n`;
    body += `Email: ${formData.email}\n`;
    body += `Estate Name: ${formData.estateName}\n`;
    body += `Estate Units: ${formData.estateUnits}\n`;
    body += `Country: ${formData.country}\n\n`;
    body += `Message: ${formData.message}\n\n`;
    body += "Modules Required:\n";
    body += `- Billing Insurance: ${formData.modules.billingInsurance ? 'Yes' : 'No'}\n`;
    body += `- Visitor Management: ${formData.modules.visitorManagement ? 'Yes' : 'No'}\n`;
    body += `- Contractor: ${formData.modules.contractor ? 'Yes' : 'No'}\n`;

    // Create the mailto link and open it
    const mailtoLink = `mailto:business@estateeaze.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Using window.location.href to open the email client (most reliable method)
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions about EstateEaze? Our team is here to help you find the perfect solution for your estate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="estateName" className="block text-sm font-medium text-gray-700 mb-1">
                    Estate Name
                  </label>
                  <Input 
                    id="estateName" 
                    placeholder="Name of your estate" 
                    value={formData.estateName} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="estateUnits" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Units In Estate
                  </label>
                  <Input 
                    id="estateUnits" 
                    type="number" 
                    placeholder="e.g., 100" 
                    value={formData.estateUnits} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <Select value={formData.country} onValueChange={handleSelectChange}>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zimbabwe">Zimbabwe</SelectItem>
                      <SelectItem value="south-africa">South Africa</SelectItem>
                      <SelectItem value="botswana">Botswana</SelectItem>
                      <SelectItem value="zambia">Zambia</SelectItem>
                      <SelectItem value="mozambique">Mozambique</SelectItem>
                      <SelectItem value="namibia">Namibia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Enter your message here" 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleInputChange} 
                />
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Modules required:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="billingInsurance" 
                      checked={formData.modules.billingInsurance}
                      onCheckedChange={() => handleCheckboxChange('billingInsurance')}
                    />
                    <label
                      htmlFor="billingInsurance"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Billing Insurance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="visitorManagement"
                      checked={formData.modules.visitorManagement}
                      onCheckedChange={() => handleCheckboxChange('visitorManagement')}
                    />
                    <label
                      htmlFor="visitorManagement"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Visitor Management
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="contractor"
                      checked={formData.modules.contractor}
                      onCheckedChange={() => handleCheckboxChange('contractor')}
                    />
                    <label
                      htmlFor="contractor"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Contractor
                    </label>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="lg:pl-6">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-gray-600">business@estateeaze.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-gray-600">+263 771 234567</p>
                    <p className="text-gray-600">+263 77 344 6815</p>
                    <p className="text-gray-600">+263 77 469 3729</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-6">
              <h4 className="font-semibold text-xl mb-4">Office Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
