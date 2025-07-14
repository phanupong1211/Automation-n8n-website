(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/convalve/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                            children: "Control Valve: พื้นฐานและการซ่อมบำรุงสำหรับช่างใหม่"
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-lg",
                            children: [
                                "ในโลกอุตสาหกรรมยุคใหม่",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600 font-bold mx-1",
                                    children: "Control Valve "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 11
                                }, this),
                                "หรือที่เรียกว่า",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600 font-bold mx-1",
                                    children: "วาล์วควบคุม"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 11
                                }, this),
                                "คือหัวใจสำคัญที่ช่วยให้กระบวนการผลิตเป็นไปอย่างแม่นยำและมีประสิทธิภาพ การทำความเข้าใจพื้นฐานและการซ่อมบำรุงที่ถูกต้องจะช่วยให้คุณทำงานได้อย่างมั่นใจและปลอดภัย"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://pre-vent.com/files/pre-vent/images/pre-vent/products/valve-br11-360.gif",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/convalve/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 41,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "🎯 Control Valve คืออะไร?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 dark:text-gray-300 mb-6",
                            children: [
                                "Control Valve คืออุปกรณ์ที่ใช้ในการ",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-500 font-bold",
                                    children: "ควบคุมอัตราการไหล"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 11
                                }, this),
                                " ",
                                "ของของไหล (ของเหลว, ก๊าซ, ไอน้ำ) ในระบบท่อ โดยการปรับขนาดของช่องเปิดตามสัญญาณที่ได้รับจากคอนโทรลเลอร์ (Controller) เพื่อรักษาสภาวะของกระบวนการให้อยู่ในค่าที่ต้องการ เช่น อุณหภูมิ, แรงดัน, ระดับ หรืออัตราการไหล"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 50,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "✨ ทำไม ทำไม Control Valve จึงสำคัญ?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 56,
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
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ควบคุมกระบวนการ: ช่วยให้กระบวนการผลิตมีความเสถียรและแม่นยำ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ เพิ่มประสิทธิภาพ: ลดการสูญเสียพลังงานและวัตถุดิบ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ความปลอดภัย: ป้องกันสภาวะผิดปกติที่อาจเป็นอันตราย"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ คุณภาพผลิตภัณฑ์: รักษาคุณภาพของผลิตภัณฑ์ให้สม่ำเสมอ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ลดต้นทุน: ลดการทำงานด้วยมือและเพิ่มความเป็นอัตโนมัติ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 57,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "🛠️ ส่วนประกอบหลักของ Control Valve"
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 65,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ig-500 font-bold",
                                            children: "ตัววาล์ว (Valve Body):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 13
                                        }, this),
                                        " เป็นส่วนที่สัมผัสกับของไหลโดยตรง มีหน้าที่ควบคุมการไหล ประกอบด้วย:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ig-500 font-bold",
                                                    children: "Body:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 15
                                                }, this),
                                                " บ่าวาล์ว (Seat)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ig-500 font-bold",
                                                    children: "Seat:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 15
                                                }, this),
                                                " ปลั๊กวาล์ว (Plug)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ig-500 font-bold",
                                                    children: "Disc:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 15
                                                }, this),
                                                " ก้านวาล์ว (Stem)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ig-500 font-bold",
                                                    children: "Stem:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 15
                                                }, this),
                                                " บอนเน็ต (Bonnet)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ig-500 font-bold",
                                            children: "แอคทูเอเตอร์ (Actuator):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 13
                                        }, this),
                                        " เป็นส่วนที่ทำหน้าที่เคลื่อนที่ปลั๊กวาล์วตามสัญญาณควบคุมที่ได้รับ อาจเป็นแบบลม (Pneumatic), ไฟฟ้า (Electric) หรือไฮดรอลิก (Hydraulic)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ig-500 font-bold",
                                            children: "โพซิชันเนอร์ (Positioner):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 13
                                        }, this),
                                        " (อุปกรณ์เสริม) ทำหน้าที่รับสัญญาณควบคุมและส่งแรงดันลมไปควบคุมแอคทูเอเตอร์ เพื่อให้ปลั๊กวาล์วเคลื่อนที่ไปยังตำแหน่งที่ถูกต้องแม่นยำ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 66,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>showInfo("pic1"),
                                className: `${activeInfo === "pic1" ? "bg-green-700" : "bg-green-600"} hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow transition transform hover:-translate-y-1`,
                                children: activeInfo === "pic1" ? "ซ่อนภาพประกอบ" : "ดูภาพประกอบ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/convalve/page.tsx",
                                lineNumber: 79,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 78,
                            columnNumber: 9
                        }, this),
                        activeInfo === "pic1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://jwtech.co.th/activity/wp-content/uploads/2022/01/Control-valve-1.png",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/convalve/page.tsx",
                                lineNumber: 91,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 90,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "⚙️ หลักการทำงานเบื้องต้น"
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 100,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "คอนโทรลเลอร์ (เช่น PLC หรือ DCS) จะส่งสัญญาณควบคุม (เช่น 4-20 mA หรือ 3-15 psi) ไปยัง Control Valve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "โพซิชันเนอร์ (ถ้ามี) จะรับสัญญาณนี้และแปลงเป็นแรงดันลมที่เหมาะสมเพื่อส่งไปยังแอคทูเอเตอร์"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "แอคทูเอเตอร์จะใช้แรงดันลม (หรือพลังงานไฟฟ้า/ไฮดรอลิก) เพื่อเคลื่อนที่ก้านวาล์ว"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "การเคลื่อนที่ของก้านวาล์วจะทำให้ปลั๊กวาล์วปรับตำแหน่ง ซึ่งจะ เปลี่ยนแปลงขนาดของช่องเปิด และควบคุมอัตราการไหลของของไหลในระบบ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "เมื่อสภาวะของกระบวนการเปลี่ยนแปลง คอนโทรลเลอร์จะปรับสัญญาณควบคุมเพื่อปรับตำแหน่งของวาล์วให้เหมาะสมต่อไป"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 101,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://upmation.com/wp-content/uploads/2020/09/How-Control-Valve-Positioner-Works.jpg",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/convalve/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 109,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("types"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "ประเภทของ Control Valve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("maintenance"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "การบำรุงรักษาเบื้องต้น"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("test"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "การแก้ไขปัญหาเบื้องต้น?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 117,
                            columnNumber: 9
                        }, this),
                        activeInfo === "types" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "Control Valve มีหลายประเภท ขึ้นอยู่กับการออกแบบตัววาล์วและลักษณะการไหล:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Globe Valve:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                "  เป็นที่นิยมที่สุดสำหรับการควบคุมการไหลที่แม่นยำ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Ball Valve:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this),
                                                " เหมาะสำหรับการเปิด-ปิดอย่างรวดเร็ว และการควบคุมการไหลแบบหยาบๆ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Butterfly Valve:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                " ใช้สำหรับควบคุมการไหลของของไหลปริมาณมาก"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Diaphragm Valve:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/convalve/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                " เหมาะสำหรับของไหลที่มีฤทธิ์กัดกร่อนหรือมีอนุภาคแขวนลอย"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        activeInfo === "maintenance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "การซ่อมบำรุง Control Valve อย่างสม่ำเสมอช่วยยืดอายุการใช้งานและรักษาประสิทธิภาพ:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ตรวจสอบการรั่วไหล: ตรวจสอบตามจุดเชื่อมต่อและก้านวาล์ว"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "หล่อลื่น: หล่อลื่นก้านวาล์วและชิ้นส่วนที่เคลื่อนไหวตามคำแนะนำของผู้ผลิต"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ตรวจสอบโพซิชันเนอร์: ตรวจสอบการทำงานและการสอบเทียบ (Calibration)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ทำความสะอาด: ทำความสะอาดชิ้นส่วนภายในเมื่อมีการถอดประกอบ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "เปลี่ยนซีลและปะเก็น: เปลี่ยนตามระยะเวลาที่กำหนดหรือเมื่อพบการสึกหรอ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ทดสอบการทำงาน: ตรวจสอบการตอบสนองต่อสัญญาณควบคุม"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        activeInfo === "test" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "ปัญหาที่พบบ่อยและแนวทางแก้ไขเบื้องต้น?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "วาล์วไม่เคลื่อนที่: ตรวจสอบสัญญาณควบคุม, แรงดันลม (สำหรับ Pneumatic Actuator), การอุดตันของท่อลม, หรือกลไกภายในติดขัด"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "วาล์วเคลื่อนที่ช้า/ไม่แม่นยำ: ตรวจสอบการสอบเทียบโพซิชันเนอร์, การรั่วไหลของลม, หรือการเสียดสีภายใน"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "วาล์วรั่วไหล: ตรวจสอบซีล, ปะเก็น, หรือความเสียหายของบ่าวาล์ว/ปลั๊กวาล์ว"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "เสียงดังผิดปกติ: อาจเกิดจากการไหลแบบ Cavitation หรือ Flashing, การสั่นสะเทือนของชิ้นส่วนภายใน"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/convalve/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 165,
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
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 177,
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
                                    fileName: "[project]/src/app/convalve/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 176,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                            id: "explanationAudio",
                            src: "/audio/valve.wav",
                            preload: "auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-5 left-20 flex space-x-2 bg-gray-800 p-1 rounded-xl shadow-lg z-50 transition-opacity duration-300 hover:opacity-100 opacity-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                className: "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg  transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",
                                children: "⬅️ Back"
                            }, void 0, false, {
                                fileName: "[project]/src/app/convalve/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/convalve/page.tsx",
                            lineNumber: 200,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/convalve/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center mt-10 text-sm text-gray-500",
                    children: "© 2025 ข้อมูลพื้นฐานสำหรับช่างเทคนิค"
                }, void 0, false, {
                    fileName: "[project]/src/app/convalve/page.tsx",
                    lineNumber: 212,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/convalve/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/convalve/page.tsx",
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

//# sourceMappingURL=_3b43c8bd._.js.map