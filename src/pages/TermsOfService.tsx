
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none">
                <p>Last updated: May 18, 2025</p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the EstateEaze platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">2. Description of Service</h2>
                <p>
                  EstateEaze provides estate management solutions for residential communities, including visitor management, billing, communication tools, and other related services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">3. User Accounts</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">4. Payment Terms</h2>
                <p>
                  Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise specified in our Refund Policy.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">5. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, EstateEaze shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at legal@estateeaze.com.
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

export default TermsOfService;
