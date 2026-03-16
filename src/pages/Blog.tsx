import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const articles = [
  {
    id: 'authority-comes-from-thinking',
    title: "Authority Comes From the Way You Think, Not the Way You Post",
    excerpt: "I’ve seen founders post daily and still remain invisible. I’ve also seen founders post twice a week and dominate their niche. The difference is simple...",
    date: "March 15, 2024",
    author: "Peter Oghenero",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'three-elements-of-authority-content',
    title: "The Three Elements of Authority Content",
    excerpt: "Not all content builds authority. Many founders post frequently yet remain invisible because their content lacks structure. Effective authority content contains three key elements...",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'content-new-authority-engine',
    title: "Why Content Is the New Authority Engine",
    excerpt: "A generation ago, authority was built through traditional gatekeepers. Today, those gates have opened. A founder with clear thinking can build authority directly...",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'turning-expertise-into-influence',
    title: "Turning Founder Expertise into Influence: The Invisible Asset Most Founders Ignore",
    excerpt: "There is a quiet frustration many founders carry. They build great products, yet the founders getting the attention are not always the most skilled. They are the most visible...",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'hidden-gap-expertise-influence',
    title: "The Hidden Gap Between Expertise and Influence",
    excerpt: "Most founders spend years developing their craft. But when it comes to communicating that expertise publicly, many hesitate. In reality, the market rarely rewards silence...",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2070&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-primary mb-6"
          >
            Insights & <span className="text-accent">Articles</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Deep dives into founder authority, content strategy, and the psychology of influence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </span>
                </div>
                
                <h2 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                
                <p className="text-gray-600 mb-8 flex-grow">
                  {article.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${article.id}`} 
                  className="inline-flex items-center space-x-2 font-bold text-primary hover:text-accent transition-colors group/link"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
