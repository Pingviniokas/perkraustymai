// src/components/sections/Services.tsx
"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Package, Users, Shield, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ParallaxScroll } from '@/components/ui/ParallaxScroll';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: <Truck />,
      title: "Local Moving",
      description: "Professional moving services within your city with hourly rates and flexible scheduling.",
      features: ["Same-day available", "Hourly rates", "Free boxes"]
    },
    {
      icon: <Package />,
      title: "Long Distance",
      description: "Interstate moving with guaranteed delivery dates and real-time tracking.",
      features: ["Price match", "GPS tracking", "Insurance included"]
    },
    {
      icon: <Shield />,
      title: "Full Service",
      description: "Complete moving solution including packing, loading, transport, and unpacking.",
      features: ["Professional packers", "All supplies included", "Furniture assembly"]
    },
    {
      icon: <Users />,
      title: "Business Moving",
      description: "Specialized corporate relocation services with minimal disruption.",
      features: ["Weekend moves", "IT equipment", "Office setup"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <ParallaxScroll offset={100}>
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
        </div>
      </ParallaxScroll>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.h2 
              ref={ref}
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              Our Moving Services
            </motion.h2>
            <p className="text-gray-600 text-lg">
              Comprehensive moving solutions tailored to your specific needs
            </p>
          </div>
        </RevealOnScroll>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index}>
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-red-50 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    
                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <button className="flex items-center gap-2 text-red-600 group/button">
                      Learn More 
                      <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll>
          <motion.div 
            className="mt-16 text-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            <button className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-colors inline-flex items-center gap-2 group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Services;