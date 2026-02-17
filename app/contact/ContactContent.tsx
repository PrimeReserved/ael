"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { sendContactEmail } from "@/app/actions/sendEmail";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    contactType: "",
    companyName: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({ contactType: "", companyName: "", name: "", email: "", phone: "", message: "" });
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title={<span>GET IN <span className="text-primary">TOUCH</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1771096089/ael_tgtqm9.jpg"
      />

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="md:hidden grid grid-cols-1 gap-4 mb-12">
            <a
              href="tel:+2347034703200"
              className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors"
            >
              <Phone size={20} className="text-primary" />
              <div>
                <p className="text-xs font-semibold text-zinc-500">Call Us</p>
                <p className="text-sm font-bold text-zinc-900">+234-703-470-3200</p>
              </div>
            </a>

            <a
              href="mailto:info@authorenergy.com"
              className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors"
            >
              <Mail size={20} className="text-primary" />
              <div>
                <p className="text-xs font-semibold text-zinc-500">Email Us</p>
                <p className="text-sm font-bold text-zinc-900">info@authorenergy.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
              <MapPin size={20} className="text-primary" />
              <div>
                <p className="text-xs font-semibold text-zinc-500">Visit Us</p>
                <p className="text-sm font-bold text-zinc-900">IIHT Complex, KM 5 East West Road, Port Harcourt</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-3 uppercase tracking-tighter">
                Send Us a Message
              </h2>
              <p className="text-zinc-500 text-lg">
                Our team usually responds within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                <p className="text-zinc-600">We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3 uppercase tracking-wider">
                      I'm reaching out as
                    </label>
                    <select
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Select...</option>
                      <option value="individual">An Individual</option>
                      <option value="company">A Company</option>
                    </select>
                  </div>

                  {formData.contactType === "company" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-sm font-semibold text-zinc-900 mb-3 uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required={formData.contactType === "company"}
                        className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                        placeholder="Your company name"
                      />
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-900 mb-3 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-900 mb-3 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3 uppercase tracking-wider">
                      Phone Number <span className="text-zinc-400 font-normal text-xs">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-zinc-900 placeholder:text-zinc-400 font-medium"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-medium text-center">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full px-10 py-5 bg-primary text-secondary font-black uppercase tracking-widest text-[11px] rounded transition-all hover:bg-secondary hover:text-white hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    {!loading && <Send size={16} className="ml-2 transition-transform group-hover:translate-x-1" />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] relative mt-12 bg-zinc-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.385418128224!2d6.9854722!3d4.8752778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ced53a5c7fdf%3A0xe5f9226cb170321a!2sIIHT%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1710500000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
          title="Author Energy Limited Headquarters"
        ></iframe>
        
        {/* Map Overlay Label */}
        <div className="absolute top-8 left-8 z-10 hidden md:block">
          <div className="bg-secondary/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xs">
            <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-2">Visit Our Office</h4>
            <p className="text-white text-sm font-medium leading-relaxed">
              IIHT Complex, Opposite Jephthah College, KM 5 East West Road, Port Harcourt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
