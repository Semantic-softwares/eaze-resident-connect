
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const caseStudies = [
  {
    title: "Villa Gardens Estate",
    location: "Cape Town, South Africa",
    challenge: "Managing 150+ households with paper-based processes",
    solution: "Implemented EstateEaze for complete digital transformation",
    results: [
      "Reduced visitor processing time by 85%",
      "Automated 100% of levy collections",
      "Improved resident satisfaction by 47%"
    ],
    quote: "EstateEaze has completely revolutionized how we manage our estate. The transition was seamless, and the support team was exceptional throughout the process.",
    author: "James Peterson",
    position: "Estate Manager"
  },
  {
    title: "Sunset View Residences",
    location: "Johannesburg, South Africa",
    challenge: "Security concerns with unauthorized access",
    solution: "Implemented EstateEaze with advanced access control features",
    results: [
      "Eliminated unauthorized access incidents",
      "Reduced security personnel costs by 30%",
      "Improved response time to security alerts by 65%"
    ],
    quote: "The facial recognition and visitor management features have dramatically improved our security protocols. We feel much safer now.",
    author: "Sarah Nkosi",
    position: "HOA President"
  },
  {
    title: "Mountain View Estate",
    location: "Durban, South Africa",
    challenge: "Low compliance with estate rules and fee collection",
    solution: "Implemented EstateEaze with community engagement features",
    results: [
      "Increased rule compliance by 76%",
      "Improved on-time levy payments to 94%",
      "Reduced administrative workload by 40 hours/month"
    ],
    quote: "The transparency and ease of communication have transformed our community culture. Residents are more engaged and compliant than ever before.",
    author: "Michael Ndlovu",
    position: "Estate Administrator"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-gray-600">
                See how EstateEaze has transformed estate management across South Africa.
              </p>
            </div>
            
            <div className="space-y-16 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-10 text-white">
                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <p className="text-primary-100 mb-6">{study.location}</p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                        <p>{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Solution</h3>
                        <p>{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="p-10">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary-500 pl-4 italic text-gray-700">
                        <p className="mb-4">"{study.quote}"</p>
                        <p className="text-sm font-medium">
                          {study.author}, {study.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
