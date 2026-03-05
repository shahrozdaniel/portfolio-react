import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const featuredWork = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with React & Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization",
      tags: ["Vue.js", "D3.js", "Firebase"],
      link: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure fintech solution",
      tags: ["React Native", "TypeScript"],
      link: "#"
    }
  ];

  const clients = [
    "Amit Sharma",
    "Jaiica Sharma",
    "TechCorp Ltd.",
    "StartupXYZ"
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] relative overflow-hidden">
      {/* Sophisticated gradient orb that follows mouse */}
      <div
        className="fixed pointer-events-none transition-all duration-700 ease-out opacity-30 blur-3xl"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(100,100,250,0.15) 0%, transparent 70%)'
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="font-serif text-xl tracking-tight">SD</div>
          <div className="flex gap-12 items-center">
            <a href="#work" className="text-sm tracking-wide hover:text-[#6464fa] transition-colors duration-300">Work</a>
            <a href="#about" className="text-sm tracking-wide hover:text-[#6464fa] transition-colors duration-300">About Me</a>
            <a href="#contact" className="text-sm tracking-wide hover:text-[#6464fa] transition-colors duration-300">Contact</a>
            <div className="flex gap-4 ml-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#6464fa] transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#6464fa] transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-8 pt-32 pb-20">
        <div className="max-w-5xl w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs tracking-wide text-gray-600">Available for projects</span>
          </div>

          {/* Main Heading with staggered animation */}
          <div className="space-y-4 mb-8">
            <h1 className="text-[4.5rem] leading-[1.1] font-serif tracking-tight animate-slide-up"
              style={{ animationDelay: '0.1s' }}>
              Shahroz Daniel
            </h1>
            <div className="flex items-center gap-4 text-xl text-gray-500 animate-slide-up"
              style={{ animationDelay: '0.2s' }}>
              <span className="font-light tracking-wide">Web Developer</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="font-light tracking-wide">Digital Craftsman</span>
            </div>
          </div>

          {/* Value Proposition */}
          <p className="text-2xl text-gray-600 font-light max-w-2xl mb-12 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.3s' }}>
            Crafting exceptional digital experiences through clean code and thoughtful design.
            Specialized in modern web technologies and user-centric solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full hover:bg-[#6464fa] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="tracking-wide">View My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a1a1a] rounded-full hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg">
              <Mail size={18} />
              <span className="tracking-wide">Get in Touch</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-200 animate-slide-up"
            style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-4xl font-serif mb-2">5+</div>
              <div className="text-sm text-gray-500 tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif mb-2">30+</div>
              <div className="text-sm text-gray-500 tracking-wide">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-serif mb-2">15+</div>
              <div className="text-sm text-gray-500 tracking-wide">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-32 px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-serif mb-4">Featured Work</h2>
            <p className="text-gray-500 text-lg">Selected projects that showcase my expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group block p-8 bg-[#fafafa] hover:bg-white rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Placeholder for project image */}
                <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#6464fa] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                <h3 className="text-2xl font-serif mb-3 group-hover:text-[#6464fa] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-white rounded-full text-gray-700 border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-[#6464fa] transition-colors duration-300">
                  <span>View Project</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="#" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#6464fa] transition-colors duration-300">
              <span className="tracking-wide">View All Projects</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-serif mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hello there. I'm a 24-year-old web developer based in India. I love
                creating beautiful, functional websites that solve real problems and
                delight users.
              </p>
              <p>
                My approach combines technical expertise with creative thinking. I believe
                great digital products emerge from the intersection of clean code, thoughtful
                design, and genuine user empathy.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open source, and staying hydrated (seriously, drink more water).
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-sm tracking-wide text-gray-500 mb-6 uppercase">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", "MongoDB", "GraphQL", "AWS"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200 hover:border-[#6464fa] hover:text-[#6464fa] transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for profile photo - replace with actual image */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[#6464fa] opacity-10" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6464fa] rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-sm tracking-wide text-gray-400 mb-12 uppercase">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client, i) => (
              <div key={i} className="text-xl text-gray-400 hover:text-gray-800 transition-colors duration-300 font-light">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6">Let's Create Something Great</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
          </p>

          <div className="flex gap-6 justify-center mb-20">
            <a href="mailto:hello@shahrozdaniel.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#6464fa] text-white rounded-full hover:bg-[#5454ea] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Mail size={20} />
              <span className="tracking-wide">Send Email</span>
            </a>
            <a href="https://linkedin.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              <Linkedin size={20} />
              <span className="tracking-wide">Connect on LinkedIn</span>
            </a>
          </div>

          <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p>© 2023 Shahroz Daniel. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
              <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
              <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600&display=swap');
        
        .font-serif {
          font-family: 'Crimson Pro', serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background-color: #6464fa;
          color: white;
        }
      `}</style>
    </div>
  );
}