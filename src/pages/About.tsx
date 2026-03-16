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
            <p className="text-xl text-purple-200 leading-relaxed">
              We believe every founder deserves to be recognized for their expertise. Visibility is not luck; it’s strategy. Influence is not optional; it’s essential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop" 
              alt="Oghenero Peter" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl text-white shadow-xl hidden md:block">
              <Quote size={40} className="mb-4 opacity-50" />
              <p className="text-lg font-semibold italic">"Authority begins with clarity."</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-primary mb-6">The WriteGenu Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                WriteGenu was founded by <span className="text-primary font-bold">Oghenero Peter</span> to solve a simple problem: founders have expertise, but the market often never sees it.
              </p>
              <p>
                Through years of experience in ghostwriting, content strategy, and founder positioning, WriteGenu developed a systematic approach to building founder authority.
              </p>
              <p>
                Our mission is to help founders translate knowledge into influence, expertise into visibility, and ideas into measurable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-purple-50">
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
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm text-center border border-purple-100">
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
