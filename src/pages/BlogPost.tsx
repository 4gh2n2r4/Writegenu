import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, Linkedin, Twitter, Share2 } from 'lucide-react';

const articles = {
  'authority-comes-from-thinking': {
    title: "Authority Comes From the Way You Think, Not the Way You Post",
    date: "March 15, 2024",
    author: "Peter Oghenero",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl font-medium text-primary mb-8 italic">
          I’ve seen founders post daily and still remain invisible. I’ve also seen founders post twice a week and dominate their niche.
        </p>
        
        <p className="mb-6">
          The difference is simple:
        </p>
        
        <ul className="list-none space-y-2 mb-10">
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>One shares content.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>The other shares thinking.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-primary mt-12 mb-6">Strategy Insight:</h3>
        <p className="bg-purple-50 p-6 rounded-xl border-l-4 border-primary mb-10">
          Authority content reveals the way you think about problems, decisions, and solutions.
        </p>

        <h3 className="text-2xl font-display font-bold text-primary mt-12 mb-6">Tactical Steps:</h3>
        <ul className="space-y-4 mb-10">
          <li className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <span>Break down your decisions into simple explanations.</span>
          </li>
          <li className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <span>Share the “why” behind your frameworks.</span>
          </li>
          <li className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <span>Turn mistakes into leadership lessons.</span>
          </li>
          <li className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
            <span>Use examples from your weekly operations.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-primary mt-12 mb-6">Founder Application:</h3>
        <p className="mb-8">
          When people understand your thinking, they trust your leadership.
        </p>

        <div className="bg-charcoal text-white p-10 rounded-2xl text-center mt-16">
          <h4 className="text-2xl font-display font-bold mb-4">Ready to build your authority?</h4>
          <p className="text-gray-400 mb-8">
            DM “Thinking” if you want to communicate your thought process powerfully.
          </p>
          <Link to="/contact" className="btn-accent inline-block">
            Work with WriteGenu
          </Link>
        </div>
      </div>
    )
  },
  'three-elements-of-authority-content': {
    title: "The Three Elements of Authority Content",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="mb-6">Not all content builds authority. Many founders post frequently yet remain invisible because their content lacks structure.</p>
        <p className="mb-8 font-medium text-primary">Effective authority content contains three key elements:</p>
        
        <div className="space-y-10">
          <section>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">1. Insight</h3>
            <p className="mb-4">Every strong post begins with a clear idea. It might challenge a common belief in your industry, reveal a lesson from experience, or explain a principle that others overlook.</p>
            <p className="italic text-accent">Insight signals expertise. It shows your audience that you do not simply participate in your industry. You understand it deeply.</p>
          </section>

          <section>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">2. Story</h3>
            <p className="mb-4">Facts inform. Stories connect. The most influential founders do not just share ideas. They show where those ideas came from.</p>
            <p className="mb-4">They talk about client experiences, share failures and lessons learned, and explain how they arrived at their conclusions.</p>
            <p className="italic text-accent">Stories make expertise relatable and memorable.</p>
          </section>

          <section>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">3. Action</h3>
            <p className="mb-4">Authority content does more than inspire. It gives readers something they can apply. Even one practical insight can transform how your audience views your expertise.</p>
            <p className="mb-4">When your content consistently helps people think differently or act differently, trust begins to compound.</p>
          </section>
        </div>
      </div>
    )
  },
  'content-new-authority-engine': {
    title: "Why Content Is the New Authority Engine",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="mb-6">A generation ago, authority was built through traditional gatekeepers: Books, Television, Large publications, and Industry conferences.</p>
        <p className="text-xl font-bold text-primary mb-8">Today, those gates have opened.</p>
        <p className="mb-6">A founder with clear thinking and consistent content can build authority directly with their audience. Content allows founders to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Demonstrate how they think</li>
          <li>Share lessons from real experience</li>
          <li>Educate their audience</li>
          <li>Shape industry conversations</li>
        </ul>
        <p className="mb-6">Over time, this creates a powerful shift. Instead of chasing clients, opportunities begin to find you.</p>
        <p className="mb-6">Clients trust you before the first conversation. Partners recognize your perspective. Your audience begins to associate your name with insight.</p>
        <p className="text-2xl font-display font-bold text-accent">That is the moment expertise becomes influence.</p>
      </div>
    )
  },
  'turning-expertise-into-influence': {
    title: "Turning Founder Expertise into Influence: The Invisible Asset Most Founders Ignore",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="mb-6">There is a quiet frustration many founders carry. They build great products. They solve real problems. They create value for clients.</p>
        <p className="mb-8">Yet when they look around their industry, they notice something strange. The founders getting the attention, speaking on stages, attracting partnerships, and closing premium clients are not always the most skilled.</p>
        <p className="text-xl font-bold text-primary mb-6">Often, they are simply the most visible.</p>
        <p className="mb-6">This realization can be uncomfortable. But it reveals an important truth: Expertise alone does not create influence. Expertise that is clearly communicated does.</p>
        <p className="mb-6">This is the difference between being good at what you do and being recognized for what you do.</p>
        <p className="text-xl italic text-accent">And recognition, in the modern business landscape, is one of the most powerful growth assets a founder can build.</p>
      </div>
    )
  },
  'hidden-gap-expertise-influence': {
    title: "The Hidden Gap Between Expertise and Influence",
    date: "March 16, 2024",
    author: "Peter Oghenero",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="mb-6">Most founders spend years developing their craft. They study their industry. They build systems. They refine processes. They solve difficult problems for clients.</p>
        <p className="mb-8">But when it comes to communicating that expertise publicly, many founders hesitate. Some feel they do not have time to create content. Others believe their ideas are too simple to share. And many assume their work will eventually speak for itself.</p>
        <p className="text-xl font-bold text-primary mb-6">In reality, the market rarely rewards silence.</p>
        <p className="mb-6">Your audience cannot value what they cannot see. They cannot trust insights you never share. And they cannot recognize your expertise if your thinking remains private.</p>
        <p className="mb-6">Influence is not simply a result of expertise. Influence is the result of expertise that is consistently communicated.</p>
      </div>
    )
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Article not found</h1>
        <Link to="/blog" className="text-accent font-bold flex items-center justify-center space-x-2">
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center space-x-2 text-gray-500 hover:text-accent transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to all articles</span>
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-8">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <User size={20} />
              </div>
              <span className="font-semibold text-primary">{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative">
          {/* Social Share Sidebar */}
          <div className="hidden lg:block absolute -left-24 top-0 space-y-4 sticky top-32">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <Linkedin size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <Twitter size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <Share2 size={20} />
            </button>
          </div>

          {article.content}

          {/* Author Bio Section */}
          <div className="mt-20 pt-10 border-t border-gray-100">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop" 
                  alt={article.author}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-display font-bold text-primary mb-2">About the Author</h4>
                <h5 className="text-lg font-bold text-accent mb-4">{article.author}</h5>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Peter is the founder of WriteGenu, dedicated to helping visionary leaders transform their expertise into industry-defining influence. With a focus on authentic storytelling and strategic thinking, he helps founders build trust and authority in their niche.
                </p>
                <a 
                  href="https://linkedin.com/in/ogheneropeter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-accent font-bold transition-colors"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;
