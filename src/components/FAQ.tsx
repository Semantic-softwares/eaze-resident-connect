
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is EstateEaze?",
    answer: "EstateEaze is a digital estate management platform that helps communities manage visitors, levies, common areas, security, pets, documents, and more — all in one place."
  },
  {
    question: "Who can use EstateEaze?",
    answer: "EstateEaze is designed for residents of gated communities or residential estates, estate managers & committee members."
  },
  {
    question: "Does EstateEaze offer individual modules?",
    answer: "Yes! EstateEaze is modular, so you can choose and deploy only the features you need — whether it's levy payments, estate accounts, visitor management, or any other module."
  },
  {
    question: "How secure is EstateEaze?",
    answer: "Very secure. We use modern encryption and best practices to protect estate data and privacy."
  },
  {
    question: "What devices does EstateEaze work on?",
    answer: "EstateEaze works on smartphones, tablets, and desktops — accessible from anywhere."
  },
  {
    question: "Do residents need to be tech-savvy?",
    answer: "Not at all. EstateEaze is simple and intuitive. We also provide training and support for all users."
  },
  {
    question: "How do I get started?",
    answer: "Click [Sign Up] or [Book a Demo], and our team will walk you through the rest."
  },
  {
    question: "What's the pricing model?",
    answer: "Pricing depends on the size of your estate and the features you need. Contact us for a custom quote."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our estate management platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="py-4 text-lg font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
