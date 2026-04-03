// App.tsx — GenZBuild
// Only the root <App> component is changed here.
// Every other component (Navbar, Hero, About, …) stays exactly as you wrote it.
// Import your new background.css at the top of this file (or in main.tsx):
//   import './background.css';

import av from './av.jpg';
import web from './web.png';
import av2 from './av2.jpg';
import av3 from './av3.jpg';
import con from './pro3.png';
import gym from './pro2.png';
import gymy from './gen.jpeg';
import logi from './genz.jpeg';
import logiy from './download.png';
import { motion } from 'motion/react';
import {
  Code2,
  Layout,
  Palette,
  Settings,
  ExternalLink,
  Check,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

// ─── Shooting-star data (generated once) ─────────────────────────────────────
const STARS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  top:   `${Math.random() * 60}%`,
  left:  `${Math.random() * 80}%`,
  dur:   `${5 + Math.random() * 8}s`,
  delay: `${Math.random() * 12}s`,
  tail:  `${60 + Math.random() * 100}px`,
  tx:    `${160 + Math.random() * 160}px`,
  ty:    `${80  + Math.random() * 120}px`,
}));

// ─── Animated background layers (no extra DOM weight) ────────────────────────
const AnimatedBackground = () => (
  <>
    {/* Floating aurora orbs */}
    <div className="orbs" aria-hidden="true" />

    {/* Dot grid */}
    <div className="bg-grid" aria-hidden="true" />

    {/* Shooting stars */}
    <div className="stars" aria-hidden="true">
      {STARS.map(s => (
        <span
          key={s.id}
          className="star"
          style={{
            '--top':   s.top,
            '--left':  s.left,
            '--dur':   s.dur,
            '--delay': s.delay,
            '--tail':  s.tail,
            '--tx':    s.tx,
            '--ty':    s.ty,
          } as React.CSSProperties}
        />
      ))}
    </div>

    {/* Vignette pulse */}
    <div className="vignette" aria-hidden="true" />
  </>
);

// ─── Components (unchanged — paste yours here) ───────────────────────────────

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'About',     href: '#about' },
    { name: 'Services',  href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing',   href: '#pricing' },
    { name: 'Contact',   href: '#contact' },
  ];
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logiy} alt="GenZBuild Logo" className="w-8 h-8 object-contain transition-transform group-hover:scale-110" />
          <span className="text-2xl font-bold gradient-text">GenZBuild</span>
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-400 transition-colors">{link.name}</a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-sm font-semibold">Hire Us</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass md:hidden py-6 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">{link.name}</a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-3 rounded-xl bg-blue-600 text-center font-semibold">Hire Me</a>
        </motion.div>
      )}
    </nav>
  );
};

