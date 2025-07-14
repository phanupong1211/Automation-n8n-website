(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/flow/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SafetyValvePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SafetyValvePage() {
    _s();
    const [activeInfo, setActiveInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const showInfo = (type)=>{
        setActiveInfo(type === activeInfo ? null : type);
    };
    const playAudio = ()=>{
        const audio = document.getElementById("explanationAudio");
        if (audio) audio.play();
    };
    const pauseAudio = ()=>{
        const audio = document.getElementById("explanationAudio");
        if (audio) audio.pause();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-16 min-h-screen bg-gray-50 dark:bg-gray-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12",
                            children: "🌊 เครื่องมือวัดอัตราการไหลอัลตราโซนิค (SIEMENS Clamp-on)🛠️"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-lg",
                            children: [
                                "ในงานอุตสาหกรรม การวัดอัตราการไหลของของไหลในท่อเป็นสิ่งสำคัญยิ่ง",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600 font-bold mx-1",
                                    children: "เครื่องมือวัดอัตราการไหลชนิดอัลตราโซนิคแบบรัดท่อ (Ultrasonic Clamp-on Flow Meter)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 11
                                }, this),
                                "โดยเฉพาะอย่างยิ่งของแบรนด์",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600 font-bold mx-1",
                                    children: "SIEMENS "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 11
                                }, this),
                                "เป็นเทคโนโลยีที่น่าสนใจและมีประโยชน์มาก เพราะสามารถวัดได้โดยไม่ต้องตัดท่อ ทำให้ประหยัดเวลาและค่าใช้จ่ายในการติดตั้งและบำรุงรักษา"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "วัตถุประสงค์ของเอกสารนี้คือเพื่อเป็นแนวทางมาตรฐาน (Standard Operating Procedure - SOP) ในการติดตั้ง ตรวจสอบ และเริ่มใช้งาน Siemens SITRANS FUP 1010 Portable Ultrasonic Flowmeter แบบ Clamp-On เพื่อให้สามารถวัดอัตราการไหลได้อย่างถูกต้องและเชื่อถือได้ ขอบเขตการใช้งานสำหรับงานวัดของเหลว เช่น น้ำมัน, น้ำ, น้ำยาเคมี, ของเหลวไฮดรอลิก ในท่อโลหะหรือพลาสติก โดยใช้ Clamp-On ultrasonic sensor ที่ติดตั้งภายนอกท่อ"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://cz.all.biz/img/cz/catalog/60969.jpg",
                                alt: "flow siemens",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/flow/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 45,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "🎯 เครื่องมือวัดอัตราการไหลอัลตราโซนิคแบบรัดท่อคืออะไร?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 53,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 dark:text-gray-300 mb-6",
                            children: [
                                "เครื่องมือวัดชนิดนี้ทำงานโดยใช้หลักการของ",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-500 font-bold",
                                    children: "คลื่นเสียงอัลตราโซนิค"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 11
                                }, this),
                                " ",
                                "ส่งผ่านของไหลในท่อ โดยไม่ต้องสัมผัสกับของไหลโดยตรง หัววัด (Transducers) จะถูกรัดติดอยู่ภายนอกท่อ ทำให้การติดตั้งง่าย สะดวก และไม่รบกวนกระบวนการทำงาน"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 54,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "✨ ทำไมเครื่องมือวัดชนิดนี้จึงสำคัญ?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 60,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ไม่รบกวนกระบวนการ: ติดตั้งง่าย ไม่ต้องตัดท่อ ไม่ต้องหยุดไลน์ผลิต"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ความปลอดภัย: ไม่มีของไหลรั่วไหลออกมา ลดความเสี่ยงในการทำงานกับของไหลอันตราย"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ความหลากหลาย: ใช้ได้กับท่อหลายขนาดและวัสดุที่แตกต่างกัน"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ บำรุงรักษาง่าย: ไม่มีชิ้นส่วนที่เคลื่อนไหวภายในท่อ ลดการสึกหรอและค่าใช้จ่ายในการบำรุงรักษา"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ความแม่นยำ: ให้ค่าการวัดที่แม่นยำสำหรับการควบคุมกระบวนการ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 61,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "🛠️ ส่วนประกอบหลักของ Safety Valve"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 69,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-lg font-bold",
                                            children: "Siemens portable (เครื่องอ่านและประมวลผล):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        " ใช้ประมวลผล ultrasonic transit-time"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-lg font-bold",
                                            children: "Clamp-On sensors A & B:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        " ทำหน้าที่ส่งและรับคลื่นเสียง ultrasonic ผ่านท่อและของเหลว"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-lg font-bold",
                                            children: "EZ Clamp หรือ Spacer bar:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        " ใช้ยึดเซ็นเซอร์ให้ตรงตามระยะที่กำหนด (Lin)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-lg font-bold",
                                            children: "Coupling gel (Ultrasonic gel):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        " ช่วยเพิ่มการส่งผ่านคลื่นเสียงและลดช่องว่างอากาศระหว่างเซ็นเซอร์กับท่อ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-lg font-bold",
                                            children: "Cleaning kit (กระดาษทราย, แปรง, ผ้า):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        " ใช้ทำความสะอาดผิวท่อเพื่อเพิ่มการนำเสียง"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-lg font-bold",
                                            children: "ตลับเมตร/Thickness gauge:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        " ใช้วัดเส้นผ่านศูนย์กลางภายนอก (OD) ของท่อและตรวจสอบความหนาของผนังท่อ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-lg font-bold",
                                            children: "สายสัญญาณ:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        " สำหรับเชื่อมต่อเซ็นเซอร์กับเครื่อง Siemens portable"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 70,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>showInfo("pic1"),
                                className: `${activeInfo === "pic1" ? "bg-green-700" : "bg-green-600"} hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow transition transform hover:-translate-y-1`,
                                children: activeInfo === "pic1" ? "ซ่อนภาพประกอบ" : "ดูภาพประกอบ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/flow/page.tsx",
                                lineNumber: 81,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 80,
                            columnNumber: 9
                        }, this),
                        activeInfo === "pic1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/44.png",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/flow/page.tsx",
                                lineNumber: 93,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 92,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "⚙️ หลักการทำงานเบื้องต้น (Transit Time Method)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 102,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-gray-lg font-bold",
                            children: "เครื่องมือวัด SIEMENS Clamp-on ส่วนใหญ่ใช้หลักการ Transit Time Method:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 103,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "หัววัดตัวแรก (Upstream Transducer) ส่งคลื่นอัลตราโซนิคไปยังหัววัดตัวที่สอง (Downstream Transducer)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "ในขณะเดียวกัน หัววัดตัวที่สองก็ส่งคลื่นอัลตราโซนิคกลับไปยังหัววัดตัวแรก"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "ความเร็วของคลื่นเสียงจะถูกเร่งขึ้นเมื่อเดินทางตามทิศทางการไหลของของไหล และจะช้าลงเมื่อเดินทางทวนทิศทางการไหล"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "เครื่องส่งสัญญาณจะคำนวณ ความแตกต่างของเวลาที่คลื่นเสียงใช้ในการเดินทาง ไปและกลับ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "ความแตกต่างของเวลานี้จะถูกแปลงเป็นค่าอัตราการไหลของของไหลในท่อ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 104,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "🔧 การติดตั้งเบื้องต้นสำหรับช่างใหม่"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 112,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-gray-lg font-bold",
                            children: "การติดตั้งที่ถูกต้องเป็นสิ่งสำคัญเพื่อให้ได้ค่าการวัดที่แม่นยำ:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 113,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "การเตรียมท่อและจุดติดตั้ง:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ควรเลือกส่วนของท่อที่เป็นแนวตรง (straight run) ที่ยาวเพียงพอ อย่างน้อย 10 เท่าของเส้นผ่านศูนย์กลางท่อ (10D) ในส่วนต้นน้ำ (upstream) และ 5 เท่าของเส้นผ่านศูนย์กลางท่อ (5D) ในส่วนปลายน้ำ (downstream) เพื่อให้การไหลพัฒนาเต็มที่ (fully-developed flow)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "หลีกเลี่ยงการติดตั้งใกล้กับจุดโค้ง (bend), วาล์ว (valve), ทางออกของปั๊ม (pump discharge) หรือแนวเชื่อม (weld seam) เนื่องจากจะทำให้การไหลปั่นป่วน (turbulence)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ควรเป็นทิศทางการไหลขึ้นด้านบนสำหรับท่อแนวตั้ง เพื่อหลีกเลี่ยงช่องว่างอากาศ (voids)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "สำหรับท่อแนวนอน: หลีกเลี่ยงตำแหน่ง 12 นาฬิกา (ด้านบนสุด) หรือ 6 นาฬิกา (ด้านล่างสุด) เนื่องจากอาจมีอากาศหรือตะกอนสะสม ตำแหน่ง 9 หรือ 3 นาฬิกาเหมาะสมที่สุด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ตรวจสอบให้แน่ใจว่าท่อมีการไหลเต็ม (pipe full) ไม่มีช่องอากาศ (air pocket) หรือการไหลแบบ slug flow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "การเตรียมผิวท่อ:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ใช้ผ้าเช็ดคราบมันออกก่อน"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ขัดด้วยกระดาษทรายจนเห็นเนื้อโลหะหรือผิวท่อเรียบสนิท โดยให้พื้นที่กว้างประมาณ 5 ซม. รอบตำแหน่งติดตั้ง"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "เช็ดผิวท่อให้แห้ง เพื่อป้องกันการปนเปื้อนของ coupling gel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "การติดตั้ง Sensor:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ทา coupling gel เป็นเส้นยาวตามหน้าสัมผัสของเซ็นเซอร์ทั้งสองตัว"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ยึดเซ็นเซอร์ A ที่ตำแหน่งต้นน้ำ (upstream) ด้วย EZ clamp หรือ spacer bar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ยึดเซ็นเซอร์ B ที่ตำแหน่งปลายน้ำ (downstream) ให้ตรงตามระยะห่าง Ltn spacing ที่เครื่อง Flowmeter แนะนำ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "รัด clamp ให้แน่นพอสมควร แต่อย่าบีบจน coupling gel หลุดออกหมด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "สังเกตให้เซ็นเซอร์แนบสนิทกับผิวท่อ ไม่เอียง หรือบิดเบี้ยว"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "การต่อสาย:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ต่อสายเซ็นเซอร์เข้ากับช่อง UP และ DN บนเครื่องอย่างถูกต้อง ตามป้ายกำกับของเซ็นเซอร์"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ตรวจสอบว่า connector ไม่หลวม ไม่มีการบิดหรือสายเคเบิลตึงเกินไป"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "การตั้งค่า Flowmeter (Commissioning):"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ควรเลือกส่วนของท่อที่เป็นแนวตรง (straight run) ที่ยาวเพียงพอ อย่างน้อย 10 เท่าของเส้นผ่านศูนย์กลางท่อ (10D) ในส่วนต้นน้ำ (upstream) และ 5 เท่าของเส้นผ่านศูนย์กลางท่อ (5D) ในส่วนปลายน้ำ (downstream) เพื่อให้การไหลพัฒนาเต็มที่ (fully-developed flow)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "หลีกเลี่ยงการติดตั้งใกล้กับจุดโค้ง (bend), วาล์ว (valve), ทางออกของปั๊ม (pump discharge) หรือแนวเชื่อม (weld seam) เนื่องจากจะทำให้การไหลปั่นป่วน (turbulence)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ควรเป็นทิศทางการไหลขึ้นด้านบนสำหรับท่อแนวตั้ง เพื่อหลีกเลี่ยงช่องว่างอากาศ (voids)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "สำหรับท่อแนวนอน: หลีกเลี่ยงตำแหน่ง 12 นาฬิกา (ด้านบนสุด) หรือ 6 นาฬิกา (ด้านล่างสุด) เนื่องจากอาจมีอากาศหรือตะกอนสะสม ตำแหน่ง 9 หรือ 3 นาฬิกาเหมาะสมที่สุด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ตรวจสอบให้แน่ใจว่าท่อมีการไหลเต็ม (pipe full) ไม่มีช่องอากาศ (air pocket) หรือการไหลแบบ slug flow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "ตรวจสอบ Waveform:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ควรเลือกส่วนของท่อที่เป็นแนวตรง (straight run) ที่ยาวเพียงพอ อย่างน้อย 10 เท่าของเส้นผ่านศูนย์กลางท่อ (10D) ในส่วนต้นน้ำ (upstream) และ 5 เท่าของเส้นผ่านศูนย์กลางท่อ (5D) ในส่วนปลายน้ำ (downstream) เพื่อให้การไหลพัฒนาเต็มที่ (fully-developed flow)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "หลีกเลี่ยงการติดตั้งใกล้กับจุดโค้ง (bend), วาล์ว (valve), ทางออกของปั๊ม (pump discharge) หรือแนวเชื่อม (weld seam) เนื่องจากจะทำให้การไหลปั่นป่วน (turbulence)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ควรเป็นทิศทางการไหลขึ้นด้านบนสำหรับท่อแนวตั้ง เพื่อหลีกเลี่ยงช่องว่างอากาศ (voids)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "สำหรับท่อแนวนอน: หลีกเลี่ยงตำแหน่ง 12 นาฬิกา (ด้านบนสุด) หรือ 6 นาฬิกา (ด้านล่างสุด) เนื่องจากอาจมีอากาศหรือตะกอนสะสม ตำแหน่ง 9 หรือ 3 นาฬิกาเหมาะสมที่สุด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300 dark",
                                                children: "ตรวจสอบให้แน่ใจว่าท่อมีการไหลเต็ม (pipe full) ไม่มีช่องอากาศ (air pocket) หรือการไหลแบบ slug flow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flow/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "การตั้งค่า Zero:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 114,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 dark",
                                        children: "ควรเลือกส่วนของท่อที่เป็นแนวตรง (straight run) ที่ยาวเพียงพอ อย่างน้อย 10 เท่าของเส้นผ่านศูนย์กลางท่อ (10D) ในส่วนต้นน้ำ (upstream) และ 5 เท่าของเส้นผ่านศูนย์กลางท่อ (5D) ในส่วนปลายน้ำ (downstream) เพื่อให้การไหลพัฒนาเต็มที่ (fully-developed flow)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/flow/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 dark",
                                        children: "หลีกเลี่ยงการติดตั้งใกล้กับจุดโค้ง (bend), วาล์ว (valve), ทางออกของปั๊ม (pump discharge) หรือแนวเชื่อม (weld seam) เนื่องจากจะทำให้การไหลปั่นป่วน (turbulence)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/flow/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 dark",
                                        children: "ควรเป็นทิศทางการไหลขึ้นด้านบนสำหรับท่อแนวตั้ง เพื่อหลีกเลี่ยงช่องว่างอากาศ (voids)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/flow/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 dark",
                                        children: "สำหรับท่อแนวนอน: หลีกเลี่ยงตำแหน่ง 12 นาฬิกา (ด้านบนสุด) หรือ 6 นาฬิกา (ด้านล่างสุด) เนื่องจากอาจมีอากาศหรือตะกอนสะสม ตำแหน่ง 9 หรือ 3 นาฬิกาเหมาะสมที่สุด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/flow/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 dark",
                                        children: "ตรวจสอบให้แน่ใจว่าท่อมีการไหลเต็ม (pipe full) ไม่มีช่องอากาศ (air pocket) หรือการไหลแบบ slug flow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/flow/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 164,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdxYW5yYXdlYWg3cjNvOTByOG4zYnZ1a2d6djZzOXc2cWZ5YnN3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dC3A6er0VKeWVNTyaT/giphy.gif",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/flow/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 173,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("types"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "ประเภทของ Safety Valve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("maintenance"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "การบำรุงรักษาเบื้องต้น"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("test"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "การทดสอบสำคัญอย่างไร?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 181,
                            columnNumber: 9
                        }, this),
                        activeInfo === "types" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "ประเภทของ Safety Valve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Relief Valve:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/flow/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                " สำหรับของเหลว มักเปิดเมื่อแรงดันเกิน"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Safety Valve (แบบเต็ม):"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/flow/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this),
                                                " สำหรับก๊าซ เปิดเร็วเต็มที่"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Safety Relief Valve:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/flow/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, this),
                                                " ใช้ได้ทั้งของเหลวและก๊าซ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        activeInfo === "maintenance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "การบำรุงรักษาเบื้องต้น"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ตรวจสอบการกัดกร่อน ความเสียหาย การรั่ว"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ทำความสะอาดรอบวาล์วและทางออก"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ทดสอบการทำงานตามกำหนด"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ห้ามดัดแปลงโดยไม่ได้รับอนุญาต"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        activeInfo === "test" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "การทดสอบสำคัญอย่างไร?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "เพื่อให้วาล์วทำงานเมื่อแรงดันถึง Set Pressure"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "เพื่อให้วาล์วสามารถระบายได้พอ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "และเพื่อให้ปิดสนิทได้หลังแรงดันลดลง"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/flow/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-20 left-20 flex space-x-2 bg-gray-800 p-1 rounded-xl shadow-lg z-50 transition-opacity duration-300 hover:opacity-100 opacity-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const audio = document.getElementById("explanationAudio");
                                        audio?.play();
                                    },
                                    className: "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                                    children: "▶️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const audio = document.getElementById("explanationAudio");
                                        audio?.pause();
                                    },
                                    className: "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                                    children: "⏸️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/flow/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 236,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                            id: "explanationAudio",
                            src: "/audio/safety.wav",
                            preload: "auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-5 left-20 flex space-x-2 bg-gray-800 p-1 rounded-xl shadow-lg z-50 transition-opacity duration-300 hover:opacity-100 opacity-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                className: "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg  transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",
                                children: "⬅️ Back"
                            }, void 0, false, {
                                fileName: "[project]/src/app/flow/page.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/flow/page.tsx",
                            lineNumber: 260,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/flow/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center mt-10 text-sm text-gray-500",
                    children: "© 2025 ข้อมูลพื้นฐานสำหรับช่างเทคนิค"
                }, void 0, false, {
                    fileName: "[project]/src/app/flow/page.tsx",
                    lineNumber: 272,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/flow/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/flow/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(SafetyValvePage, "ZixIACwYx52gqII8U6SBqNsqo8o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SafetyValvePage;
var _c;
__turbopack_context__.k.register(_c, "SafetyValvePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_062d60ad._.js.map