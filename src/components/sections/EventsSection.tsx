import React from 'react';
import { Calendar } from 'lucide-react';
import Section from '../Section';
import Button from '../Button';
import { EventCard } from '../Card';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Leadership Roundtable: Future of Work',
    type: '✨ Real Talk',
    date: 'June 15, 2025',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Women in Tech: Breaking the Glass Ceiling',
    type: '💬 Leadership Circle',
    date: 'July 2, 2025',
    imageUrl: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'The Future of AI in Career Development',
    type: '🗓️ Fireside Evening',
    date: 'July 18, 2025',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const EventsSection: React.FC = () => {
  return (
    <Section id="events" background="gradient">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Where Conversations Spark Careers
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Whether it’s a rooftop roundtable, an invite-only dinner, or a virtual gathering with bold thinkers — every Careerimagined event is designed to give you proximity to real leadership.
        </p>
      </motion.div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <EventCard
              title={event.title}
              type={event.type}
              date={event.date}
              imageUrl={event.imageUrl}
            />
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Button 
          variant="primary" 
          size="lg"
          icon={<Calendar size={20} />}
        >
          📅 See Upcoming Events
        </Button>
      </motion.div>

      {/* Event Type Descriptions */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[
          {
            title: '✨ Real Talks',
            desc: 'Unfiltered interviews with leaders.',
          },
          {
            title: '💬 Leadership Circles',
            desc: 'Curated community forums.',
          },
          {
            title: '🗓️ Fireside Evenings',
            desc: 'Deep dives on future-of-work topics.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            className="p-6 bg-white rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default EventsSection;
