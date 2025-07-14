export default function ShopPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      🚧 หน้านี้อยู่ระหว่างปิดปรับปรุง
    </div>
  );
}


{/*"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { PaymentModal } from "@/components/PaymentModal";
import { ShoppingCart, Star, TrendingUp, Users, Filter } from "lucide-react";
import { useState } from "react";
import { trackButtonClick } from "@/utils/analytics";

// Sample products data - in a real app, this would come from an API
const products = [
  {
    id: "1",
    title: "Complete AI Development Course",
    titleTh: "คอร์สพัฒนา AI ครบวงจร",
    description: "Learn to build AI applications from scratch with hands-on projects",
    descriptionTh: "เรียนรู้การสร้างแอปพลิเคชัน AI ตั้งแต่เริ่มต้นพร้อมโปรเจคจริง รวมถึงการสร้าง Chatbot, Computer Vision, และ Natural Language Processing พร้อมโปรเจคจริงที่สามารถนำไปใช้งานได้ทันที",
    price: 2990,
    originalPrice: 4990,
    currency: "THB",
    images: [
      "https://images.unsplash.com/photo-1743419672503-3e363bcd3634?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
    ],
    type: "course" as const,
    rating: 4.8,
    reviewCount: 127,
    duration: "12 ชั่วโมง",
    students: 1250,
    link: "#",
    isExternal: false,
    badge: "Best Seller",
    badgeTh: "ขายดี",
    reviews: [
      {
        id: "r1",
        name: "สมชาย ใจดี",
        rating: 5,
        comment: "คอร์สดีมาก อธิบายเข้าใจง่าย มีโปรเจคให้ทำจริง แนะนำเลยครับ",
        date: "2024-01-15",
        verified: true
      },
      {
        id: "r2",
        name: "นิดา สวยงาม",
        rating: 5,
        comment: "เนื้อหาครบถ้วน อาจารย์สอนดี ตอบคำถามเร็ว คุ้มค่ามาก",
        date: "2024-01-10",
        verified: true
      }
    ]
  },
  {
    id: "2",
    title: "1-on-1 AI Consulting",
    titleTh: "ที่ปรึกษา AI แบบตัวต่อตัว",
    description: "Personal consultation for your AI project needs",
    descriptionTh: "คำปรึกษาส่วนตัวสำหรับโปรเจค AI ของคุณ วิเคราะห์ปัญหา ออกแบบโซลูชัน และให้คำแนะนำการพัฒนาแบบละเอียด",
    price: 3500,
    currency: "THB",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    ],
    type: "consulting" as const,
    duration: "2 ชั่วโมง",
    link: "#",
    isExternal: false
  },
  {
    id: "3",
    title: "AI Code Generator Tool",
    titleTh: "เครื่องมือสร้างโค้ด AI",
    description: "Automated code generation tool for faster development",
    descriptionTh: "เครื่องมือสร้างโค้ดอัตโนมัติเพื่อการพัฒนาที่รวดเร็ว รองรับหลายภาษาโปรแกรม มี Template สำเร็จรูป",
    price: 0,
    currency: "THB",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    ],
    type: "tool" as const,
    rating: 4.5,
    reviewCount: 89,
    link: "#",
    isExternal: false,
    badge: "Free",
    badgeTh: "ฟรี",
    reviews: [
      {
        id: "r3",
        name: "วิชัย โค้ดดี",
        rating: 4,
        comment: "ใช้งานง่าย ช่วยประหยัดเวลาได้เยอะ แต่บางครั้งโค้ดที่ออกมายังต้องแก้ไขเพิ่มเติม",
        date: "2024-01-08",
        verified: true
      }
    ]
  },
  {
    id: "4",
    title: "Advanced Flutter Course",
    titleTh: "คอร์ส Flutter ขั้นสูง",
    description: "Master Flutter development with advanced techniques",
    descriptionTh: "เชี่ยวชาญการพัฒนา Flutter ด้วยเทคนิคขั้นสูง สร้างแอปที่สวยงามและมีประสิทธิภาพ รวมถึง State Management และ Animation",
    price: 1990,
    originalPrice: 2990,
    currency: "THB",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
    ],
    type: "course" as const,
    rating: 4.7,
    reviewCount: 203,
    duration: "8 ชั่วโมง",
    students: 890,
    link: "#",
    isExternal: false
  },
  {
    id: "5",
    title: "Cloud Architecture Consulting",
    titleTh: "ที่ปรึกษาสถาปัตยกรรม Cloud",
    description: "Expert guidance for cloud infrastructure design",
    descriptionTh: "คำแนะนำจากผู้เชี่ยวชาญสำหรับการออกแบบโครงสร้าง Cloud ครอบคลุม AWS, Azure, GCP และ Best Practices",
    price: 5000,
    currency: "THB",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    ],
    type: "consulting" as const,
    duration: "3 ชั่วโมง",
    link: "#",
    isExternal: false
  },
  {
    id: "6",
    title: "Udemy - Machine Learning A-Z",
    titleTh: "Udemy - Machine Learning A-Z",
    description: "Comprehensive ML course on Udemy platform",
    descriptionTh: "คอร์ส Machine Learning ครบวงจรบนแพลตฟอร์ม Udemy เรียนรู้ทุกอย่างตั้งแต่พื้นฐานจนถึงขั้นสูง",
    price: 599,
    originalPrice: 1999,
    currency: "THB",
    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
    ],
    type: "affiliate" as const,
    rating: 4.9,
    reviewCount: 15420,
    duration: "44 ชั่วโมง",
    students: 125000,
    link: "https://udemy.com",
    isExternal: true,
    badge: "70% OFF",
    badgeTh: "ลด 70%"
  }
];

const categories = [
  { id: "all", label: "ทั้งหมด", labelEn: "All" },
  { id: "course", label: "คอร์ส", labelEn: "Courses" },
  { id: "consulting", label: "ที่ปรึกษา", labelEn: "Consulting" },
  { id: "tool", label: "เครื่องมือ", labelEn: "Tools" },
  { id: "affiliate", label: "พาร์ทเนอร์", labelEn: "Partners" }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [productToPurchase, setProductToPurchase] = useState<typeof products[0] | null>(null);

  const filteredProducts = products.filter(product =>
    selectedCategory === "all" || product.type === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "popular":
        return (b.students || 0) - (a.students || 0);
      default:
        return 0;
    }
  });

  const handleProductClick = async (product: typeof products[0]) => {
    // Track modal open
    await trackButtonClick(
      'product_modal_open',
      'Open Product Details',
      `modal-${product.id}`,
      {
        productId: product.id,
        productName: product.titleTh,
        productType: product.type
      }
    );

    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handlePurchaseClick = async (product: typeof products[0]) => {
    // Track payment modal open
    await trackButtonClick(
      'payment_modal_open',
      'Open Payment Modal',
      `payment-${product.id}`,
      {
        productId: product.id,
        productName: product.titleTh,
        productType: product.type,
        price: product.price,
        currency: product.currency
      }
    );

    setProductToPurchase(product);
    setIsPaymentModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedProduct(null);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setProductToPurchase(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}{/*
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 thai-text">
              ร้านค้าและผลิตภัณฑ์
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 thai-text">
              คอร์สเรียน บริการที่ปรึกษา และเครื่องมือที่จะช่วยพัฒนาทักษะของคุณ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {products.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 thai-text">
                ผลิตภัณฑ์
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                4.8
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 thai-text">
                คะแนนเฉลี่ย
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                2.5K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 thai-text">
                นักเรียน
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                95%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 thai-text">
                ความพึงพอใจ
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters 
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            {/* Category Filter *
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={async () => {
                    // Track category filter click
                    await trackButtonClick(
                      'category_filter',
                      category.label,
                      `category-${category.id}`,
                      {
                        previousCategory: selectedCategory,
                        newCategory: category.id
                      }
                    );
                    setSelectedCategory(category.id);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Filter *
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 thai-text">เรียงตาม:</span>
              <select
                value={sortBy}
                onChange={async (e) => {
                  const newSortBy = e.target.value;
                  // Track sort change
                  await trackButtonClick(
                    'sort_filter',
                    `Sort by: ${newSortBy}`,
                    `sort-${newSortBy}`,
                    {
                      previousSort: sortBy,
                      newSort: newSortBy
                    }
                  );
                  setSortBy(newSortBy);
                }}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">แนะนำ</option>
                <option value="price-low">ราคาต่ำ - สูง</option>
                <option value="price-high">ราคาสูง - ต่ำ</option>
                <option value="rating">คะแนนสูงสุด</option>
                <option value="popular">ยอดนิยม</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid *
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 thai-text">
              ผลิตภัณฑ์และบริการ
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto thai-text">
              เลือกจากคอร์สเรียน บริการที่ปรึกษา และเครื่องมือที่หลากหลาย
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}

              />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 thai-text">
                ไม่พบผลิตภัณฑ์
              </h3>
              <p className="text-gray-600 dark:text-gray-400 thai-text">
                ลองเปลี่ยนหมวดหมู่หรือเงื่อนไขการค้นหา
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modals *
      <ProductDetailModal
        isOpen={isDetailModalOpen}
        onClose={closeDetailModal}
        product={selectedProduct}

      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={closePaymentModal}
        product={productToPurchase}
      />
    </div>
  );
}
*/}