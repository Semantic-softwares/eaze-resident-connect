
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Compliance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Compliance</h1>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mt-10 mb-4">Data Protection Compliance</h2>
                <p>
                  EstateEaze is committed to complying with data protection regulations including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-3">
                  <li>Protection of Personal Information Act (POPIA) in South Africa</li>
                  <li>General Data Protection Regulation (GDPR) for users in the European Economic Area</li>
                  <li>California Consumer Privacy Act (CCPA) for California residents</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">How We Ensure Compliance</h2>
                <ul className="list-disc pl-6 mt-2 space-y-3">
                  <li>
                    <strong>Data Minimization:</strong> We collect only the information necessary to provide our services.
                  </li>
                  <li>
                    <strong>Lawful Processing:</strong> We process personal information only with a valid legal basis.
                  </li>
                  <li>
                    <strong>Transparency:</strong> We provide clear information about how we use your data.
                  </li>
                  <li>
                    <strong>Data Subject Rights:</strong> We respect and facilitate your rights regarding your personal information.
                  </li>
                  <li>
                    <strong>Security:</strong> We implement appropriate technical and organizational measures to protect your data.
                  </li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Industry Standards</h2>
                <p>
                  We adhere to industry best practices and standards for security and data protection, including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-3">
                  <li>ISO/IEC 27001 Information Security Management</li>
                  <li>OWASP Top 10 Web Application Security Risks</li>
                  <li>Cloud Security Alliance (CSA) security controls</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Compliance Documentation</h2>
                <p>
                  For more information about our compliance measures or to request compliance documentation, please contact our compliance team at compliance@estateeaze.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Compliance;
