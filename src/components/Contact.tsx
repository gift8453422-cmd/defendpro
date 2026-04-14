import { Phone, Mail, Instagram, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
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
    <section id="contact" className="py-10 md:py-[60px] bg-tactical-bg px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-tactical-primary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-headline font-black text-tactical-text uppercase tracking-tighter mb-4">
              Book Your <span className="text-tactical-primary">Training</span>
            </h2>
            <p className="text-sm md:text-base text-tactical-muted tracking-widest uppercase font-bold mb-10">
              Ready to start? Choose your command channel
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12 max-w-md mx-auto lg:mx-0">
              <a 
                href="tel:7738408406" 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-1 hover:bg-white/10 hover:border-tactical-primary/50 transition-all duration-300 group"
              >
                <span className="font-headline font-semibold text-sm md:text-base text-white tracking-wide group-hover:text-tactical-primary transition-colors">Call Now</span>
                <span className="text-[10px] md:text-xs font-medium text-tactical-muted">+91 7738408406</span>
              </a>
              <a 
                href="https://wa.me/917738408406" 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-1 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 group"
              >
                <span className="font-headline font-semibold text-sm md:text-base text-white tracking-wide group-hover:text-green-500 transition-colors">WhatsApp</span>
                <span className="text-[10px] md:text-xs font-medium text-tactical-muted">Instant Response</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-tactical-muted/10">
              <a href="mailto:defendproacademy@gmail.com" className="flex flex-col items-center lg:items-start gap-1 group">
                <Mail className="text-tactical-primary group-hover:scale-110 transition-transform" size={20} />
                <p className="text-[8px] font-headline font-bold text-tactical-muted uppercase tracking-widest">Email</p>
                <p className="text-xs font-bold text-tactical-text group-hover:text-tactical-primary transition-colors">defendproacademy@gmail.com</p>
              </a>
              <a href="https://instagram.com/defendproacademy" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center lg:items-start gap-1 group">
                <Instagram className="text-tactical-primary group-hover:scale-110 transition-transform" size={20} />
                <p className="text-[8px] font-headline font-bold text-tactical-muted uppercase tracking-widest">Instagram</p>
                <p className="text-xs font-bold text-tactical-text group-hover:text-tactical-primary transition-colors">@defendproacademy</p>
              </a>
              <a href="https://maps.google.com/?q=Mumbai,Maharashtra" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center lg:items-start gap-1 group">
                <MapPin className="text-tactical-primary group-hover:scale-110 transition-transform" size={20} />
                <p className="text-[8px] font-headline font-bold text-tactical-muted uppercase tracking-widest">Location</p>
                <p className="text-xs font-bold text-tactical-text group-hover:text-tactical-primary transition-colors">Mumbai, Maharashtra</p>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="bg-tactical-surface border border-white/5 p-8 rounded-2xl shadow-2xl relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-headline font-bold text-white mb-2">Request Intel</h3>
                <p className="text-tactical-muted text-sm">Fill out the form below and our team will contact you to discuss your training needs.</p>
              </div>

              {/* 
                NOTE: To receive emails, change the action URL to your Web3Forms or Formspree endpoint.
                Example: action="https://api.web3forms.com/submit" 
              */}
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 p-8 rounded-xl text-center flex flex-col items-center gap-4"
                >
                  <CheckCircle className="text-green-500" size={48} />
                  <div>
                    <h3 className="text-xl font-headline font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-tactical-muted text-sm">Thank you for reaching out. Our team will contact you shortly.</p>
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
                  className="flex flex-col gap-4"
                >
                  {/* Replace with your actual Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="20df8e7c-89b2-4ee5-92ed-8be6bfaa3bc2" />
                  <input type="hidden" name="subject" value="New DefendPro Enquiry" />
                  <input type="hidden" name="from_name" value="DefendPro Website" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold text-tactical-muted uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-tactical-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-bold text-tactical-muted uppercase tracking-widest">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-tactical-primary transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-tactical-muted uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-tactical-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="interest" className="text-[10px] font-bold text-tactical-muted uppercase tracking-widest">Area of Interest</label>
                    <select 
                      id="interest" 
                      name="interest"
                      required
                      defaultValue=""
                      className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-tactical-primary transition-colors appearance-none"
                    >
                      <option value="" disabled>Select an option...</option>
                      <option value="Personal Training">Personal 1-on-1 Training</option>
                      <option value="Corporate Workshop">Corporate Workshop</option>
                      <option value="Women Safety">Women Safety Group</option>
                      <option value="Society/NGO">Society / NGO Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-tactical-muted uppercase tracking-widest">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={3}
                      className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-tactical-primary transition-colors resize-none"
                      placeholder="Tell us about your specific requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 bg-tactical-primary text-tactical-bg font-headline font-bold uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Request'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
            
            {/* Decorative background block */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-tactical-primary/20 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

