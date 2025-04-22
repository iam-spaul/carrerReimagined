import React from 'react';
import Section from '../Section';
import { Quote } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <Section id="about-founder" background="light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Careerimagined
          </h2>
          <p className="text-lg text-purple-600 italic">
            "Careers don't get shaped inside four walls."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Peali Sarkar, Founder"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Peali Sarkar</h3>
                <p className="text-gray-600">Founder, Careerimagined</p>
              </div>
              <div className="mt-4 p-6 bg-white rounded-lg shadow-sm border border-purple-100">
                <Quote size={24} className="text-purple-400 mb-2" />
                <p className="italic text-purple-700 text-lg">
                  "We rise by lifting others — and we grow by walking together."
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100 mb-8">
                <p className="text-xl text-purple-800 leading-relaxed mb-4">
                  That's not just a belief — it's a lived experience.
                </p>
                <p className="text-lg mb-4">
                  I'm Peali Sarkar — not a name you've heard on big stages (yet), but someone who's walked through the trenches of what career growth really feels like.
                </p>
                <p className="text-gray-700">
                  From becoming an engineering graduate and hustling for campus placements, I once believed that getting a job was the ultimate goal. But the moment I stepped into the workforce, the truth hit me hard — education alone doesn't make a professional.
                </p>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg my-8 border-l-4 border-purple-400">
                <p className="text-xl font-semibold text-purple-800 mb-4">The Three Pillars of Growth:</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-purple-500 text-2xl mr-3">•</span>
                    <p className="text-lg text-purple-900">It's what you learn on the job.</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 text-2xl mr-3">•</span>
                    <p className="text-lg text-purple-900">It's who mentors you.</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 text-2xl mr-3">•</span>
                    <p className="text-lg text-purple-900">It's how someone ahead of you shows you the way.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100">
                <p className="text-lg leading-relaxed mb-6">
                  That's where my journey truly began — realizing that careers are not built alone, and success isn't just about resumes and skillsets. It's about community, guidance, and having access to the people who've done the work and are willing to light the path forward.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-coral-50 p-6 rounded-lg">
                  <p className="text-lg font-medium text-purple-800">
                    This realization became the foundation of Careerimagined — a platform where:
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center">
                      <span className="text-coral-500 mr-2">✓</span>
                      <span>Real conversations happen naturally</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-coral-500 mr-2">✓</span>
                      <span>Mentorship flows freely</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-coral-500 mr-2">✓</span>
                      <span>Communities build authentic connections</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-coral-500 mr-2">✓</span>
                      <span>Career growth becomes a shared journey</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100 mt-12">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">✈️ From India to Canada: A Leap of Growth</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Within 15 days of opportunity knocking, I packed my bags and moved to Canada — stepping into a whole new world across hemispheres. That move changed everything.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  I saw mentorship in a new light — not just confined to workplace seniors, but visible in the everyday actions of leaders, creators, and mentors who gave their time, voice, and intent to nurture emerging talent.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  That’s when I knew: this kind of access should not be reserved for the elite or the extroverts. It should be for anyone who’s hungry to grow.
                </p>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg shadow-sm border-l-4 border-purple-400 mt-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">🎙️ Why I Started Careerimagined</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Because India — and the world — needs more real conversations. Not surface-level networking. Not “motivational talks.” But raw, practical, actionable mentorship.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  I started Careerimagined to create a space where:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>Real people meet real leaders</li>
                  <li>Freshers, young professionals, and aspiring entrepreneurs feel seen and supported</li>
                  <li>You don’t need to be “well-connected” to get access</li>
                  <li>Mentors aren’t out of reach — they’re right here, in the room with you</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  It’s a social cause as much as it is a professional mission.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100 mt-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">🌱 This Is a Movement, Not Just a Platform</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Join me — whether you're:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>A budding leader ready to grow</li>
                  <li>A frontline learner seeking direction</li>
                  <li>A senior professional who wants to give back</li>
                  <li>Or simply someone who believes that access to the right voice can change a life</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  Let’s build a community where careers are not imagined alone — but shaped together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;