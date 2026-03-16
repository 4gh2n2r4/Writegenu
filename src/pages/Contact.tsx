import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data to a backend
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="pt-20"
    >
      <section className="section-padding bg-gradient-to-br from-primary to-purple-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Let’s Build Your Influence</h1>
            <p className="text-xl text-purple-200 leading-relaxed mb-12">
              Whether you’re ready to start now or exploring options, we’re here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-purple-300 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-lg">hello@writegenu.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Linkedin className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-purple-300 uppercase tracking-widest font-bold">LinkedIn</p>
                  <p className="text-lg">linkedin.com/in/ogheneropeter</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-purple-300 uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-lg">+234 XXX XXX XXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 text-charcoal shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours to schedule your strategy session.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:text-accent underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Company / Role</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Founder at TechCo"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">What you want help with</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="content">Content Creation</option>
                    <option value="ghostwriting">Ghostwriting</option>
                    <option value="positioning">Positioning</option>
                    <option value="visibility">Full Visibility Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-accent flex items-center justify-center space-x-2 py-4">
                  <span>Schedule Your Strategy Session</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
