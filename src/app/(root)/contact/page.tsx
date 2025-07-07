"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast("Thank you for your message. I'll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Let&apos;s discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold text-white mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or just want to connect. I&apos;ll do my best to
              get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Mail className="text-[#a855f7]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a
                    href="mailto:suyogluitel235@gmail.com"
                    className="text-gray-400 hover:text-[#a855f7] transition-colors"
                  >
                    suyogluitel235@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Phone className="text-[#a855f7]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <a
                    href="tel:+9779815007509"
                    className="text-gray-400 hover:text-[#a855f7] transition-colors"
                  >
                    +977 9815007509
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <MapPin className="text-[#a855f7]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/SuyogLuitel"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-500/10 hover:text-[#a855f7] transition-all duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/suyog-luitel-434933260"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-500/10 hover:text-[#a855f7] transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:suyogluitel2@gmail.com"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-500/10 hover:text-[#a855f7] transition-all duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#a855f7] mb-8">
                Send Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#a855f7]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#a855f7]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#a855f7]"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#a855f7]"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#a855f7] to-[#7c3aed] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white border-none"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
