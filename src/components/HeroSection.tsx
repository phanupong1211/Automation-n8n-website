"use client";

import { motion } from "framer-motion";
//import { ChevronDown, Play, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

//ลบ export
export function HeroSection() {
  return (
    <section
      id="home"
      className="py-20 bg-cover bg-center relative min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage:
          "url('https://www.npsplc.com/storage/our-business/our-business-banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/512679708_9965413113565196_7784809235629065664_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFA289W44cvkZllNopGZl1VGiyiMszKAm0aLKIyzMoCbX5d0oYgdB7AfwBxRFXCV_2j6cnkitla3m_9XpcBoOkN&_nc_ohc=UKXUxZwI9gkQ7kNvwFZzR-_&_nc_oc=AdlVO3xaShGfzst0AIR5yAzgS1ZE5xib1Ast_I5gz44eUyMVgXJuIWspXwN3Xf4ZQt0&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=hPtsIr0W4GNVKoyucBAGEQ&oh=00_AfOK6e0TPhmLDtNc0cGVlpG0vr_rwbPEwhoTZ_cEYAN49w&oe=686B65AD"
                alt="Automation Service (Instrument)"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Automation Service
            <span className="block text-xl sm:text-2xl md:text-3xl text-gray-200 font-normal mt-2">
              (Instrument)
            </span>
          </h1>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-gray-200"
        >
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <p className="text-lg text-gray-200 leading-relaxed">
            We are a specialized team offering professional services in the inspection, maintenance, and improvement  of industrial equipment, including
            <strong>
              {" "}
              control valves, safety valves, digital weight scales, and flow measurement systems.
            </strong>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="min-w-[200px]"
        >
        <Link
          href="/reportai"
          className="block w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-3 px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          AI Service Report
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="min-w-[200px]"
        >
        <Link
          href="/services"
          className="block w-full rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white font-semibold text-center py-3 px-8 transition-all duration-300 border border-white shadow-md hover:shadow-xl"
        >
          Download Service Reports
        </Link>
      </motion.div>
      </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex justify-center"
        >
          <Link
            href="#about"
            className="text-gray-300 hover:text-gray-100 transition-colors duration-200"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/*<ChevronDown size={32} /> */}
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
