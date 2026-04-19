import { Phone, Mail, Instagram, MapPin, Send, MessageSquare, CheckCircle, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        console.error("Error", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-tactical-bg px-6 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.01] z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-tactical-primary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
              Book Your <br /><span className="text-tactical-secondary">Training</span>
            </h2>
            <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold mb-6">
              READY TO START? CHOOSE YOUR COMMAND CHANNEL.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-md mx-auto lg:mx-0">
              <a 
                href="tel:7738408406" 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 flex flex-col items-center lg:items-start justify-center gap-2 hover:bg-white/10 hover:border-tactical-primary/50 transition-all duration-500 group"
              >
                <span className="font-headline font-bold text-lg text-white tracking-tight uppercase group-hover:text-tactical-primary transition-colors">Call Now</span>
                <span className="text-xs font-medium text-stone-500 tracking-widest">+91 7738408406</span>
              </a>
              <a 
                href="https://wa.me/917738408406" 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 flex flex-col items-center lg:items-start justify-center gap-2 hover:bg-white/10 hover:border-green-500/50 transition-all duration-500 group"
              >
                <span className="font-headline font-bold text-lg text-white tracking-tight uppercase group-hover:text-green-500 transition-colors">WhatsApp</span>
                <span className="text-xs font-medium text-stone-500 tracking-widest">INSTANT RESPONSE</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/5">
              <a href="mailto:defendproacademy@gmail.com" className="flex flex-col items-center lg:items-start gap-2 group">
                <Mail className="text-tactical-primary group-hover:scale-110 transition-transform duration-500" size={20} />
                <p className="text-[10px] font-headline font-bold text-stone-500 uppercase tracking-[0.2em]">Email</p>
                <p className="text-sm font-bold text-tactical-text group-hover:text-tactical-primary transition-colors break-all">defendproacademy@gmail.com</p>
              </a>
              <a href="https://instagram.com/defendproacademy" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center lg:items-start gap-2 group">
                <Instagram className="text-tactical-primary group-hover:scale-110 transition-transform duration-500" size={20} />
                <p className="text-[10px] font-headline font-bold text-stone-500 uppercase tracking-[0.2em]">Instagram</p>
                <p className="text-sm font-bold text-tactical-text group-hover:text-tactical-primary transition-colors">@defendproacademy</p>
              </a>
              <a href="https://maps.app.goo.gl/amUFUEC6ukH1mQUv7?g_st=ac" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center lg:items-start gap-2 group">
                <MapPin className="text-tactical-primary group-hover:scale-110 transition-transform duration-500" size={20} />
                <p className="text-[10px] font-headline font-bold text-stone-500 uppercase tracking-[0.2em]">Location</p>
                <p className="text-sm font-bold text-tactical-text group-hover:text-tactical-primary transition-colors">Mumbai, Maharashtra</p>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="bg-tactical-surface border border-white/5 p-10 rounded-sm shadow-2xl relative z-10">
              <div className="mb-6">
                <h3 className="text-3xl font-headline font-bold text-white mb-3 uppercase tracking-tight">Request Intel</h3>
                <p className="text-stone-400 leading-relaxed">Fill out the form below and our team will contact you to discuss your training needs.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/5 border border-green-500/10 p-10 rounded-sm text-center flex flex-col items-center gap-6"
                >
                  <CheckCircle className="text-green-500" size={56} />
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-white mb-3 uppercase">Message Sent!</h3>
                    <p className="text-stone-400">Thank you for reaching out. Our team will contact you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-tactical-primary text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <input type="hidden" name="access_key" value="20df8e7c-89b2-4ee5-92ed-8be6bfaa3bc2" />
                  <input type="hidden" name="subject" value="New DefendPro Enquiry" />
                  <input type="hidden" name="from_name" value="DefendPro Website" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white text-sm focus:outline-none focus:border-tactical-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        className="bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white text-sm focus:outline-none focus:border-tactical-primary transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white text-sm focus:outline-none focus:border-tactical-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="interest" className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">Area of Interest</label>
                    <div className="relative">
                      <select 
                        id="interest" 
                        name="interest"
                        required
                        defaultValue=""
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white text-sm focus:outline-none focus:border-tactical-primary transition-all appearance-none"
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="Personal Training">Personal 1-on-1 Training</option>
                        <option value="Corporate Workshop">Corporate Workshop</option>
                        <option value="Women Safety">Women Safety Group</option>
                        <option value="Society/NGO">Society / NGO Training</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                        <Plus size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      className="bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white text-sm focus:outline-none focus:border-tactical-primary transition-all resize-none"
                      placeholder="Tell us about your specific requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 bg-tactical-primary text-tactical-bg font-headline font-black uppercase tracking-[0.2em] py-5 rounded-sm flex items-center justify-center gap-3 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-tactical-primary/10"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'SUBMIT REQUEST'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
            
            {/* Decorative background block */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-tactical-primary/10 rounded-sm -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

