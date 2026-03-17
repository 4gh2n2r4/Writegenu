import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PenTool, Target, UserCheck, LayoutDashboard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Full Content & Visibility Management",
      icon: <LayoutDashboard size={32} />,
      desc: "Outcome: A content engine that runs without your time, producing authority that compounds every week.\n\nA full-service content management solution for founders who want to dominate their industry's conversation without spending hours writing. We handle everything from strategy to publishing.",
      includes: ["Monthly content strategy", "Multi-platform posting", "Engagement & visibility tracking"]
    },
    {
      title: "Ghostwriting & Thought Leadership",
      icon: <UserCheck size={32} />,
      desc: "Outcome: A clear, commanding industry voice that makes your expertise impossible to overlook.\n\nWe help you define your unique perspective, extract your authentic voice, and position you as a leading authority in your niche through strategic thought leadership.",
      includes: ["Voice extraction sessions", "Signature tone manual", "Ongoing content creation"]
    },
    {
      title: "The Authority Content Audit",
      icon: <Target size={32} />,
      desc: "Outcome: A complete roadmap for your authority, showing you exactly where your message is weak and how to fix it.\n\nA deep-dive analysis of your current content, messaging, and positioning. We identify gaps in your authority and provide a clear roadmap for improvement.",
      includes: ["Positioning blueprint", "Messaging map", "Signature story development"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="pt-20"
    >
      {/* Hero */}
      <section className="section-padding bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">Premium Services for Founders Who Want Influence</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From content creation to full authority systems, we help founders build visibility that drives growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-white border border-purple-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.desc}</p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-display font-bold text-sm uppercase tracking-widest text-accent">Includes:</h4>
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Your voice is your most valuable asset. Let’s make it visible.</h2>
          <Link to="/contact" className="btn-accent text-lg inline-flex items-center space-x-2">
            <span>Schedule Your Strategy Call</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
