(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/dashboard/PieChartCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
"use client";
;
;
const COLORS = [
    "#3B82F6",
    "#10B981",
    "#8B5CF6",
    "#0EA5E9"
]; // Valve, Safety, DO
const PieChartCard = ({ valveCount, safetyValveCount, doCount, phCount })=>{
    const chartData = [
        {
            name: "Valve",
            value: valveCount
        },
        {
            name: "Safety Valve",
            value: safetyValveCount
        },
        {
            name: "DO Sensor",
            value: doCount
        },
        {
            name: "pH Sensor",
            value: phCount
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-gray-900 mb-4",
                children: "สรุปประเภทอุปกรณ์"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/PieChartCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 200,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                            data: chartData,
                            dataKey: "value",
                            nameKey: "name",
                            cx: "50%",
                            cy: "50%",
                            outerRadius: 60,
                            fill: "#8884d8",
                            style: {
                                fontSize: '15px'
                            },
                            labelLine: false,
                            label: ({ name, percent })=>percent !== undefined ? `${name} ${(percent * 100).toFixed(0)}%` : name,
                            children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: COLORS[index % COLORS.length]
                                }, `cell-${index}`, false, {
                                    fileName: "[project]/src/components/dashboard/PieChartCard.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/PieChartCard.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                            fileName: "[project]/src/components/dashboard/PieChartCard.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/PieChartCard.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/PieChartCard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/PieChartCard.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = PieChartCard;
const __TURBOPACK__default__export__ = PieChartCard;
var _c;
__turbopack_context__.k.register(_c, "PieChartCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/dashboard/AssetStats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AssetStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$PieChartCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/PieChartCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function AssetStats({ total = 0, valve = 0, safety = 0, DO = 0, pH = 0 }) {
    const data = [
        {
            name: "Valve",
            value: valve
        },
        {
            name: "Safety Valve",
            value: safety
        },
        {
            name: "DO sensor",
            value: DO
        },
        {
            name: "pH sensor",
            value: pH
        }
    ];
    const COLORS = [
        "#3B82F6",
        "#10B981",
        "#8B5CF6",
        "#0EA5E9"
    ]; // ให้ตรงกับ Pie
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-slate-200 bg-white p-6 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTools"], {}, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs uppercase tracking-wide text-slate-500",
                                children: "อุปกรณ์ทั้งหมด"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-slate-900 leading-tight",
                                children: total.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500",
                                children: "Valve • Safety • DO • pH"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-slate-200 bg-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold text-slate-700 mb-3",
                        children: "จำนวนต่อประเภท"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[220px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: data,
                                layout: "vertical",
                                margin: {
                                    left: 16,
                                    right: 8,
                                    top: 4,
                                    bottom: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3",
                                        vertical: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        type: "number",
                                        tick: {
                                            fontSize: 12
                                        },
                                        axisLine: false,
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        dataKey: "name",
                                        type: "category",
                                        tick: {
                                            fontSize: 12
                                        },
                                        width: 100,
                                        axisLine: false,
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "value",
                                        radius: [
                                            4,
                                            4,
                                            4,
                                            4
                                        ],
                                        children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                fill: COLORS[index % COLORS.length]
                                            }, `cell-${index}`, false, {
                                                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$PieChartCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    valveCount: valve,
                    safetyValveCount: safety,
                    doCount: DO,
                    phCount: pH
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AssetStats.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/AssetStats.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = AssetStats;
var _c;
__turbopack_context__.k.register(_c, "AssetStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cleanDateStr": (()=>cleanDateStr),
    "cn": (()=>cn),
    "envOrThrow": (()=>envOrThrow),
    "fmtDate": (()=>fmtDate),
    "get": (()=>get),
    "parseSheetDateMs": (()=>parseSheetDateMs),
    "pickFlex": (()=>pickFlex),
    "resultBadgeClass": (()=>resultBadgeClass),
    "resultColor": (()=>resultColor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
/** ===================== Helpers (วันที่) ===================== */ const EXCEL_UNIX_EPOCH_OFFSET = 25569; // 1970-01-01 = 25569 ในระบบ Excel 1900
const MS_PER_DAY = 24 * 60 * 60 * 1000;
function excelSerialToMs(n) {
    // รองรับทศนิยม (เวลา) ด้วย
    return (n - EXCEL_UNIX_EPOCH_OFFSET) * MS_PER_DAY;
}
function safeToLocaleDate(d, locale = "en-GB") {
    return isNaN(d.getTime()) ? "-" : d.toLocaleDateString(locale, {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
function cleanDateStr(x) {
    if (x == null) return "";
    return String(x).replace(/\u200B/g, "") // zero-width space
    .replace(/\u00A0/g, " ") // non-breaking space
    .trim();
}
function envOrThrow(key) {
    const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[key];
    if (!v || String(v).trim() === "") {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return v;
}
/** ===================== Pickers ===================== */ /** ทำให้ชื่อคีย์ยืดหยุ่นขึ้นเวลาหาคอลัมน์จากชีต */ function normalizeKey(k) {
    return k.normalize("NFKC").toLowerCase().replace(/[\s_\-]+/g, "");
}
function pickFlex(row, candidates, fallback = "") {
    if (!row) return fallback;
    const dict = new Map();
    for (const k of Object.keys(row)){
        dict.set(normalizeKey(k), k);
    }
    for (const want of candidates){
        const hit = dict.get(normalizeKey(want));
        if (hit != null) {
            const v = row[hit];
            if (v != null && String(v).trim() !== "") {
                return v;
            }
        }
    }
    return fallback;
}
function get(r, keys, fallback = "") {
    for (const k of keys){
        const v = r?.[k];
        if (v != null && String(v).trim() !== "") return String(v).trim();
    }
    return fallback;
}
function fmtDate(input, locale = "en-GB") {
    if (input == null || input === "") return "-";
    // Number → Excel serial หรือ epoch ms
    if (typeof input === "number") {
        if (input > 25000) {
            const d = new Date(excelSerialToMs(input));
            return safeToLocaleDate(d, locale);
        }
        const d = new Date(input);
        return safeToLocaleDate(d, locale);
    }
    // Date object
    if (input instanceof Date) {
        return safeToLocaleDate(input, locale);
    }
    // String
    const s0 = cleanDateStr(input);
    const s = s0;
    // 1) ddmmyy (เช็คก่อนเลข 4–6 หลักชน Excel serial)
    let m = s.match(/^(\d{2})(\d{2})(\d{2})$/);
    if (m) {
        const dd = parseInt(m[1], 10);
        const mm = parseInt(m[2], 10);
        const yy = parseInt(m[3], 10);
        let year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy; // 68 → 2025 (heuristic BE-short)
        const d = new Date(year, mm - 1, dd);
        return safeToLocaleDate(d, locale);
    }
    // 2) dd/mm/yy
    m = s.match(/^([0-3]?\d)\/(1?\d)\/(\d{2})$/);
    if (m) {
        const dd = parseInt(m[1], 10);
        const mm = parseInt(m[2], 10);
        const yy = parseInt(m[3], 10);
        const year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy;
        const d = new Date(year, mm - 1, dd);
        return safeToLocaleDate(d, locale);
    }
    // 3) m/d/yyyy หรือ d/m/yyyy (+เวลา) + BE 4 หลัก
    m = s.match(/^([0-3]?\d)\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
    if (m) {
        let a = parseInt(m[1], 10);
        let b = parseInt(m[2], 10);
        let year = parseInt(m[3], 10);
        const hh = m[4] ? parseInt(m[4], 10) : 0;
        const mi = m[5] ? parseInt(m[5], 10) : 0;
        const ss = m[6] ? parseInt(m[6], 10) : 0;
        if (year > 2400) year -= 543; // BE → CE
        let day, month;
        if (a > 12 && b <= 12) {
            day = a;
            month = b;
        } else if (b > 12 && a <= 12) {
            day = b;
            month = a;
        } else {
            day = b;
            month = a;
        } // default month/day
        const d = new Date(year, month - 1, day, hh, mi, ss);
        return safeToLocaleDate(d, locale);
    }
    // 4) เลข 4–6 หลักเป็น Excel serial (หลังเช็ค ddmmyy แล้ว)
    if (/^\d{4,6}$/.test(s)) {
        const n = parseFloat(s);
        if (n > 25000) {
            const d2 = new Date(excelSerialToMs(n));
            return safeToLocaleDate(d2, locale);
        }
    }
    // 5) fallback: แยก / แบบหยาบ + BE
    if (s.includes("/")) {
        const [datePart, timePart] = s.split(/\s+/, 2);
        const parts = datePart.split("/");
        if (parts.length === 3) {
            let p1 = parseInt(parts[0], 10);
            let p2 = parseInt(parts[1], 10);
            let year = parseInt(parts[2], 10);
            if (year > 2400) year -= 543;
            let day, month;
            if (p1 > 12 && p2 <= 12) {
                day = p1;
                month = p2;
            } else if (p2 > 12 && p1 <= 12) {
                day = p2;
                month = p1;
            } else {
                day = p2;
                month = p1;
            }
            let hh = 0, mi = 0, ss = 0;
            if (timePart && /\d+:\d+(:\d+)?/.test(timePart)) {
                const t = timePart.split(":");
                hh = parseInt(t[0], 10) || 0;
                mi = parseInt(t[1], 10) || 0;
                ss = parseInt(t[2] || "0", 10) || 0;
            }
            const d = new Date(year, month - 1, day, hh, mi, ss);
            return safeToLocaleDate(d, locale);
        }
    }
    // 5.5) รูปแบบ yyyy-mm-dd หรือ yyyy/mm/dd (+เวลา) + BE 4 หลัก
    // รองรับกรณีปีพุทธศักราชที่มาจากชีตเป็นรูปแบบมาตรฐานของ Google Sheets
    let m2 = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
    if (m2) {
        let year = parseInt(m2[1], 10);
        const month = parseInt(m2[2], 10);
        const day = parseInt(m2[3], 10);
        const hh = m2[4] ? parseInt(m2[4], 10) : 0;
        const mi = m2[5] ? parseInt(m2[5], 10) : 0;
        const ss = m2[6] ? parseInt(m2[6], 10) : 0;
        if (year > 2400) year -= 543; // BE → CE
        const d = new Date(year, month - 1, day, hh, mi, ss);
        return safeToLocaleDate(d, locale);
    }
    // 6) ISO/Date constructor
    const d = new Date(s);
    return safeToLocaleDate(d, locale);
}
function parseSheetDateMs(input) {
    if (input == null || input === "") return 0;
    // Number
    if (typeof input === "number") {
        if (input > 25000) return excelSerialToMs(input);
        const d = new Date(input);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    }
    // Date
    if (input instanceof Date) {
        return isNaN(input.getTime()) ? 0 : input.getTime();
    }
    const s0 = cleanDateStr(input);
    const s = s0;
    // ddmmyy
    let m = s.match(/^(\d{2})(\d{2})(\d{2})$/);
    if (m) {
        const dd = parseInt(m[1], 10);
        const mm = parseInt(m[2], 10);
        const yy = parseInt(m[3], 10);
        let year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy;
        const d = new Date(year, mm - 1, dd);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    }
    // dd/m/yy
    m = s.match(/^([0-3]?\d)\/(1?\d)\/(\d{2})$/);
    if (m) {
        const dd = parseInt(m[1], 10);
        const mm = parseInt(m[2], 10);
        const yy = parseInt(m[3], 10);
        const year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy;
        const d = new Date(year, mm - 1, dd);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    }
    // m/d/yyyy หรือ d/m/yyyy (+เวลา) + BE
    m = s.match(/^([0-3]?\d)\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
    if (m) {
        let a = parseInt(m[1], 10);
        let b = parseInt(m[2], 10);
        let year = parseInt(m[3], 10);
        const hh = m[4] ? parseInt(m[4], 10) : 0;
        const mi = m[5] ? parseInt(m[5], 10) : 0;
        const ss = m[6] ? parseInt(m[6], 10) : 0;
        if (year > 2400) year -= 543;
        let day, month;
        if (a > 12 && b <= 12) {
            day = a;
            month = b;
        } else if (b > 12 && a <= 12) {
            day = b;
            month = a;
        } else {
            day = b;
            month = a;
        }
        const d = new Date(year, month - 1, day, hh, mi, ss);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    }
    // yyyy-mm-dd หรือ yyyy/mm/dd (+เวลา) + BE
    let m2 = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
    if (m2) {
        let year = parseInt(m2[1], 10);
        const month = parseInt(m2[2], 10);
        const day = parseInt(m2[3], 10);
        const hh = m2[4] ? parseInt(m2[4], 10) : 0;
        const mi = m2[5] ? parseInt(m2[5], 10) : 0;
        const ss = m2[6] ? parseInt(m2[6], 10) : 0;
        if (year > 2400) year -= 543;
        const d = new Date(year, month - 1, day, hh, mi, ss);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    }
    // เลข 4–6 หลักเป็น Excel serial
    if (/^\d{4,6}$/.test(s)) {
        const n = parseFloat(s);
        if (n > 25000) return excelSerialToMs(n);
    }
    // Fallback
    const d = new Date(s);
    return isNaN(d.getTime()) ? 0 : d.getTime();
}
function resultColor(value) {
    if (!value) return "text-slate-600";
    const v = value.toLowerCase();
    if (v.includes("pass")) return "text-green-600 font-semibold";
    if (v.includes("fail") || v.includes("ng")) return "text-red-600 font-semibold";
    return "text-slate-800";
}
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function resultBadgeClass(v) {
    const s = String(v || "").toLowerCase();
    if (s.includes("pass") || s.includes("ok") || s.includes("ผ่าน")) {
        return "bg-emerald-100 text-emerald-700";
    }
    if (s.includes("fail") || s.includes("not ok") || s.includes("ng") || s.includes("ไม่ผ่าน")) {
        return "bg-rose-100 text-rose-700";
    }
    return "bg-slate-100 text-slate-700";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/asset/RecentTable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RecentTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function TypeBadge({ type }) {
    const tone = type === "Valve" ? "blue" : type === "Safety Valve" ? "emerald" : "violet";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-0.5 rounded-full text-xs bg-${tone}-500/15 text-${tone}-300`,
        children: type
    }, void 0, false, {
        fileName: "[project]/src/components/asset/RecentTable.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_c = TypeBadge;
function StatusPill({ v }) {
    const ok = String(v || "").toLowerCase().includes("pass");
    const tone = ok ? "green" : "rose";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-0.5 rounded-full text-xs bg-${tone}-500/15 text-${tone}-300`,
        children: v || "-"
    }, void 0, false, {
        fileName: "[project]/src/components/asset/RecentTable.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_c1 = StatusPill;
function RecentTable({ items = [], onlyType }) {
    _s();
    const [rType, setRType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(onlyType || ""); // "" = ทั้งหมด
    const [rArea, setRArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // ข้อมูลที่แสดง และรายการพื้นที่ทั้งหมดจาก API
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items || []);
    const [areas, setAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // lock ประเภทเมื่อมี onlyType
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecentTable.useEffect": ()=>{
            if (onlyType) setRType(onlyType);
        }
    }["RecentTable.useEffect"], [
        onlyType
    ]);
    // เปลี่ยนชนิด → รีเซ็ตพื้นที่ (เพื่อให้เห็น "ทุกพื้นที่" ของชนิดใหม่)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecentTable.useEffect": ()=>{
            setRArea("");
        }
    }["RecentTable.useEffect"], [
        rType,
        onlyType
    ]);
    const SUPPORTED_TYPES = [
        "Valve",
        "Safety Valve",
        "DO sensor",
        "pH sensor"
    ];
    const typeOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RecentTable.useMemo[typeOptions]": ()=>SUPPORTED_TYPES
    }["RecentTable.useMemo[typeOptions]"], []);
    const effectiveType = onlyType || rType;
    // ⬇️ รีเฟตช์ทุกครั้งที่ ชนิด/พื้นที่ เปลี่ยน (limit = 10 เสมอ)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecentTable.useEffect": ()=>{
            const params = new URLSearchParams();
            if (effectiveType) params.set("type", effectiveType);
            if (rArea) params.set("area", rArea);
            params.set("limit", "10");
            const url = `/api/assets/recent?${params.toString()}`;
            let alive = true;
            ({
                "RecentTable.useEffect": async ()=>{
                    try {
                        setLoading(true);
                        const res = await fetch(url, {
                            cache: "no-store"
                        });
                        const json = await res.json();
                        if (!alive) return;
                        setData(json.items ?? []);
                        setAreas(json.areas ?? []); // ✅ ใช้รายการพื้นที่จาก API
                    } catch  {
                        if (alive) {
                            setData([]);
                            setAreas([]);
                        }
                    } finally{
                        if (alive) setLoading(false);
                    }
                }
            })["RecentTable.useEffect"]();
            return ({
                "RecentTable.useEffect": ()=>{
                    alive = false;
                }
            })["RecentTable.useEffect"];
        }
    }["RecentTable.useEffect"], [
        effectiveType,
        rArea
    ]);
    const rows = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-sm border border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center gap-3 px-6 py-4 border-b border-slate-200",
                children: [
                    !onlyType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: rType,
                            onChange: (e)=>setRType(e.target.value),
                            className: "px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "ทั้งหมด"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/asset/RecentTable.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                typeOptions.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: t,
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 90,
                                        columnNumber: 39
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/asset/RecentTable.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: rArea,
                            onChange: (e)=>setRArea(e.target.value),
                            className: "px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "ทุกพื้นที่"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/asset/RecentTable.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                areas.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: a,
                                        children: a
                                    }, a, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/asset/RecentTable.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/asset/RecentTable.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold",
                children: "รายการซ่อมล่าสุด"
            }, void 0, false, {
                fileName: "[project]/src/components/asset/RecentTable.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm text-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-slate-50 text-slate-500 uppercase text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left",
                                        children: "ประเภท"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left",
                                        children: "Report No."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left",
                                        children: "Tag"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left",
                                        children: "รายละเอียด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left",
                                        children: "ผู้ทดสอบ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left",
                                        children: "วันที่"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left",
                                        children: "ผล"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/asset/RecentTable.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-6 text-slate-500",
                                        colSpan: 7,
                                        children: "กำลังโหลด…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 123,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/asset/RecentTable.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this),
                                !loading && rows.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-t border-slate-100 hover:bg-slate-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypeBadge, {
                                                    type: r.Type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 43
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-blue-600",
                                                children: r.Report_No || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3",
                                                children: r.Tag_No || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3",
                                                children: r.Description || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3",
                                                children: r.Tested_by || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3",
                                                children: r.displayDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDate"])(r["Inspect_Date"] ?? r["DATE"])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                    v: r.Final_Result
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 43
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/asset/RecentTable.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)),
                                !loading && !rows.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-6 text-slate-500",
                                        colSpan: 7,
                                        children: "ไม่มีข้อมูลล่าสุด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/asset/RecentTable.tsx",
                                        lineNumber: 135,
                                        columnNumber: 46
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/asset/RecentTable.tsx",
                                    lineNumber: 135,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/asset/RecentTable.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/asset/RecentTable.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/asset/RecentTable.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/asset/RecentTable.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(RecentTable, "ZM4Gi3aEfGHFN2cwM3rVsHW/pBo=");
_c2 = RecentTable;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TypeBadge");
__turbopack_context__.k.register(_c1, "StatusPill");
__turbopack_context__.k.register(_c2, "RecentTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/dashboard/AssetTable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AssetTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PAGE_SIZE = 12;
function AssetTable({ source = "all" }) {
    _s();
    const lockedType = source === "valve" ? "Valve" : source === "safety" ? "Safety Valve" : source === "DO sensor" ? "DO sensor" : source === "pH sensor" ? "pH sensor" : "";
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [meta, setMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // query states
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debounced, setDebounced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [area, setArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // ถ้า lockedType มีค่า ให้ตั้ง type ตามนั้นและไม่ให้เปลี่ยน
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(lockedType);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssetTable.useEffect": ()=>{
            setType(lockedType); // sync เมื่อ prop เปลี่ยน
        }
    }["AssetTable.useEffect"], [
        lockedType
    ]);
    // debounce search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssetTable.useEffect": ()=>{
            const t = setTimeout({
                "AssetTable.useEffect.t": ()=>setDebounced(search.trim())
            }["AssetTable.useEffect.t"], 250);
            return ({
                "AssetTable.useEffect": ()=>clearTimeout(t)
            })["AssetTable.useEffect"];
        }
    }["AssetTable.useEffect"], [
        search
    ]);
    // Load asset list + meta (single call)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssetTable.useEffect": ()=>{
            setLoading(true);
            fetch("/api/assets").then({
                "AssetTable.useEffect": (r)=>r.json()
            }["AssetTable.useEffect"]).then({
                "AssetTable.useEffect": (d)=>{
                    const rows = (d.items || []).map({
                        "AssetTable.useEffect.rows": (x)=>({
                                Type: x.type,
                                Tags: x.tag,
                                Description: x.description,
                                TagsArea: x.area,
                                Location: x.location
                            })
                    }["AssetTable.useEffect.rows"]);
                    setItems(rows);
                    const areas = Array.from(new Set(rows.map({
                        "AssetTable.useEffect.areas": (r)=>r.TagsArea || ""
                    }["AssetTable.useEffect.areas"]).filter(Boolean)));
                    const types = Array.from(new Set(rows.map({
                        "AssetTable.useEffect.types": (r)=>r.Type
                    }["AssetTable.useEffect.types"])));
                    setMeta({
                        areas,
                        types
                    });
                }
            }["AssetTable.useEffect"]).finally({
                "AssetTable.useEffect": ()=>setLoading(false)
            }["AssetTable.useEffect"]);
        }
    }["AssetTable.useEffect"], []);
    // client-side filtering + pagination
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssetTable.useMemo[filtered]": ()=>{
            const qs = debounced.toLowerCase();
            return items.filter({
                "AssetTable.useMemo[filtered]": (r)=>{
                    if (qs) {
                        const hit = r.Tags.toLowerCase().includes(qs) || (r.Description || "").toLowerCase().includes(qs) || (r.Location || "").toLowerCase().includes(qs) || (r.TagsArea || "").toLowerCase().includes(qs);
                        if (!hit) return false;
                    }
                    if (type && r.Type !== type) return false;
                    if (area && (r.TagsArea || "") !== area) return false;
                    return true;
                }
            }["AssetTable.useMemo[filtered]"]);
        }
    }["AssetTable.useMemo[filtered]"], [
        items,
        debounced,
        type,
        area
    ]);
    const total = filtered.length;
    const totalPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssetTable.useMemo[totalPages]": ()=>Math.max(1, Math.ceil(total / PAGE_SIZE))
    }["AssetTable.useMemo[totalPages]"], [
        total
    ]);
    const pageItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssetTable.useMemo[pageItems]": ()=>{
            const start = (page - 1) * PAGE_SIZE;
            return filtered.slice(start, start + PAGE_SIZE);
        }
    }["AssetTable.useMemo[pageItems]"], [
        filtered,
        page
    ]);
    // reset page เมื่อ filter เปลี่ยน
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssetTable.useEffect": ()=>setPage(1)
    }["AssetTable.useEffect"], [
        debounced,
        area,
        type
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-sm border border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center gap-3 px-6 py-4 border-b border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: "ค้นหา Tags / คำอธิบาย / Location ...",
                                className: "w-full bg-slate-50 pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: area,
                                onChange: (e)=>setArea(e.target.value),
                                className: "px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "ทุกพื้นที่"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    (meta?.areas ?? []).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: a,
                                            children: a
                                        }, a, false, {
                                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: type,
                                onChange: (e)=>setType(e.target.value),
                                disabled: !!lockedType,
                                className: "px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm disabled:opacity-50 text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "ทุกประเภท"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Valve",
                                        children: "Valve"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Safety Valve",
                                        children: "Safety Valve"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "DO sensor",
                                        children: "DO sensor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pH sensor",
                                        children: "pH sensor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "sticky top-0 z-10 bg-slate-50/90 backdrop-blur text-slate-600 text-xs uppercase tracking-wide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left w-[14rem]",
                                        children: "Tags"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left w-[10rem]",
                                        children: "Tags Area"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left w-[12rem]",
                                        children: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left w-[8rem]",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-right w-[8rem]",
                                        children: "รายละเอียด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "py-12 text-center text-slate-400",
                                    children: "กำลังโหลด..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this) : pageItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "py-12 text-center text-slate-400",
                                    children: "ไม่พบข้อมูล"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this) : pageItems.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `hover:bg-slate-50 ${i % 2 ? "bg-slate-50/30" : "" //ปรับสีตาราง
                                    }`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 font-medium text-slate-900",
                                            children: r.Tags
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-slate-700",
                                            children: r.Description || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-slate-700",
                                            children: r.TagsArea || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-slate-700",
                                            children: r.Location || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-slate-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypePill, {
                                                type: r.Type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-right text-slate-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "inline-flex items-center gap-1 text-blue-600 hover:text-blue-800",
                                                href: `/dashboard/asset/${r.Type === "Valve" ? "valve" : r.Type === "Safety Valve" ? "safety" : r.Type === "DO sensor" ? "DO" : r.Type === "pH sensor" ? "pH" : ""}/${encodeURIComponent(r.Tags)}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4 text-slate-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 23
                                                    }, this),
                                                    "ดูรายละเอียด"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `${r.Type}-${r.Tags}-${i}`, true, {
                                    fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-4 border-t border-slate-100 text-slate-700 dark:border-slate-200 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500",
                        children: [
                            "รวม ",
                            total.toLocaleString(),
                            " รายการ",
                            type ? ` • ${type}` : "",
                            " ",
                            area ? ` • พื้นที่ ${area}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-slate-700 dark:text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                disabled: page <= 1,
                                className: "px-3 py-1 border rounded-lg disabled:opacity-40 text-slate-700",
                                children: "ก่อนหน้า"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-[5rem] text-center text-slate-700",
                                children: [
                                    page,
                                    " / ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPage((p)=>p + 1),
                                disabled: page >= totalPages,
                                className: "px-3 py-1 border rounded-lg disabled:opacity-40 text-slate-700",
                                children: "ถัดไป"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AssetTable.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(AssetTable, "2xYL5IQooVPSakT8JL+ANijr4cQ=");
_c = AssetTable;
function TypePill({ type }) {
    const style = type === "Safety Valve" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-100/30 text-sm" //ปรับสีประเภท
     : type === "Valve" ? "bg-red-50 text-red-700 dark:bg-red-100/30" : type === "DO sensor" ? "bg-violet-50 text-violet-700" : "bg-blue-50 text-blue-700 dark:bg-blue-900/30";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-1 text-xs rounded-full ${style}`,
        children: type
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/AssetTable.tsx",
        lineNumber: 244,
        columnNumber: 10
    }, this);
}
_c1 = TypePill;
var _c, _c1;
__turbopack_context__.k.register(_c, "AssetTable");
__turbopack_context__.k.register(_c1, "TypePill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/asset/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AssetsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AssetStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/AssetStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$asset$2f$RecentTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/asset/RecentTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AssetTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/AssetTable.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AssetsPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        items: [],
        types: [],
        locations: [],
        areas: [],
        total: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [recent, setRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rType, setRType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rArea, setRArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // filters
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [area, setArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssetsPage.useEffect": ()=>{
            fetch("/api/assets").then({
                "AssetsPage.useEffect": (r)=>r.json()
            }["AssetsPage.useEffect"]).then({
                "AssetsPage.useEffect": (d)=>setData(d)
            }["AssetsPage.useEffect"]).finally({
                "AssetsPage.useEffect": ()=>setLoading(false)
            }["AssetsPage.useEffect"]);
        }
    }["AssetsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssetsPage.useEffect": ()=>{
            const params = new URLSearchParams();
            if (rType) params.set("type", rType);
            if (rArea) params.set("area", rArea);
            params.set("limit", "10");
            fetch(`/api/assets/recent?${params.toString()}`).then({
                "AssetsPage.useEffect": (r)=>r.json()
            }["AssetsPage.useEffect"]).then({
                "AssetsPage.useEffect": (d)=>setRecent(d.items || [])
            }["AssetsPage.useEffect"]).catch({
                "AssetsPage.useEffect": ()=>setRecent([])
            }["AssetsPage.useEffect"]);
        }
    }["AssetsPage.useEffect"], [
        rType,
        rArea
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssetsPage.useEffect": ()=>{
            fetch("/api/assets/recent").then({
                "AssetsPage.useEffect": (r)=>r.json()
            }["AssetsPage.useEffect"]).then({
                "AssetsPage.useEffect": (d)=>setRecent(d.items || [])
            }["AssetsPage.useEffect"]).catch({
                "AssetsPage.useEffect": ()=>setRecent([])
            }["AssetsPage.useEffect"]);
        }
    }["AssetsPage.useEffect"], []);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssetsPage.useMemo[filtered]": ()=>{
            const qs = q.trim().toLowerCase();
            return data.items.filter({
                "AssetsPage.useMemo[filtered]": (r)=>{
                    if (qs) {
                        const hit = r.tag.toLowerCase().includes(qs) || r.description.toLowerCase().includes(qs) || r.location.toLowerCase().includes(qs) || r.area.toLowerCase().includes(qs);
                        if (!hit) return false;
                    }
                    if (type && r.type !== type) return false;
                    if (location && r.location !== location) return false;
                    if (area && r.area !== area) return false;
                    return true;
                }
            }["AssetsPage.useMemo[filtered]"]);
        }
    }["AssetsPage.useMemo[filtered]"], [
        data.items,
        q,
        type,
        location,
        area
    ]);
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssetsPage.useMemo[summary]": ()=>{
            const valveCount = filtered.filter({
                "AssetsPage.useMemo[summary]": (item)=>item.type === "Valve"
            }["AssetsPage.useMemo[summary]"]).length;
            const safetyValveCount = filtered.filter({
                "AssetsPage.useMemo[summary]": (item)=>item.type === "Safety Valve"
            }["AssetsPage.useMemo[summary]"]).length;
            const doCount = filtered.filter({
                "AssetsPage.useMemo[summary]": (item)=>item.type === "DO sensor"
            }["AssetsPage.useMemo[summary]"]).length;
            const phCount = filtered.filter({
                "AssetsPage.useMemo[summary]": (item)=>item.type === "pH sensor"
            }["AssetsPage.useMemo[summary]"]).length;
            const totalCount = filtered.length;
            return {
                valveCount,
                safetyValveCount,
                doCount,
                phCount,
                totalCount
            };
        }
    }["AssetsPage.useMemo[summary]"], [
        filtered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-semibold text-gray-900",
                            children: "Assets"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/asset/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "รายการอุปกรณ์"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/asset/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/asset/page.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/asset/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AssetStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                total: summary.totalCount,
                valve: summary.valveCount,
                safety: summary.safetyValveCount,
                DO: summary.doCount,
                pH: summary.phCount
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/asset/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$asset$2f$RecentTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: recent
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/asset/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AssetTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/asset/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/asset/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(AssetsPage, "JAcjTAeQXanyauQ6q2gajO+YGWo=");
_c = AssetsPage;
var _c;
__turbopack_context__.k.register(_c, "AssetsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_06ff0b52._.js.map