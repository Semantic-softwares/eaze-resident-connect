
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none">
                <p>Last updated: May 18, 2025</p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
                <p>
                  EstateEaze ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our estate management platform.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">2. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Personal identification information (name, email address, phone number, etc.)</li>
                  <li>Residence information</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Verify your identity for security purposes</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">5. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at privacy@estateeaze.com.
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

export default PrivacyPolicy;
