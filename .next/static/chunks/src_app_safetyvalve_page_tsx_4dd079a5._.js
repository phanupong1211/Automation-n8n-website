(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/safetyvalve/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                            children: "Safety Valve พื้นฐานสำหรับช่างใหม่"
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-lg",
                            children: [
                                "สวัสดีครับช่างใหม่ทุกท่าน! ในการทำงานกับระบบที่มีแรงดัน ไม่ว่าจะเป็นหม้อไอน้ำ, ถังแรงดัน หรือท่อส่งก๊าซ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600 font-bold mx-1",
                                    children: "Safety Valve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 11
                                }, this),
                                "หรือที่เรียกว่า",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600 font-bold mx-1",
                                    children: "วาล์วนิรภัย"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 11
                                }, this),
                                "นั้นคืออุปกรณ์สำคัญยิ่งที่เราต้องทำความเข้าใจ เพื่อความปลอดภัยของตัวเราเองและระบบที่เราดูแล"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://vanbidien.com/wp-content/uploads/2020/03/querulousvaluableamericanbittern-size_restricted.gif",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/safetyvalve/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 41,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "🎯 Safety Valve คืออะไร?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 dark:text-gray-300 mb-6",
                            children: [
                                "Safety Valve คือวาล์วที่ออกแบบมาเพื่อ",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-500 font-bold",
                                    children: "ระบายแรงดันส่วนเกินโดยอัตโนมัติ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 11
                                }, this),
                                " ",
                                "ออกจากระบบเมื่อแรงดันภายในสูงเกินกว่าค่าที่กำหนดไว้ เพื่อป้องกันความเสียหาย ที่อาจเกิดขึ้นกับอุปกรณ์หรือแม้กระทั่งอุบัติเหตุร้ายแรง เช่น การระเบิด"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 50,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "✨ ทำไม Safety Valve จึงสำคัญ?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 57,
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
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ป้องกันแรงดันเกิน (Overpressure Protection)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ป้องกันความเสียหายของอุปกรณ์"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ ลดความเสี่ยงต่อชีวิตบุคลากร"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        "  ✅ เป็นไปตามมาตรฐานอุตสาหกรรม"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 58,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "🛠️ ส่วนประกอบหลักของ Safety Valve"
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 65,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold",
                                            children: "Body:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        " ตัวเรือนหลัก"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold",
                                            children: "Seat:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        " บ่าวาล์ว"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold",
                                            children: "Disc:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        " แผ่นที่เปิด-ปิด"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold",
                                            children: "Spring:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        " ตั้งค่าแรงดัน"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold",
                                            children: "Stem:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        " ก้านวาล์ว"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold",
                                            children: "Lever:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        " บางรุ่นมีทดสอบด้วยมือ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
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
                                fileName: "[project]/src/app/safetyvalve/page.tsx",
                                lineNumber: 76,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 75,
                            columnNumber: 9
                        }, this),
                        activeInfo === "pic1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/svas.png",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/safetyvalve/page.tsx",
                                lineNumber: 88,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 87,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-blue-500 mb-4",
                            children: "⚙️ หลักการทำงานเบื้องต้น"
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 97,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "แรงดันปกติ สปริงกด Disc ปิด"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "แรงดันสูงขึ้นเกิน Set Pressure"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Disc ยก ปล่อยของไหลออก"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "แรงดันลด สปริงกด Disc กลับปิดอีกครั้ง"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 98,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdxYW5yYXdlYWg3cjNvOTByOG4zYnZ1a2d6djZzOXc2cWZ5YnN3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dC3A6er0VKeWVNTyaT/giphy.gif",
                                alt: "Safety Valve",
                                className: "rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/safetyvalve/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 104,
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
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("maintenance"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "การบำรุงรักษาเบื้องต้น"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>showInfo("test"),
                                    className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1",
                                    children: "การทดสอบสำคัญอย่างไร?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 112,
                            columnNumber: 9
                        }, this),
                        activeInfo === "types" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "ประเภทของ Safety Valve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 135,
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
                                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                " สำหรับของเหลว มักเปิดเมื่อแรงดันเกิน"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Safety Valve (แบบเต็ม):"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this),
                                                " สำหรับก๊าซ เปิดเร็วเต็มที่"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-700",
                                                    children: "Safety Relief Valve:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                " ใช้ได้ทั้งของเหลวและก๊าซ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        activeInfo === "maintenance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "การบำรุงรักษาเบื้องต้น"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ตรวจสอบการกัดกร่อน ความเสียหาย การรั่ว"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ทำความสะอาดรอบวาล์วและทางออก"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ทดสอบการทำงานตามกำหนด"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "ห้ามดัดแปลงโดยไม่ได้รับอนุญาต"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        activeInfo === "test" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "การทดสอบสำคัญอย่างไร?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "เพื่อให้วาล์วทำงานเมื่อแรงดันถึง Set Pressure"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "เพื่อให้วาล์วสามารถระบายได้พอ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "และเพื่อให้ปิดสนิทได้หลังแรงดันลดลง"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 157,
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
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 168,
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
                                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 167,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                            id: "explanationAudio",
                            src: "/audio/safety.wav",
                            preload: "auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-5 left-20 flex space-x-2 bg-gray-800 p-1 rounded-xl shadow-lg z-50 transition-opacity duration-300 hover:opacity-100 opacity-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                className: "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg  transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",
                                children: "⬅️ Back"
                            }, void 0, false, {
                                fileName: "[project]/src/app/safetyvalve/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/safetyvalve/page.tsx",
                            lineNumber: 191,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center mt-10 text-sm text-gray-500",
                    children: "© 2025 ข้อมูลพื้นฐานสำหรับช่างเทคนิค"
                }, void 0, false, {
                    fileName: "[project]/src/app/safetyvalve/page.tsx",
                    lineNumber: 203,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/safetyvalve/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/safetyvalve/page.tsx",
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
}]);

//# sourceMappingURL=src_app_safetyvalve_page_tsx_4dd079a5._.js.map