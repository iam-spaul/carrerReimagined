import React from 'react';
import { Link } from 'lucide-react';
import Section from '../Section';
import Button from '../Button';
import { TestimonialCard } from '../Card';

const testimonials = [
  {
    id: 1,
    quote: "The Leadership Circle completely changed my perspective on career growth. It's not about climbing ladders, it's about building bridges.",
    author: "Priya Sharma",
    role: "Product Manager at TechGiant",
    imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "Careerimagined events provide the kind of authentic networking that actually leads to real opportunities and growth.",
    author: "Michael Chen",
    role: "Startup Founder",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "As a speaker, I've never experienced such engaged audiences. The questions and conversations are truly meaningful.",
    author: "Sarah Johnson",
    role: "Chief Innovation Officer",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const VoicesSection: React.FC = () => {
  return (
    <Section id="voices" background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Thoughts Worth Spreading. Careers Worth Watching.
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We feature those who are doing the work, not just talking about it. From corporate boardrooms 
          to grassroots founders — we capture the wisdom of action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            imageUrl={testimonial.imageUrl}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-3">🎤 From the Frontlines</h3>
          <p className="text-gray-700 mb-4">Snapshots and insights from C-level executives who share their leadership journey.</p>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">Read stories →</a>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-3">🌱 On the Rise</h3>
          <p className="text-gray-700 mb-4">Young talents rewriting the career playbook with fresh perspectives and bold moves.</p>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">Explore profiles →</a>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-3">🎧 Real Talk Podcast</h3>
          <p className="text-gray-700 mb-4">Our upcoming podcast featuring unfiltered conversations about career growth and leadership.</p>
          <span className="text-coral-500 font-medium">Coming Soon!</span>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          variant="primary" 
          size="lg"
          icon={<Link size={20} />}
        >
          Browse Stories
        </Button>
      </div>
    </Section>
  );
};

export default VoicesSection;