// ─── Hero Component with Glowing Offer Border ────────────────────────────────

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Building Fast, <br />
          <span className="gradient-text">Modern Websites</span> <br />
          for Your Business
        </h1>
        <p className="text-neutral-400 text-lg mb-8 max-w-lg">
          High-performance, responsive, and visually stunning web solutions tailored to help your brand grow in the digital landscape.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          {/* Project Button */}
          <a href="#portfolio" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all flex items-center gap-2 font-semibold glow">
            View Projects <ArrowRight size={18} />
          </a>
          
          {/* View Offers (Multi-color animated border from previous step) */}
          <a href="#pricing" className="glowing-offer-border shadow-2xl group transition-all duration-300">
            <span className="px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center text-white">
              View Offers
            </span>
          </a>

          {/* Updated Orange Glowing Contact Us Button */}
          <a href="#contact" 
            className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 
            text-white font-bold uppercase tracking-wider text-sm transition-all duration-300
            shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)]
            border border-orange-400/30 hover:border-orange-300
            active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      <motion.div
  initial={{ opacity: 0, scale: 0.9, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative hidden md:block"
>
  {/* The Floating Container */}
  <motion.div
    animate={{
      y: [0, -25, 0],
      rotateZ: [0, 1, 0, -1, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10 group"
  >
    {/* Animated Gradient Border (The "Hologram" Rim) */}
    <div className="relative p-[2px] rounded-[2.5rem] overflow-hidden bg-white/10">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#3b82f6_180deg,transparent_210deg,transparent_360deg)] opacity-40 group-hover:opacity-100"
      />
      
      <div className="relative bg-[#0a0a0a] rounded-[2.4rem] overflow-hidden border border-white/5">
        <img 
          src={gymy} 
          alt="GenZBuild Preview" 
          className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
        />
        
        {/* Glass Reflection Sweep */}
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        />
      </div>
    </div>

    {/* Small Floating Technical Elements */}
    <motion.div 
      animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-6 -left-6 glass p-3 rounded-xl border border-blue-500/30 backdrop-blur-md z-20"
    >
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
      </div>
    </motion.div>
  </motion.div>

  {/* Dynamic Shadow (Shrinks as image rises) */}
  <motion.div 
    animate={{ 
      scale: [1, 0.8, 1],
      opacity: [0.3, 0.1, 0.3] 
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-600/40 blur-[40px] rounded-[100%]"
  />
</motion.div>
    </div>
  </section>
);
const About = () => {
  const stats = [
    { label: 'Fast Delivery', value: '100%' },
    { label: 'Modern UI', value:'Premium' },
    { label: 'Responsive', value: 'All Devices' },
  ];

  return (
    <section id="about" className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Partner in{' '}
              <span className="gradient-text">
                Web Development & Digital Growth
              </span>
            </h2>

            {/* FIXED (no nested <p>) */}
            <p className="text-neutral-400 mb-6 leading-relaxed">
              We design and develop modern, high-performance websites that help
              businesses grow online. From startups to established brands, we
              create fast, responsive, and user-focused digital experiences.
            </p>

            <p className="text-neutral-400 mb-8 leading-relaxed">
              Our expertise includes frontend development, UI/UX design, and
              scalable web solutions tailored to your business goals.
            </p>

            {/* STATS WITH PREMIUM GLOW */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl text-center relative overflow-hidden
                  bg-white/5 border border-white/10
                  hover:scale-105 hover:-translate-y-1
                  transition-all duration-300 group"
                >
                  {/* glow background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>

                  <div className="relative z-10">
                    <div className="text-xl font-bold text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - PREMIUM IMAGE CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {[ 
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
              gymy,
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
            ].map((img, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden group
                border border-white/10 bg-white/5
                hover:scale-105 transition duration-500"
              >
                {/* glow border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition"></div>

                {/* image */}
                <img
                  src={img}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                  referrerPolicy="no-referrer"
                  alt=""
                />

                {/* shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
const Services = () => {
  const services = [
    { title: 'Website Development', desc: 'Full-scale websites built with React and modern frameworks for speed and scalability.',          icon: <Code2   className="text-blue-400"    size={32} /> },
    { title: 'Landing Pages',       desc: 'High-converting landing pages designed to turn visitors into loyal customers.',                  icon: <Layout  className="text-purple-400"  size={32} /> },
    { title: 'UI/UX Design',        desc: 'User-centric designs that are intuitive, accessible, and visually captivating.',                 icon: <Palette className="text-pink-400"    size={32} /> },
    { title: 'Maintenance & Support',desc:'Ongoing updates, security patches, and technical support to keep your site running.',            icon: <Settings className="text-emerald-400" size={32}/> },
  ];
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Expertise</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Comprehensive web solutions designed to elevate your business presence online.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-3xl hover:bg-white/10 transition-all group cursor-default">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: 'Restaurant-Website',   img: web, link: 'https://restaurant-rouge-mu.vercel.app/' },
    { title: 'Construction-Website', img: con, link: 'https://construction-opal-theta.vercel.app/' },
    { title: 'Prime-Gym Website',     img: gym, link: 'https://prime-gym-blond.vercel.app/' },
  ];
  return (
    <section id="portfolio" className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Client Projects</span></h2>
            <p className="text-neutral-400">A selection of our recent work and digital experiments.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-blue-400 font-semibold hover:underline">View All <ExternalLink size={16} /></a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-3xl overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                  Live Demo <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'Basic',    price: '₹2999',  features: ['Responsive Design','Upto 3 pages','Normal SEO','3-Month Support','🎁BONUS-OFFER:whatsapp intergration'],                                          popular: false },
    { name: 'Standard', price: '₹4999',  features: ['Premium-Design', 'Upto 6 pages','Custom UI Design','2-Days delivery','6-Months Support','Contact Form','🎁BONUS-OFFER:whatsapp intergration'],                           popular: true  },
    { name: 'Premium',  price: '₹7999', features: ['E-commerce Ready','Advanced Animations','Speed Optimization','1-Year Support','Priority Hosting'],                popular: false },
  ];
  const scrollToContact = (planName: string) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const ta = document.querySelector('textarea') as HTMLTextAreaElement | null;
      if (ta) ta.value = `I am interested in ${planName} plan`;
    }, 500);
  };
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple <span className="gradient-text">Pricing</span></h2>
          <p className="text-neutral-400">Transparent plans tailored for businesses of all sizes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-10 glass rounded-3xl relative flex flex-col ${plan.popular ? 'border-blue-500/50 glow' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className="text-neutral-500 text-sm mt-1">Starting from</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-300"><Check size={16} className="text-blue-400" /> {f}</li>
                ))}
              </ul>
              <button onClick={() => scrollToContact(plan.name)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/5 hover:bg-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Jerome Joshuva', role: 'Owner, Southern Restaurant', text: 'Genzbuild transformed our online presence. The speed and design of our new landing page are incredible!', avatar:av },
    { name: 'Santhosh ravi',  role: 'Founder, Iron Construction',  text: 'Exceptional attention to detail. The UI is clean and our users love the smooth animations.',              avatar:av2 },
    { name: 'Akash',    role: 'Owner, Flux Gym',             text: 'Delivery was faster than expected and the quality is top-notch. Highly recommended for any startup.',     avatar: av3 },
  ];
  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="gradient-text">Review</span></h2>
          <p className="text-neutral-400">Hear from the people we've worked with.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 glass rounded-3xl">
              <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-blue-400 text-blue-400" />)}</div>
              <p className="text-neutral-300 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-neutral-500">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Checking offer...');

    const formData = new FormData(event.currentTarget);
    const coupon = (formData.get('coupon') as string || '').toUpperCase();

    let finalPrice = '₹4999';

    if (coupon === 'GENZ999') {
      finalPrice = '₹999';
      setResult('🎉 Coupon Applied! You unlocked ₹999 offer!');
    } else if (coupon !== '') {
      setResult('⚠️ Invalid coupon. Standard price applies.');
    }

    formData.append('final_price', finalPrice);
    formData.append('access_key', 'e3668748-5c9f-461e-8084-6fb18ba6c7bd');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult(`✅ Request sent! Our team will contact you. Price: ${finalPrice}`);
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message);
      }
    } catch {
      setResult('❌ Submit failed. Try again.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's build something <span className="gradient-text">amazing</span> together.
            </h2>

            <p className="text-neutral-400 mb-10 text-lg">
              Get your business website in 2–3 days with our launch offer 🚀
            </p>

            {/* OFFER BOX */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20">
              <h3 className="text-lg font-bold mb-2">🔥 Launch Offer</h3>
              <p className="text-neutral-300">
                ₹4999 → <span className="text-green-400 font-bold text-xl">₹999</span>
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                Use code <span className="text-white font-semibold">GENZ999</span> (First 100 clients only)
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="glass p-10 rounded-3xl">
            <form className="space-y-6" onSubmit={onSubmit}>

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              {/* COUPON */}
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">Coupon Code</label>
                <input
                  name="coupon"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 uppercase"
                  placeholder="Enter GENZ999"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  placeholder="Tell me about your business (Gym, Restaurant, etc.)..."
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold transition-all"
              >
                Claim Offer 🚀
              </button>

              {/* RESULT */}
              {result && (
                <p className="text-center text-sm mt-4 text-green-400">
                  {result}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-neutral-950/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-bold gradient-text">GenZBuild</div>
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} GenZBuild. All rights reserved.
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/logesh-456" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:text-blue-400 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/logesh-a-a84303364" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:text-blue-400 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          {/* Instagram Logo Added Here */}
          <a 
            href="https://www.instagram.com/genzbuild.in?igsh=MTk2YnMxeGVjdTJkbg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:text-pink-500 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
        </div>

      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a href="https://wa.me/918838814132" target="_blank" rel="noopener noreferrer"
    className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 glow">
    <svg viewBox="0 0 448 512" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  </a>
);

// ─── Root App ────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="premium-bg text-white selection:bg-blue-500 selection:text-white min-h-screen">

      {/* ✨ Animated background — must be FIRST child of .premium-bg */}
      <AnimatedBackground />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}