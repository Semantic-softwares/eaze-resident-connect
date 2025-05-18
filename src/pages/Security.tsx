
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Security</h1>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mt-10 mb-4">Our Security Commitment</h2>
                <p>
                  At EstateEaze, we take the security of your data extremely seriously. We implement multiple layers of protection to ensure your information remains secure.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Data Protection Measures</h2>
                <ul className="list-disc pl-6 mt-2 space-y-3">
                  <li>
                    <strong>Encryption:</strong> All data transmitted between your devices and our servers is encrypted using TLS/SSL.
                  </li>
                  <li>
                    <strong>Secure Storage:</strong> Your data is stored in secure, enterprise-grade data centers with 24/7 monitoring.
                  </li>
                  <li>
                    <strong>Regular Security Audits:</strong> We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Strict access controls limit who can access your data within our organization.
                  </li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Your Role in Security</h2>
                <p>
                  While we implement robust security measures, you play a crucial role in maintaining the security of your account:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-3">
                  <li>Use strong, unique passwords for your EstateEaze account</li>
                  <li>Enable two-factor authentication when available</li>
                  <li>Keep your devices and browsers updated</li>
                  <li>Be cautious of phishing attempts</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Security Incident Reporting</h2>
                <p>
                  If you discover a potential security vulnerability or have concerns about the security of your account, please contact us immediately at security@estateeaze.com.
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

export default Security;
