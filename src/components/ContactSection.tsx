"use client";

import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help make your operations more efficient. Reach out
            for any service inquiries or collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Phanupong_c@npp.co.th
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  (+66) 85-835-1266
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-600 dark:text-red-400 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Prachin buri, Thailand
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="https://line.me/ti/p/KvIVHFGqQ4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition"
                >
                  <img
                    src="/icons8-line.svg"
                    alt="Line"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: AI Chat Prompt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full p-8 bg-gray-800 rounded-lg shadow-lg text-center"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Have a Question?
              </h2>
              <p className="text-gray-400 max-w-md">
                You can ask our AI assistant anything about services, projects
                or solutions. Click the button below to start a chat.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const chatButton = document.querySelector(
                  '[aria-label="Toggle chat"]'
                ) as HTMLButtonElement;
                if (chatButton) chatButton.click();
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with AI
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
