import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Target, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loopKey, setLoopKey] = useState(0);
  const headlineText = "Turning Founder Expertise into Influence";
  const words = headlineText.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 6000); // Repeat every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[160px] md:h-[200px] flex items-center mb-6">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={loopKey}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight"
                >
                  {words.map((word, idx) => (
                    <motion.span
                      key={idx}
                      variants={wordVariants}
                      className="inline-block mr-3 last:mr-0"
                    >
                      {word === "Influence" ? (
                        <span className="text-accent">{word}</span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              WriteGenu transforms your knowledge, experience, and vision into authoritative content that attracts ideal clients, builds lasting trust, and positions you as the leader your industry needs.
            </p>
            <Link to="/contact" className="btn-accent inline-flex items-center space-x-2 text-lg">
              <span>Schedule Your Strategy Call</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                alt="Founder working" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-8 text-primary"
          >
            The Problem We Solve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Most founders and experts have exceptional knowledge, skills, and results — yet remain unseen. Visibility is not automatic. Influence is not a byproduct of expertise. Without a system to communicate your message, opportunities, partnerships, and growth pass silently by.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Our Solution */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Our Solution</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              WriteGenu provides premium ghostwriting and founder positioning services. We transform your ideas, experience, and expertise into high-impact content that builds authority, grows influence, and attracts ideal clients.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed italic">
              "I don't write content. I build influence. And influence is the foundation of every successful founder."
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-colors">
              <Zap className="text-accent mb-4" size={32} />
              <h4 className="font-bold mb-2">High Impact</h4>
              <p className="text-sm text-gray-400">Content that resonates with decision makers.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-colors mt-8">
              <Target className="text-accent mb-4" size={32} />
              <h4 className="font-bold mb-2">Strategic</h4>
              <p className="text-sm text-gray-400">Aligned with your long-term vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3 — WHO WRITEGENU IS FOR */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">WriteGenu Is Built for You</h2>
              <h3 className="text-xl font-display font-bold text-accent mb-8">Not every founder needs a ghostwriter. But every founder who wants to lead their industry does.</h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>You are a founder, CEO, consultant, or industry expert who has spent years building something real. You have expertise that took time, sacrifice, and genuine effort to develop. You have results that speak for themselves — to anyone who gets close enough to hear about them.</p>
                <p>But the market has not gotten close enough yet.</p>
                <p>Your content does not fully reflect the depth of what you know. Your message is unclear in ways you can sense but cannot quite fix. You show up online when you have time, which means you show up inconsistently, and inconsistency is invisible. You have watched people with less experience and weaker results attract more attention, more clients, and more opportunities — not because they are better, but because they communicate better.</p>
                <p>You want authority. You want the kind of visibility that brings ideal clients to you without you having to chase, perform, or explain yourself from scratch on every sales call. You want your name to mean something in your industry — to carry weight in rooms you have not yet entered.</p>
                <p>You simply do not have the time, the system, or the words to build that alone.</p>
                <p>WriteGenu was built for exactly this founder.</p>
                <p>If any part of what you just read felt like your own thoughts put into words, you are in the right place.</p>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="btn-accent inline-flex items-center space-x-2">
                  <span>Schedule Your Strategy Call</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Founder leadership" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">The WriteGenu Authority System</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our systematic approach to turning your expertise into a powerful market presence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Voice Extraction", desc: "Deep-dive sessions to capture your unique tone and insights." },
              { step: "02", title: "Strategy Mapping", desc: "Aligning your message with your business goals and audience." },
              { step: "03", title: "Content Creation", desc: "Crafting high-impact posts and articles in your voice." },
              { step: "04", title: "Visibility Growth", desc: "Strategic distribution to amplify your reach and influence." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-purple-50 border border-purple-100">
                <span className="text-4xl font-display font-bold text-primary/10 absolute top-4 right-6">{item.step}</span>
                <h3 className="text-xl font-display font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose WriteGenu */}
      <section className="section-padding bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Choose WriteGenu</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At the price points WriteGenu operates at, founders are not looking for a writer. They are looking for a partner who understands that the way they communicate is the difference between being known and being overlooked. Every reason WriteGenu produces results differently from any other ghostwriting service comes down to one thing — we do not treat content as the goal. We treat influence as the goal, and we build every word around that standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Voice Extraction Mastery", desc: "We write in your voice, reflecting your true expertise.", icon: <Users /> },
              { title: "Strategic Positioning", desc: "We ensure your message aligns with your vision and goals.", icon: <Target /> },
              { title: "Founder Psychology", desc: "We understand what makes founders resonate with their audience.", icon: <Zap /> },
              { title: "Consistency at Scale", desc: "Authority grows when your content is delivered with precision.", icon: <TrendingUp /> },
              { title: "Proven Results", desc: "Founders using our system see measurable visibility and lead growth.", icon: <CheckCircle2 /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-purple-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1 — SOCIAL PROOF AND RESULTS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">What Happens When Founders Stop Being Invisible</h2>
              <h3 className="text-xl font-display font-bold text-accent mb-8">The WriteGenu Authority System is not a content service. It is a visibility infrastructure — built once, compounding over time.</h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>Every founder who enters the WriteGenu process arrives with the same core challenge. They have real expertise, real results, and genuine value to offer their market. But the market cannot see it clearly enough to trust it, act on it, or pay for it at the level it deserves.</p>
                <p>What changes through the WriteGenu Authority System is not the founder's expertise. That was never the problem. What changes is how clearly, consistently, and powerfully that expertise communicates itself to the world.</p>
                <p>Founders who build their authority through WriteGenu stop chasing clients and start attracting them. They stop explaining their value on every sales call and start having conversations with people who already trust them before the call begins. They stop feeling invisible in their industry and start becoming the name people mention when the problem they solve comes up in conversation.</p>
                <p>This is what influence built with precision looks like. Not overnight. Not by accident. But deliberately, strategically, and compounding with every piece of content published in their voice.</p>
              </div>
              <div className="mt-10">
                <Link to="/authority-system" className="btn-primary inline-flex items-center space-x-2">
                  <span>Begin Your Authority Journey</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
            <div className="bg-purple-50 p-12 rounded-3xl border border-purple-100 text-center">
              <p className="text-xl text-primary font-display font-bold mb-6 italic">"Client results, testimonials, and case studies are available upon request. WriteGenu is currently accepting founding clients for its inaugural Authority Builder and Influence Engine programs."</p>
              <Link to="/authority-system" className="text-accent font-bold flex items-center justify-center space-x-2 hover:underline">
                <span>See how the system works — Read the WriteGenu Authority System</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">What Founders Say</h2>
            <p className="text-gray-600">Real results from visionary leaders who trusted WriteGenu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Emmy Joe", role: "Graphic Designer & Founder", quote: "WriteGenu didn't just write for me; they understood my design philosophy and translated it into words that actually convert." },
              { name: "Kenneth Egwuda", role: "Gynecologist & Medical Director", quote: "As a medical professional, my voice needs to be precise yet approachable. WriteGenu mastered that balance perfectly." },
              { name: "Omozahor Rachel", role: "Founder, Zahor's Treasure", quote: "My brand is built on storytelling and heritage. The content WriteGenu creates feels like it's coming straight from my heart." },
              { name: "David Chen", role: "SaaS Founder", quote: "The consistency WriteGenu provides has completely changed my LinkedIn presence. My inbound leads have tripled." },
              { name: "Sarah Jenkins", role: "Executive Coach", quote: "I finally have a content strategy that reflects my level of expertise. It's a game changer for my positioning." },
              { name: "Michael Obi", role: "Fintech CEO", quote: "The WriteGenu Authority System is the most systematic approach to founder positioning I've ever seen." }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-purple-50 border border-purple-100 flex flex-col justify-between"
              >
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <h4 className="font-display font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-accent font-semibold">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Featured Services */}
      <section className="section-padding bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Featured Services</h2>
              <p className="text-gray-600 max-w-xl">From content creation to full authority systems, we help founders build visibility that drives growth.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center space-x-2 hover:text-accent transition-colors">
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Full Content & Visibility Management",
              "Ghostwriting & Thought Leadership",
              "The Authority Content Audit"
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-purple-100 flex justify-between items-center group cursor-pointer"
              >
                <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">{service}</h3>
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 5 — FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Questions Founders Ask Before Working With WriteGenu</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "How is WriteGenu different from hiring a freelance writer?",
                a: "Most freelance writers take a brief and return a draft. The relationship is transactional and the output reflects it — content that is technically competent but does not sound like the founder, does not carry the founder's authentic perspective, and does not build toward anything strategic. WriteGenu operates from a fundamentally different premise. We do not write for founders. We write as them. Every engagement begins with a deep voice extraction process that captures the founder's authentic language, beliefs, communication style, and thinking patterns. The result is content that sounds unmistakably like the founder — because it is built from the inside out, not imposed from the outside in. Beyond that, WriteGenu does not just create content. It builds influence. Every post, every piece, every word published under a founder's name through WriteGenu is part of a deliberate, strategic authority-building system. That is a different service entirely."
              },
              {
                q: "What if I have never worked with a ghostwriter before?",
                a: "Most founders have not. The ghostwriting industry is often misunderstood — many people associate it with inauthenticity or with famous authors who use uncredited writers. In practice, ghostwriting for founders is one of the most authentic communication tools available, because the goal is never to invent a voice but to find the one the founder already has and give it the structure and consistency it needs to build authority. The WriteGenu Authority System is specifically designed to make the process simple, deeply collaborative, and completely aligned with who the founder actually is. You bring the expertise, the vision, and the stories. WriteGenu brings the system, the strategy, and the words."
              },
              {
                q: "How long before I start seeing results?",
                a: "Authority is not built overnight and WriteGenu will never tell you otherwise. What we can tell you is that founders who publish consistently with a clear message and a strategic content system begin seeing measurable increases in visibility, engagement, and inbound interest within 60 to 90 days. The more important frame is this — authority compounds. Every piece of content published adds to the accumulated weight of what the market knows and believes about you. The founders who start earliest benefit the most — not because they were luckiest, but because they gave the flywheel the most time to spin."
              },
              {
                q: "Do you work with founders outside Nigeria?",
                a: "Yes. WriteGenu serves founders globally. All engagements are conducted remotely with full communication support across time zones. Pricing is available in both Nigerian Naira and US dollars depending on the founder's location and preference."
              },
              {
                q: "What is the best way to get started?",
                a: "The recommended first step for most founders is a strategy call — a focused conversation where we assess your current positioning, understand your goals, and recommend the offer that fits your situation best. If you prefer a lower-commitment entry point before committing to a retainer, the Authority Content Audit is WriteGenu's most powerful starting point. It gives you a complete picture of where your current messaging stands, what it is costing you in visibility and influence, and exactly what it would take to fix it. Many founders who begin with the audit find that the picture it reveals is all the clarity they needed to move forward."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-purple-100 pb-8"
              >
                <h3 className="text-xl font-display font-bold text-primary mb-4">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-accent inline-flex items-center space-x-2">
              <span>Schedule Your Strategy Call</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Your expertise deserves to be seen. Let’s build your authority.</h2>
          <Link to="/contact" className="btn-accent text-lg inline-flex items-center space-x-2">
            <span>Schedule Your Strategy Call</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
