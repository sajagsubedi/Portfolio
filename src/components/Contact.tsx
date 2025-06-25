"use client";

import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const { ref: inViewRef } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sajagsubedi03@gmail.com",
      href: "mailto:sajagsubedi03@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9769495964",
      href: "tel:+9779769495964",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pokhara, Nepal",
      href: "https://maps.google.com/?q=Pokhara",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/johndoe",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/johndoe",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/johndoe",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_28p58f9",
        "template_ga97rxq",
        formData,
        process.env.NEXT_PUBLIC_KEY
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div ref={inViewRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I&apos;m always open to discussing new opportunities, creative
                projects, or potential collaborations. Whether you have a
                specific project in mind or just want to say hello, feel free to
                reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg flex items-center justify-center glass transition-all duration-300 text-primary hover-lift`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-max p-8 rounded-xl glass">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="form-floating">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer"
                  />
                  <label htmlFor="name">Full Name</label>
                </div>

                <div className="form-floating">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer"
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              <div className="form-floating">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer"
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="form-floating">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder=" "
                  className="peer resize-none"
                />
                <label htmlFor="message">Message</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="primaryButton flex items-center justify-center gap-4 w-full btn-md hover-lift"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
