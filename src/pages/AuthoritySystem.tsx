import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Shield, TrendingUp, Users, MessageSquare } from 'lucide-react';

const AuthoritySystem = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="pt-20"
    >
      {/* Hero */}
      <section className="section-padding bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">The WriteGenu Authority System</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              A visibility infrastructure for founders who are done being the best-kept secret in their industry.
            </p>
            <Link to="/contact" className="btn-accent text-lg inline-flex items-center space-x-2">
              <span>Begin Your Authority Journey</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
            <p className="text-2xl font-display font-bold text-primary italic border-l-4 border-accent pl-6 py-2">
              "I don't write content. I build influence. And influence is the foundation of every successful founder."
            </p>
            
            <p>The WriteGenu Authority System is not a content service. It is a visibility infrastructure — built once, compounding over time.</p>
            
            <p>Most founders treat content as a series of isolated tasks. They write a post when they have time, share an update when they remember, and hope that the accumulated noise eventually turns into authority. It rarely does. Noise is not authority. Consistency without strategy is just a faster way to become invisible.</p>
            
            <p>The WriteGenu Authority System replaces hope with a deliberate, strategic process designed to extract your expertise and translate it into industry-leading influence.</p>

            <h2 className="text-3xl font-display font-bold text-primary mt-16 mb-8">How the System Works</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-primary rounded-xl flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">Voice Extraction & Message Strategy</h3>
                  <p>We do not invent a voice for you. We find the one you already have. Through a deep-dive interview process, we extract your authentic language, your core beliefs, your unique stories, and your specific way of solving problems. We then map this against your business goals to create a message strategy that is both authentic to you and attractive to your ideal market.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-primary rounded-xl flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">The Authority Engine</h3>
                  <p>This is the production phase. Using the extracted voice and the defined strategy, WriteGenu builds a consistent stream of high-impact content — articles, posts, newsletters, and thought leadership pieces — that reflect your expertise with precision. This is where your knowledge becomes visible, and where your influence begins to compound.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-primary rounded-xl flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">Visibility Management</h3>
                  <p>Content is only half the battle. The other half is ensuring that content reaches the right people. We manage the distribution and amplification of your message across the platforms where your ideal clients, partners, and peers spend their time. We ensure you are showing up consistently, professionally, and authoritatively — without you having to lift a finger.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-primary mt-16 mb-8">The Result: Compounding Influence</h2>
            
            <p>Founders who implement the WriteGenu Authority System experience a fundamental shift in how they are perceived by their market. They stop chasing and start attracting. They stop explaining and start leading. They build a digital footprint that works for them 24/7 — building trust, establishing credibility, and creating opportunities long before they ever enter a room.</p>
            
            <p>This is the power of a visibility infrastructure. It is the difference between having expertise and having authority.</p>
          </div>

          <div className="mt-20 p-12 bg-purple-50 rounded-3xl border border-purple-100 text-center">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Ready to Build Your Visibility Infrastructure?</h3>
            <p className="text-lg text-gray-600 mb-10">The first step is a strategy call to see if the system is the right fit for your goals.</p>
            <Link to="/contact" className="btn-accent text-lg inline-flex items-center space-x-2">
              <span>Schedule Your Strategy Call</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Target className="text-accent mb-4" size={32} />
              <h4 className="text-xl font-bold text-primary mb-3">Strategic Alignment</h4>
              <p className="text-gray-600">Every word is mapped to your business goals and long-term vision.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Shield className="text-accent mb-4" size={32} />
              <h4 className="text-xl font-bold text-primary mb-3">Authentic Voice</h4>
              <p className="text-gray-600">Content that sounds unmistakably like you, because it is built from you.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <TrendingUp className="text-accent mb-4" size={32} />
              <h4 className="text-xl font-bold text-primary mb-3">Compounding Growth</h4>
              <p className="text-gray-600">Your authority grows with every piece of content published.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AuthoritySystem;
