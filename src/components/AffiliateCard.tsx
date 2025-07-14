"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface AffiliateCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  link?: string;
  badge?: string;
  index: number;
}

//export default
export function AffiliateCard({
  title,
  description,
  image,
  highlights,
  link,
  badge = "Service",
  index
}: AffiliateCardProps) {
  const getBadgeColor = () => {
    switch (badge) {
      case "IoT Solution":
        return "bg-blue-600";
      case "Valve":
        return "bg-orange-500";
      case "Document":
        return "bg-purple-500";
      case "Flow":
        return "bg-pink-500";
      case "Scale":
        return "bg-yellow-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 left-3 ${getBadgeColor()} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {badge}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {highlights.map((point, idx) => (
            <li key={idx}>• {point}</li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            <ExternalLink className="inline-block w-4 h-4 mr-1" />
            ดูรายละเอียด
          </a>
        )}
      </div>
    </motion.div>
  );
}
