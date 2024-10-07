import React from 'react';
import { Brain, Lightbulb, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              At AI Visionaries, we're passionate about harnessing the power of Generative AI to drive innovation and transform businesses. Our team of experts combines deep technical knowledge with creative problem-solving to deliver cutting-edge solutions tailored to your unique needs.
            </p>
            <p className="text-lg">
              We believe that AI is not just a tool, but a catalyst for reimagining what's possible. Our mission is to empower organizations to leverage AI in ways that enhance human creativity, streamline operations, and unlock new opportunities for growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p>Deep knowledge in AI and machine learning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Pushing the boundaries of what's possible with AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <Rocket className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p>Delivering tangible business outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;