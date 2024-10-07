import React from 'react';
import { Code, PenTool, BarChart, Zap, Users, Shield } from 'lucide-react';

const services = [
  { icon: Code, title: 'Custom AI Development', description: 'Tailored AI solutions to meet your specific business needs' },
  { icon: PenTool, title: 'Generative Design', description: 'AI-powered design tools for creative industries' },
  { icon: BarChart, title: 'Predictive Analytics', description: 'Advanced forecasting and trend analysis using AI' },
  { icon: Zap, title: 'Process Automation', description: 'Streamline operations with intelligent automation' },
  { icon: Users, title: 'AI Consulting', description: 'Strategic guidance on implementing AI in your organization' },
  { icon: Shield, title: 'AI Ethics & Governance', description: 'Ensuring responsible and ethical use of AI technologies' },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;