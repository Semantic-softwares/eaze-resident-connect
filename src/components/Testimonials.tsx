
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    quote: "EstateEaze has transformed how we manage our estate. The financial transparency has built trust with residents, and the automation has saved our team countless hours.",
    author: "Michael Johnson",
    position: "Estate Manager, Parkland Heights",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "As a resident, I love having everything at my fingertips. From paying levies to booking facilities, everything is just a few taps away. The visitor management is particularly impressive.",
    author: "Sarah Williams",
    position: "Resident, Greenview Estate",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The decision to implement EstateEaze was one of the best our board has made. The residents are happier, our finances are more transparent, and our operations are much more efficient.",
    author: "David Chen",
    position: "Board Chairman, Riverside Gardens",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-primary-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Estate Managers and Residents</h2>
          <p className="text-lg text-gray-600">
            Hear what our clients have to say about how EstateEaze has transformed their estate management experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
