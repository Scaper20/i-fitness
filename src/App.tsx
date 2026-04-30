/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, ChevronRight, User, Dumbbell, Search, MousePointer2, Phone, Plus, Minus } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600/30">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center group cursor-pointer">
          <div className="h-12 md:h-16 flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrcgZYYzYe9i3dvR0FWLyotGvoothYm6yEg&s" 
              alt="I-Fitness Logo"
              className="h-full w-auto object-contain brightness-110 contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#" className="hover:text-red-500 transition-colors">Programs</a>
          <a href="#" className="hover:text-red-500 transition-colors">Locations</a>
          <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">
            Shop <ChevronRight className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hidden sm:block text-sm font-medium uppercase tracking-wide hover:text-red-500 transition-colors">
            Partner Program
          </a>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-sm font-semibold transition-all group">
            <User className="w-4 h-4 group-hover:text-red-500" />
            <span>Member Login</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"></div>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-red-400">
              New Locations Opening Soon
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase leading-[0.85] mb-8 font-display"
          >
            Find a <span className="text-red-600 italic">I-Fitness</span><br />
            Gym near you.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 font-medium leading-relaxed mb-10"
          >
            World-class training, elite equipment, and a relentless community. 
            Join the movement that pushes you to be your absolute best self.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-red-600/20 active:scale-95">
              Find My Gym
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 border-2 border-white/20 hover:border-white/40 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group active:scale-95">
              <span>Shop Gear</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/40"
        >
          <MousePointer2 className="w-6 h-6 rotate-180" />
        </motion.div>
      </section>

      {/* Location Selector Section */}
      <section className="relative z-30 -mt-24 px-4 md:px-12 max-w-7xl mx-auto pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[700px]"
        >
          {/* Left Panel: Search & List */}
          <div className="w-full lg:w-[400px] flex flex-col border-b lg:border-b-0 lg:border-r border-neutral-800 bg-[#0f0f0f]">
            <div className="p-8 pb-4">
              <h2 className="text-3xl font-bold mb-2 font-display text-white">Select Location</h2>
              <p className="text-neutral-400 text-sm mb-6">Auto-detecting nearest gym...</p>
              
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-red-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Zip, City, or State" 
                  className="w-full bg-black border border-neutral-800 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500/50 transition-all font-medium"
                />
              </div>
            </div>

            {/* Scrollable Locations List */}
            <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-4 custom-scrollbar">
              {/* Active Location Card */}
              <div className="p-5 bg-black border border-red-600/50 rounded-2xl relative group cursor-pointer transition-all hover:bg-neutral-900">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-white">Lagos (HQ)</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">Nearest</span>
                </div>
                <p className="text-neutral-400 text-xs mb-1">8303 Victoria Island Blvd, Lagos</p>
                <p className="text-neutral-500 text-[10px] uppercase font-bold mb-5 tracking-tight">Open Today: 6:00 AM - 9:00 PM</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 bg-white text-black hover:bg-neutral-200 rounded-lg text-xs font-bold transition-colors">
                    View Site
                  </button>
                  <button className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all group/btn">
                    <Phone className="w-4 h-4 text-neutral-400 group-hover/btn:text-white" />
                  </button>
                  <button className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all group/btn">
                    <MapPin className="w-4 h-4 text-neutral-400 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>

              {/* Other Locations */}
              {[
                { name: 'Abuja', addr: '9130 Wuse Rd, Abuja', time: '7:00 AM - 8:30 PM' },
                { name: 'Ibadan', addr: '47 Bodija Cir, Ibadan', time: '6:30 AM - 9:00 PM' },
                { name: 'Lekki Phase 1', addr: '12400 Lekki Blvd, Lagos', time: '10:00 AM - 8:00 PM' },
              ].map((loc) => (
                <div key={loc.name} className="p-5 bg-transparent border border-neutral-800 rounded-2xl hover:bg-neutral-900 transition-all cursor-pointer group">
                  <h3 className="font-bold text-lg text-white mb-1">{loc.name}</h3>
                  <p className="text-neutral-400 text-xs mb-1">{loc.addr}</p>
                  <p className="text-neutral-500 text-[10px] uppercase font-bold mb-5 tracking-tight group-hover:text-neutral-400 transition-colors">Open Today: {loc.time}</p>
                  <button className="w-full py-2.5 border border-neutral-800 hover:border-neutral-600 rounded-lg text-xs font-bold text-neutral-400 hover:text-white transition-all">
                    View Site
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Map interface */}
          <div className="flex-1 relative bg-[#050505] overflow-hidden select-none">
            {/* Map Placeholder with dark theme */}
            <div className="absolute inset-0 opacity-60">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Dark Map Placeholder"
                className="w-full h-full object-cover scale-150 contrast-150 brightness-50 mix-blend-luminosity"
              />
            </div>
            
            {/* Map Markers Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              {/* Active Marker */}
              <div className="relative pointer-events-auto">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 whitespace-nowrap bg-black border border-neutral-800 px-4 py-2 rounded-lg text-[11px] font-bold tracking-tight shadow-2xl">
                  I-Fitness Lagos (HQ)
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-neutral-800 rotate-45 -mt-1"></div>
                </div>
                <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute -inset-2 bg-red-600/30 rounded-full animate-ping"></div>
              </div>

              {/* Decorative inactive markers */}
              <div className="absolute top-[35%] left-[28%] w-2 h-2 bg-neutral-500 rounded-full border border-white"></div>
              <div className="absolute bottom-[40%] right-[38%] w-2 h-2 bg-neutral-500 rounded-full border border-white"></div>
              <div className="absolute top-[60%] right-[45%] w-2 h-2 bg-neutral-500 rounded-full border border-white"></div>
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2">
              <button className="w-10 h-10 bg-black/80 backdrop-blur border border-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-800 transition-colors">
                <Plus className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-black/80 backdrop-blur border border-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-800 transition-colors">
                <Minus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none mb-6 font-display">
              Elite <span className="text-red-600 italic">Programs</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Engineered for those who refuse to settle. Our programs are led by world-class athletes 
              and designed to push your physiological limits.
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-black font-bold uppercase text-sm tracking-widest hover:bg-red-600 hover:text-white transition-all">
            See All Programs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Mixed Martial Arts', category: 'Combat', img: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1974&auto=format&fit=crop' },
            { title: 'Strength & Conditioning', category: 'Performance', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Elite Bodybuilding', category: 'Hypertrophy', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop' },
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] group overflow-hidden rounded-2xl cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-red-600 text-[10px] font-bold uppercase tracking-widest mb-3 rounded-full">{item.category}</span>
                <h3 className="text-3xl font-bold uppercase tracking-tight leading-tight mb-4 font-display">{item.title}</h3>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-900 py-20 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { val: '50+', label: 'Worldwide Locations' },
            { val: '250k+', label: 'Active Warriors' },
            { val: '15+', label: 'World-Class Coaches' },
            { val: '24/7', label: 'Availability' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-black text-white font-display mb-2">{stat.val}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-red-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 font-display">
            CHOOSE YOUR <span className="text-red-600">STRENGTH</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">Flexible plans designed for consistency and results. No hidden fees, just pure grind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic', price: '29', features: ['All 24/7 locations', 'Standard equipment', 'Mobile app access', 'Locker room access'] },
            { name: 'Elite', price: '59', popular: true, features: ['Unlimited group classes', 'Advanced performance tech', 'Personal locker', 'Guest passes', 'Nutrition roadmap'] },
            { name: 'Alpha', price: '89', features: ['1-on-1 coaching (4/mo)', 'Alpha recovery suite', 'Private training zones', 'Custom supplement plan', 'Family add-on'] },
          ].map((plan) => (
            <div 
              key={plan.name}
              className={`p-10 rounded-3xl border ${plan.popular ? 'bg-white text-black border-white shadow-2xl shadow-white/10 scale-105 z-10' : 'bg-neutral-900 border-neutral-800 text-white'} transition-all`}
            >
              {plan.popular && <div className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full inline-block mb-6">Most Popular</div>}
              <h3 className="text-2xl font-bold uppercase mb-2 font-display">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black italic">$</span>
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                <span className={`text-sm tracking-widest ${plan.popular ? 'text-neutral-500' : 'text-neutral-400'}`}>/MO</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-red-600' : 'bg-red-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all ${plan.popular ? 'bg-black text-white hover:bg-neutral-800' : 'bg-red-600 text-white hover:bg-red-700'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrcgZYYzYe9i3dvR0FWLyotGvoothYm6yEg&s" alt="Logo" className="h-12 mb-6" />
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Pushing human limits through science, community, and relentless effort. Join the movement.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-red-500 hover:text-red-500 cursor-pointer transition-all">
                  <User size={18} />
                </div>
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-red-500 hover:text-red-500 cursor-pointer transition-all">
                  <Dumbbell size={18} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li className="hover:text-red-500 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Locations</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Franchise</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Training</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li className="hover:text-red-500 transition-colors cursor-pointer">MMA Training</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Bodybuilding</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Powerlifting</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Yoga & Mobility</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li className="hover:text-red-500 transition-colors cursor-pointer">Member Portal</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Shop Help</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-xs">© 2024 I-Fitness. All Rights Reserved. Stay Hungry.</p>
            <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-neutral-600">
              <a href="#" className="hover:text-white transition-colors">Term of use</a>
              <a href="#" className="hover:text-white transition-colors">Safety Guide</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

