import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Road Monitoring",
      description: "Detects potholes, road damage, and hazards in real time using advanced computer vision and machine learning."
    },
    {
      icon: "🛡️",
      title: "Predictive Maintenance",
      description: "Prevents costly accidents by predicting when repairs are needed before problems become dangerous."
    },
    {
      icon: "🚧",
      title: "Traffic Insights",
      description: "Reduces congestion through intelligent traffic flow data and optimized routing recommendations."
    },
    {
      icon: "🌱",
      title: "Sustainability Focus",
      description: "Uses solar-powered sensors and eco-friendly technology to minimize environmental impact."
    }
  ];

  const stats = [
    { number: "20%", label: "Fewer Accidents", description: "in pilot regions" },
    { number: "100+", label: "KM Monitored", description: "of smart roads" },
    { number: "15", label: "Municipalities", description: "partnering with us" },
    { number: "24/7", label: "Monitoring", description: "real-time surveillance" }
  ];

  return (
    <>
      <Head>
        <title>SmartRoad Tech - Building Safer, Smarter Roads for The Gambia</title>
        <meta name="description" content="SmartRoad Tech uses AI and IoT to monitor road conditions, reduce accidents, and optimize traffic flow — making Gambian roads safer for everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="SmartRoad Tech Logo"
                width={40}
                height={40}
                className="rounded-lg mr-3"
              />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                SmartRoad Tech
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Solutions', 'Impact', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Solutions', 'Impact', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/4B1BD0A3-3FA5-44CD-B424-1F57AECE381A.jpeg"
            alt="Gambian road infrastructure"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-green-800/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Safer,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
                Smarter Roads
              </span>
              <br />
              for The Gambia
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              SmartRoad Tech uses AI and IoT to monitor road conditions, reduce accidents, 
              and optimize traffic flow — making Gambian roads safer for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Request a Demo
                <span className="ml-2">→</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Join the Movement
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals & Vision Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to transform road safety in The Gambia by providing predictive 
                maintenance solutions, real-time traffic insights, and data for better road 
                planning. We're committed to saving lives and creating a more connected nation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our vision is a future where every road in The Gambia is safer, smarter, 
                and more efficient — saving lives and supporting sustainable development 
                for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Solutions for Smart Roads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI and IoT technologies work together to create 
              the safest and most efficient road network in West Africa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Work in Action
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              See the roads and infrastructure we're working to improve across The Gambia. 
              Every image represents our commitment to safer, smarter transportation.
            </p>
          </motion.div>

          {/* Scrolling Image Gallery */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* First set of images */}
              {[
                "2274F0AD-912B-4F22-A931-07233D425BAE_4_5005_c.jpeg",
                "2F617934-A23B-4C91-8151-A68D747DA79B_4_5005_c.jpeg",
                "303072A7-8E26-46A0-BD9E-F8142F454413_4_5005_c.jpeg",
                "381443E1-1C34-43F0-815B-FC27521E437D_4_5005_c.jpeg",
                "5DC2CBDE-BDDB-4FC2-B669-55100245CE49.jpeg",
                "6B701E02-E049-400D-92AB-E09A7C3A7A41.jpeg",
                "8E74D91F-6269-4F64-8C39-F06B45DA19B8_4_5005_c.jpeg",
                "D8DB05DC-10B3-4E2E-A862-5AB7245B22B2.jpeg",
                "EF6D4CBF-E8D8-4F67-967B-9EF65A535715.jpeg"
              ].map((image, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/${image}`}
                    alt={`Road infrastructure in The Gambia ${index + 1}`}
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Smart Road Monitoring</p>
                    <p className="text-xs opacity-90">The Gambia Infrastructure</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                "2274F0AD-912B-4F22-A931-07233D425BAE_4_5005_c.jpeg",
                "2F617934-A23B-4C91-8151-A68D747DA79B_4_5005_c.jpeg",
                "303072A7-8E26-46A0-BD9E-F8142F454413_4_5005_c.jpeg",
                "381443E1-1C34-43F0-815B-FC27521E437D_4_5005_c.jpeg",
                "5DC2CBDE-BDDB-4FC2-B669-55100245CE49.jpeg",
                "6B701E02-E049-400D-92AB-E09A7C3A7A41.jpeg",
                "8E74D91F-6269-4F64-8C39-F06B45DA19B8_4_5005_c.jpeg",
                "D8DB05DC-10B3-4E2E-A862-5AB7245B22B2.jpeg",
                "EF6D4CBF-E8D8-4F67-967B-9EF65A535715.jpeg"
              ].map((image, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/${image}`}
                    alt={`Road infrastructure in The Gambia ${index + 1}`}
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Smart Road Monitoring</p>
                    <p className="text-xs opacity-90">The Gambia Infrastructure</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-green-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's make Gambia's roads safer together. Join us in building a smarter, 
              more connected future for our nation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Contact Us
                <span className="ml-2">📧</span>
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Partner With Us
                <span className="ml-2">🤝</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.jpeg"
                  alt="SmartRoad Tech Logo"
                  width={40}
                  height={40}
                  className="rounded-lg mr-3"
                />
                <span className="text-xl font-bold">SmartRoad Tech</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming road safety in The Gambia through AI, IoT, and data-driven insights. 
                Building the future of transportation, one smart road at a time.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((name, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={name}
                  >
                    <span className="text-white text-sm font-bold">{name[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Solutions', 'Impact', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['Careers', 'Blog', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📧</span>
                  info@smartroadtech.com
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📞</span>
                  +220 291 0061
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📍</span>
                  Banjul, The Gambia
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SmartRoad Tech. All rights reserved. Building safer roads for The Gambia.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
