import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="pt-20"
    >
      {/* Hero */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Why WriteGenu Exists</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We believe every founder deserves to be recognized for their expertise. Visibility is not luck; it’s strategy. Influence is not optional; it’s essential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Letter */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative lg:sticky lg:top-32">
            <img 
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop" 
              alt="Oghenero Peter" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl text-white shadow-xl hidden md:block">
              <Quote size={40} className="mb-4 opacity-50" />
              <p className="text-lg font-semibold italic">"Expertise deserves visibility."</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">A Note from the Founder</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>I built WriteGenu because I kept seeing the same thing.</p>
              <p>Founders with real expertise — people who had built genuine things, solved real problems, and created value that their industries needed — remaining invisible. Not because they lacked skill. Not because their work was not good enough. But because they had never been given a system to make their expertise visible in a way the market could receive, trust, and act on.</p>
              <p>I watched brilliant people get overlooked while others with less depth but stronger communication attracted the clients, the opportunities, and the recognition. And the longer I watched it, the clearer something became to me.</p>
              <p>The gap was never about expertise. It was always about communication.</p>
              <p>I am a ghostwriter. But I do not think of what I do as writing. I think of it as building. Every founder I work with has something valuable inside them — a perspective, a story, a set of beliefs about how their industry should work — that the market deserves to hear. My job is to draw that out, give it structure, and send it into the world in a voice that is unmistakably theirs.</p>
              <p>WriteGenu is the system I built to do that at the highest level.</p>
              <p>It is not a content service. It is not a writing agency. It is a visibility infrastructure for founders who are done being the best-kept secret in their industry and are ready to build the kind of authority that compounds — attracting clients, opening doors, and creating opportunities that their expertise has always deserved but their silence has been quietly closing.</p>
              <p>I am building WriteGenu from Nigeria with a global vision and a simple belief that has not changed since the day I started: expertise deserves visibility. And if you have built something worth knowing about, the world should know about it.</p>
              <p>That is what WriteGenu is for.</p>
              <div className="pt-6">
                <p className="font-display font-bold text-primary text-2xl">Oghenero Peter</p>
                <p className="text-accent font-semibold">Founder, WriteGenu Media</p>
                <p className="text-sm text-gray-500 mt-2 italic">Turning Founder Expertise into Influence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Our Philosophy</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Authority begins with clarity", desc: "Knowing exactly what you stand for is the first step to influence." },
              { title: "Influence grows with consistency", desc: "Regular, high-quality communication builds trust over time." },
              { title: "The founder’s voice is the brand", desc: "Authenticity is the most powerful tool in a founder's arsenal." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100">
                <h3 className="text-xl font-display font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-8">Our Approach</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Every engagement begins with understanding the founder’s voice, clarifying their positioning, and building a content strategy that converts influence into tangible opportunities.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Want to learn how WriteGenu can amplify your authority?</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
