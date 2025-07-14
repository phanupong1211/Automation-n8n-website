(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/AffiliateCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AffiliateCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
"use client";
;
;
;
function AffiliateCard({ title, description, image, highlights, link, badge = "Service", index }) {
    const getBadgeColor = ()=>{
        switch(badge){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        className: "bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: title,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AffiliateCard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-3 left-3 ${getBadgeColor()} text-white px-3 py-1 rounded-full text-sm font-medium`,
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/AffiliateCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AffiliateCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/AffiliateCard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/AffiliateCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-1",
                        children: highlights.map((point, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    point
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/AffiliateCard.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AffiliateCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "inline-block w-4 h-4 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AffiliateCard.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            "ดูรายละเอียด"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AffiliateCard.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AffiliateCard.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AffiliateCard.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = AffiliateCard;
var _c;
__turbopack_context__.k.register(_c, "AffiliateCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/reviews/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReviewsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AffiliateCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AffiliateCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const services = [
    {
        id: "1",
        title: "Valve Service",
        description: "การบำรุงรักษาวาล์ว (Valve Maintenance)",
        image: "https://i.postimg.cc/63GDZjFX/136-Valve-Overhaul-Disassembly-141151.jpg",
        highlights: [
            "Leak Test",
            "Overhaul & Lapping",
            "Control Valve, Manaul Valve"
        ],
        badge: "Valve",
        details: `Valve Services
      - เรามีบริการตรวจสอบ บำรุงรักษา Control Valve ครอบคลุมทุกประเภท เช่น Globe, Ball, Butterfly และอื่น ๆ
      เพื่อให้ระบบควบคุมของคุณทำงานได้ตามสเปก ลดความสูญเสีย และเพิ่มเสถียรภาพในกระบวนการ

      High Light
      - Overhaul & Calibration — ถอดประกอบ เปลี่ยนอะไหล่ ซีล แพ็คกิ้ง
      - Leak Test & Pressure Test — ตรวจสอบการรั่ว และทดสอบการทนแรงดันตามมาตรฐาน ANSI/API
      - Positioner & Actuator Services — ตรวจสอบ-ซ่อม Positioner ทั้ง Pneumatic & Smart, ปรับจูน Actuator
      - ออกใบรายงานผลทดสอบทันทีหลังจบงาน พร้อมแนะนำรอบการบำรุงรักษาในอนาคต`,
        moreImage: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/lorawansmartfac.png",
                alt: "LoRaWAN Smart Factory",
                width: 800,
                height: 600,
                className: "rounded-lg shadow-lg"
            }, void 0, false, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    },
    {
        id: "2",
        title: "Safety Valve Service",
        description: "การบำรุงรักษาวาล์นิรภัย (Safety Valve Maintenance)",
        image: "https://i.postimg.cc/pVDVtbcP/S-21291016.jpg",
        highlights: [
            "Leak Test",
            "Overhaul & Lapping",
            "Section VIII and Section I"
        ],
        badge: "Valve",
        details: `Safety Valve Services
      - เรามอบบริการครบวงจร ตั้งแต่บำรุงรักษาจนถึงการทดสอบ Safety Valve

      High Light
      - Overhaul & Repair — ถอดประกอบทุกชิ้นส่วน ทำความสะอาด Lapping Seat/Disc ปรับแต่งและเปลี่ยนอะไหล่ตามสภาพ
      - Onsite & Workshop — รองรับงานซ่อมบำรุงทั้งในโรงงาน และใน Workshop ที่มีเครื่องมือพร้อม
      - เอกสารรับรองครบ — รายงานผลการทดสอบ ส่งมอบทันหลังจบงาน`,
        moreImage: [
            "https://maximo.advanceagro.net/DOCLINKS/2025/PHOTOSTAMPS/21782_Inprg_251143535_01.jpg",
            "https://i.postimg.cc/GhY7L1rd/Reserved-Image-Attachment-7-Picture-36-ee9aef53-bb33-41d9-ba2f-19a3504a6f17-1-1.jpg",
            "https://i.postimg.cc/gkL6ZYBL/LINE-ALBUM-572025-250705-1.jpg"
        ]
    },
    {
        id: "3",
        title: "On-Line Test PSV Service",
        description: "การทดสอบวาล์วนิรภัยในขณะเดินเครื่อง",
        image: "https://i.postimg.cc/QdLqLKRS/S-46940235.jpg",
        highlights: [
            "ตรวจสอบค่า Set point",
            "ไม่หยุดระบบ",
            "ตั้งค่าใหม่ได้จากหน้างาน"
        ],
        badge: "Valve",
        details: `On-Line Test Safety Valve
      - เรามีบริการทดสอบ Safety Valve ขณะระบบกำลังเดินเครื่อง (On-Line Testing)
      ช่วยลดความเสี่ยงจากการหยุดโรงงานโดยไม่จำเป็น และมั่นใจได้ว่าวาล์วของคุณพร้อมทำงานเมื่อถึงจุดตั้งค่า

      High Light
      - ไม่ต้อง Shutdown — ทดสอบได้ขณะระบบเดินเครื่อง ลดเวลาหยุดซ่อมบำรุง และลดค่าใช้จ่ายในการหยุดระบบ
      - ตรวจสอบ Set Pressure — ตรวจสอบค่าเปิดได้แม่นยำ
      - รายงานผลแบบ Real-time — ได้ผลการทดสอบพร้อมวิเคราะห์ทันที เพื่อวางแผนบำรุงรักษาต่อเนื่อง
      - ทีมวิศวกรชำนาญ — มีประสบการณ์ On-Line Test ในหลายพื้นที่ ทั้งโรงไฟฟ้า และโรงกระดาษ
      - มาตรฐานรองรับ — ทดสอบตามมาตรฐาน API, ASME เพื่อมั่นใจได้ในความปลอดภัยและความถูกต้อง`,
        moreImage: [
            "https://i.postimg.cc/BZVKb8NG/LINE-ALBUM-572025-250705-2.jpg",
            "https://i.postimg.cc/QdLqLKRS/S-46940235.jpg",
            "https://i.postimg.cc/ht73TBqZ/S-46940232.jpg"
        ]
    },
    {
        id: "4",
        title: "Ultrasonic clamp-on flowmeters",
        description: "เครื่องวัดอัตราการไหลแบบอุลตร้าโซนิคชนิดรัดท่อ",
        image: "https://i.postimg.cc/1zGC7rXp/S-46940231.jpg",
        highlights: [
            "ใช้วัดอัตราการไหลของของเหลวได้ง่ายโดยไม่ต้องตัดต่อท่อ",
            "ใช้ได้ทั้งท่อโลหะและพลาสติกที่มีขนาดตั้งแต่ 0.5 ถึง 240 นิ้ว",
            "ความแม่นยำสูง Accuracy 1%"
        ],
        badge: "Flow",
        details: `Ultrasonic Clamp-On Flowmeters Service
      - บริการตรวจวัด ติดตั้ง และสอบเทียบ(Verify) เครื่องวัดอัตราการไหลแบบอัลตร้าโซนิคชนิดรัดท่อ (Clamp-On Flowmeter)
      เหมาะสำหรับงานวัดอัตราการไหลของของเหลวในท่อ โดยไม่ต้องตัดต่อหรือหยุดการเดินระบบ

      High Light
      - Non-Invasive: ติดตั้งภายนอกท่อ ไม่ต้องเจาะหรือหยุดไลน์ ลด Downtime และความเสี่ยง
      - Portable & Permanent Setup: รองรับทั้งงานวัดแบบพกพา (ตรวจสอบจุดเดียว) และติดตั้งถาวรเพื่อ Monitor ต่อเนื่อง
      - Calibration & Verification: ตรวจสอบความแม่นยำ ช่วยยืนยันค่าการวัดของอุปกรณ์วัดอัตราการไหลในโรงงาน
      - Data Logging & Report: เก็บบันทึกค่าไหลเพื่อวิเคราะห์ พร้อมรายงานผลละเอียด
      
      ตัวอย่างการใช้งาน
      - พื้นที่ที่ต้องการตรวจสอบ Balance ของ Utility (Water, Chiller, Condensate, Pump)
      - งานตรวจสอบ Flow ของ Electromagnetic Flow Meter หรือระบบ Fire Pump`,
        moreImage: [
            "https://i.postimg.cc/dQfjpQ74/Screenshot-2025-07-05-143552.png",
            "https://maximo.advanceagro.net/DOCLINKS/2025/PHOTOSTAMPS/650576_Inprg_251090476_03.jpg",
            "https://i.postimg.cc/KvgD2XBF/Screenshot-2025-07-05-143538.png"
        ]
    },
    {
        id: "5",
        title: "Digital Scale Service",
        description: "งานสอบเทียบเครื่องชั่งอิเล็กทรอนิกส์'",
        image: "https://i.postimg.cc/k53YypJJ/S-46940233.jpg",
        highlights: [
            "รองรับน้ำหนักพิกัดสูงสุดถึง 1000 กิโลกรัม",
            "สอบเทียบด้วยเครื่องมือมาตรฐาน สามารถสอบกลับได้",
            "ตรวจสอบแก้ไขเครื่องชั่ง โดยทีมงานมืออาชีพ"
        ],
        link: "",
        badge: "Scale",
        details: `Digital Scale Service
      - บริการตรวจสอบ บำรุงรักษา และสอบเทียบ (Calibration) เครื่องชั่งดิจิทัล
      ตั้งแต่เครื่องชั่งพื้น, เครื่องชั่งระบบ Conveyor จนถึงเครื่องชั่งถัง (Tank Weighing) ครอบคลุมทุกความต้องการในโรงงานและคลังสินค้า

      High Light
      - Inspection & Maintenance: ตรวจสอบระบบโหลดเซลล์ (Load Cell), อินดิเคเตอร์ และสายสัญญาณ พร้อมทำความสะอาด
      - Calibration ตามมาตรฐาน: ใช้ตุ้มน้ำหนักมาตรฐาน(Certified Weight) ในการสอบเทียบ พร้อมออกรายงานผลได้ทันที
      - Troubleshooting: แก้ไขปัญหาการอ่านค่าเพี้ยน, Error Code และความผิดปกติอื่น ๆ`,
        moreImage: [
            "https://i.postimg.cc/DZX1KL46/LINE-ALBUM-15668-250705-1.jpg",
            "https://i.postimg.cc/x11H1Wbc/LINE-ALBUM-DWP-250705-1.jpg",
            "https://i.postimg.cc/BQGB4YgK/Screenshot-2025-07-05-144422.png"
        ]
    },
    {
        id: "6",
        title: "LoRaWAN IoT Solution",
        description: "ระบบส่งสัญญาณเครื่องมือวัดระยะไกล",
        image: "https://i.postimg.cc/k4gGgj2T/slide-2.jpg",
        highlights: [
            "ประหยัดพลังงาน ใช้แบตเตอรี่ได้นาน",
            "ครอบคลุมพื้นที่กว้าง",
            "รองรับอุปกรณ์จำนวนมาก"
        ],
        badge: "IoT Solution",
        details: `LoRaWAN IoT Solution
      - ระบบเชื่อมต่ออุปกรณ์ IoT ผ่านเครือข่าย LoRaWAN (Long Range Wide Area Network)
      เหมาะสำหรับการรับส่งข้อมูลจากอุปกรณ์ตรวจวัดต่าง ๆ ในระยะไกล ใช้พลังงานต่ำ ครอบคลุมพื้นที่กว้าง ประหยัดค่าใช้จ่ายด้านโครงสร้างพื้นฐานเมื่อเทียบกับระบบสัญญาณอื่น

      High Light
      - Long Range & Low Power: สื่อสารได้ไกลหลายกิโลเมตร ใช้พลังงานต่ำ ทำให้เหมาะกับอุปกรณ์ที่ใช้แบตเตอรี่นานเป็นปี
      - Multi-Device & Massive Scale: รองรับการเชื่อมต่อเซ็นเซอร์และอุปกรณ์ IoT จำนวนมากในเครือข่ายเดียว
      - Real-time Monitoring: รับข้อมูลการตรวจวัด เช่น อุณหภูมิ ความชื้น ระดับน้ำ หรือพลังงานไฟฟ้า ได้แบบเรียลไทม์
      - Data Analytics & Dashboard: เชื่อมต่อ Platform เพื่อวิเคราะห์และแสดงผลบน Dashboard ช่วยให้ตัดสินใจได้อย่างชาญฉลาด
      - Alert & Notification: ตั้งค่าการแจ้งเตือนเมื่อมีค่าผิดปกติ เช่น น้ำรั่ว อุณหภูมิสูง หรือเครื่องจักรหยุดทำงาน
      - Remote Control: ควบคุมอุปกรณ์ได้จากทุกที่ เหมาะสำหรับระบบที่ต้องการสั่งการระยะไกล

      เหมาะกับงานประเภท
      - Smart Water / Gas / Energy Metering
      - Smart Farming (ตรวจวัดดิน ปุ๋ย ความชื้น)
      - พื้นที่ที่ต้องการ Monitoring อุปกรณ์แบบไร้สาย
      - โครงการ Smart City & Utilities

      หมายเหตุ:
      เรามีบริการครบวงจร ตั้งแต่การสำรวจหน้างาน, ออกแบบระบบ LoRaWAN, จัดหา Gateway & Sensor, ติดตั้ง, Integrate API เข้าสู่ระบบ ERP หรือ SCADA จนถึงการดูแลหลังการขาย`,
        moreImage: [
            "https://i.postimg.cc/KvvfyFcT/Picture4.png",
            "https://i.postimg.cc/5tq65gzZ/Screenshot-2025-07-05-151305.png",
            "https://i.postimg.cc/rw5PJRwB/cdfa21f7-c459-4b08-9c97-b331469434be.png"
        ]
    }
];
function ReviewsPage() {
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const detailsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedService = services.find((service)=>service.id === openId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsPage.useEffect": ()=>{
            if (selectedService && detailsRef.current) {
                detailsRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    }["ReviewsPage.useEffect"], [
        selectedService
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-16 min-h-screen bg-gray-50 dark:bg-gray-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                            children: "งานบริการแนะนำ"
                        }, void 0, false, {
                            fileName: "[project]/src/app/reviews/page.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/reviews/page.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: services.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setOpenId(openId === item.id ? null : item.id),
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AffiliateCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    highlights: item.highlights,
                                    badge: item.badge,
                                    index: index
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reviews/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/reviews/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    selectedService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: detailsRef,
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md col-span-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-700 dark:text-gray-300 whitespace-pre-line mb-4",
                                children: selectedService.details.split("\n").map((line, idx)=>{
                                    // ถ้าเจอหัวข้อพิเศษ ให้ bold & สีฟ้า
                                    if (line.includes("High Light") || line.includes("หมายเหตุ") || line.includes("ตัวอย่างการใช้งาน")) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-blue-600 font-bold mt-4 mb-2",
                                            children: line
                                        }, idx, false, {
                                            fileName: "[project]/src/app/reviews/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 23
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: line
                                    }, idx, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this),
                            Array.isArray(selectedService.moreImage) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-4",
                                children: selectedService.moreImage.map((imgSrc, imgIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        //src={imgSrc}
                                        alt: `${selectedService.title} Image ${imgIndex + 1}`,
                                        className: "w-80 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] object-cover rounded-lg shadow-lg"
                                    }, imgIndex, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 278,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reviews/page.tsx",
                        lineNumber: 248,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/reviews/page.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/reviews/page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(ReviewsPage, "w8o7L692jAybBnNgWCCvPXZUsjw=");
_c = ReviewsPage;
var _c;
__turbopack_context__.k.register(_c, "ReviewsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_466e2ac9._.js.map