
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How does the monitoring service work?",
      answer: "Our service sends HTTP requests to your specified URLs at your chosen intervals. If a request fails or returns a non-200 status code, we immediately send you an email alert."
    },
    {
      question: "What ping intervals are available?",
      answer: "You can choose from intervals of 5 minutes, 10 minutes, or 15 minutes based on your needs and plan."
    },
    {
      question: "Do you check from multiple locations?",
      answer: "Yes, our monitoring service uses distributed servers across multiple regions to ensure reliable monitoring and minimize false positives."
    },
    {
      question: "What happens if my site has a scheduled maintenance?",
      answer: "You can easily pause monitoring for scheduled maintenance periods through the dashboard to avoid receiving unnecessary alerts."
    },
    {
      question: "How quickly will I be notified if my service goes down?",
      answer: "You'll be notified within seconds of a detected outage, allowing you to respond quickly before it impacts your users."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our uptime monitoring service
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-sentinel-purple/10">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
