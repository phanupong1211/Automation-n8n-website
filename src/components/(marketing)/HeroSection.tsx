"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HERO_BACKGROUND =
  "https://www.npsplc.com/storage/our-business/our-business-banner.jpg";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const heroInitial = shouldReduceMotion ? false : { scale: 0.95, opacity: 0 };
  const heroAnimate = shouldReduceMotion
    ? { opacity: 1 }
    : { scale: 1, opacity: 1 };

  const riseInitial = shouldReduceMotion ? false : { y: 20, opacity: 0 };
  const riseAnimate = shouldReduceMotion
    ? { opacity: 1 }
    : { y: 0, opacity: 1 };

  return (
    <section
      id="home"
      className="py-20 bg-cover bg-center relative min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={heroInitial}
          animate={heroAnimate}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/images/logo.png"
                alt="Automation Service"
                width={160}
                height={160}
                priority
                sizes="(max-width: 640px) 128px, 160px"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={riseInitial}
          animate={riseAnimate}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Automation Service
          </h1>
        </motion.div>

        <motion.div
          initial={riseInitial}
          animate={riseAnimate}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-gray-200"
        />

        <motion.div
          initial={riseInitial}
          animate={riseAnimate}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <p className="text-lg text-gray-200 leading-relaxed">
            We are a specialized team offering professional services in the
            inspection, maintenance, and improvement of industrial equipment,
            including
            <strong>
              {" "}
              control valves, safety valves, digital weight scales, and flow
              measurement systems.
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={riseInitial}
          animate={riseAnimate}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="min-w-[200px]"
          >
            <Link
              href="/login"
              className="block w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-3 px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Maintenance Dashboard
            </Link>
          </motion.div>

          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="min-w-[200px]"
          >
            <Link
              href="/reviews"
              className="block w-full rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white font-semibold text-center py-3 px-8 transition-all duration-300 border border-white shadow-md hover:shadow-xl"
            >
              Reviews
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={riseInitial}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Link
            href="#about"
            className="text-gray-300 hover:text-gray-100 transition-colors duration-200"
          >
            <motion.div
              animate={
                shouldReduceMotion ? { opacity: 1 } : { y: [0, 10, 0] }
              }
              transition={{ duration: 2, repeat: shouldReduceMotion ? 0 : Infinity }}
            >
              {/* Icon intentionally omitted */}
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
