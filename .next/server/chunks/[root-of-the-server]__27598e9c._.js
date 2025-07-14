module.exports = {

"[project]/.next-internal/server/app/api/chatreport/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/src/lib/webhook-security.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSignatureHeader": (()=>createSignatureHeader),
    "generateSessionToken": (()=>generateSessionToken),
    "generateSignature": (()=>generateSignature),
    "validateWebhookRequest": (()=>validateWebhookRequest),
    "verifySessionToken": (()=>verifySessionToken),
    "verifySignature": (()=>verifySignature)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
// Webhook secret - in production, store in environment variables
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'boom-portfolio-webhook-secret-2024';
function generateSignature(payload) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', WEBHOOK_SECRET).update(payload, 'utf8').digest('hex');
}
function verifySignature(payload, signature) {
    const expectedSignature = generateSignature(payload);
    // Use crypto.timingSafeEqual to prevent timing attacks
    const expectedBuffer = Buffer.from(`sha256=${expectedSignature}`, 'utf8');
    const actualBuffer = Buffer.from(signature, 'utf8');
    if (expectedBuffer.length !== actualBuffer.length) {
        return false;
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].timingSafeEqual(expectedBuffer, actualBuffer);
}
function createSignatureHeader(payload) {
    return `sha256=${generateSignature(payload)}`;
}
function validateWebhookRequest(payload, signatureHeader) {
    if (!signatureHeader) {
        return {
            valid: false,
            error: 'Missing signature header'
        };
    }
    if (!signatureHeader.startsWith('sha256=')) {
        return {
            valid: false,
            error: 'Invalid signature format'
        };
    }
    const isValid = verifySignature(payload, signatureHeader);
    if (!isValid) {
        return {
            valid: false,
            error: 'Invalid signature'
        };
    }
    return {
        valid: true
    };
}
function generateSessionToken(sessionId) {
    const timestamp = Date.now().toString();
    const data = `${sessionId}:${timestamp}`;
    const signature = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', WEBHOOK_SECRET).update(data, 'utf8').digest('hex');
    return `${timestamp}.${signature}`;
}
function verifySessionToken(sessionId, token) {
    try {
        const [timestamp, signature] = token.split('.');
        if (!timestamp || !signature) {
            return false;
        }
        // Check if token is not older than 1 hour
        const tokenTime = parseInt(timestamp);
        const now = Date.now();
        const oneHour = 60 * 60 * 1000;
        if (now - tokenTime > oneHour) {
            return false;
        }
        // Verify signature
        const data = `${sessionId}:${timestamp}`;
        const expectedSignature = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', WEBHOOK_SECRET).update(data, 'utf8').digest('hex');
        return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expectedSignature, 'hex'));
    } catch (error) {
        return false;
    }
}
}}),
"[project]/src/app/api/chatreport/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//chatreport
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webhook$2d$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/webhook-security.ts [app-route] (ecmascript)");
;
;
// Portfolio data for the AI to reference
const portfolioData = {
    name: "์NIS Automation AI Report",
    title: "AI Report",
    contact: {
        phone: "(+66) 85-835-1266",
        email: "Phanupong_C@npp.co.th",
        address: "1 tatoom, Srimahapot, Prachin buri 25140, Thailand"
    }
};
async function POST(request) {
    let userMessage = "";
    let sessionId = "";
    try {
        const { message, history, sessionId: clientSessionId } = await request.json();
        userMessage = message || "";
        sessionId = clientSessionId || `session_${Date.now()}`;
        if (!userMessage) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Message is required"
            }, {
                status: 400
            });
        }
        console.log(`[Chat API] Session: ${sessionId}, Message: ${userMessage.substring(0, 50)}...`);
        // Try to send to n8n webhook first
        try {
            const payload = JSON.stringify({
                message: userMessage,
                history,
                portfolioData,
                sessionId,
                responseUrl: `http://localhost:3001/api/webhook`,
                sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webhook$2d$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSessionToken"])(sessionId),
                timestamp: new Date().toISOString()
            });
            const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webhook$2d$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSignatureHeader"])(payload);
            const webhookResponse = await fetch("http://localhost:5678/webhook/8bdc9363-b386-44cb-a05c-cd168d0f8608", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-session-id": sessionId,
                    "x-webhook-source": "portfolio-chat",
                    "x-signature": signature
                },
                body: payload,
                // Add timeout to prevent hanging
                signal: AbortSignal.timeout(15000) // 15 second timeout
            });
            if (webhookResponse.ok) {
                const webhookData = await webhookResponse.json();
                console.log(`[Chat API] Webhook success for session ${sessionId}:`, webhookData);
                // Check if n8n will send response via webhook (async mode)
                if (webhookData.useSSE || webhookData.async || webhookData.status === 'processing' || webhookData.message && webhookData.message.includes('Workflow was started')) {
                    console.log(`[Chat API] Using SSE mode for session ${sessionId} - n8n will send response later`);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        useSSE: true,
                        sessionId,
                        message: "Response will be sent via real-time connection"
                    });
                }
                // Handle immediate response formats
                let responseMessage = "";
                if (typeof webhookData === 'string') {
                    responseMessage = webhookData;
                } else if (webhookData.response) {
                    responseMessage = webhookData.response;
                } else if (webhookData.message) {
                    responseMessage = webhookData.message;
                } else if (webhookData.reply) {
                    responseMessage = webhookData.reply;
                } else if (webhookData.text) {
                    responseMessage = webhookData.text;
                } else {
                    // If webhook returns unexpected format, log it and use fallback
                    console.log(`[Chat API] Unexpected webhook response format:`, webhookData);
                    console.log(`[Chat API] Using fallback response for session ${sessionId}`);
                    throw new Error("Unexpected webhook response format");
                }
                console.log(`[Chat API] Immediate response for session ${sessionId}:`, responseMessage);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    message: responseMessage,
                    useSSE: false
                });
            } else {
                const errorText = await webhookResponse.text();
                console.log(`[Chat API] Webhook error ${webhookResponse.status}:`, errorText);
                throw new Error(`Webhook returned status: ${webhookResponse.status}`);
            }
        } catch (webhookError) {
            console.log(`[Chat API] Webhook failed for session ${sessionId}, using fallback:`, webhookError);
            // Fallback to local response if webhook fails
            const response = generateResponse(userMessage.toLowerCase());
            console.log(`[Chat API] Fallback response for session ${sessionId}:`, response.substring(0, 100) + "...");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: response,
                useSSE: false,
                fallback: true
            });
        }
    } catch (error) {
        console.error(`[Chat API] Final error for session ${sessionId}:`, error);
        // Final fallback
        const response = generateResponse(userMessage.toLowerCase() || "");
        console.log(`[Chat API] Final fallback response for session ${sessionId}:`, response.substring(0, 100) + "...");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: response,
            useSSE: false,
            fallback: true,
            error: "System temporarily unavailable"
        });
    }
}
function generateResponse(message) {
    // Contact-related queries
    if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach") || message.includes("ติดต่อ")) {
        return `ขณะนี้ระบบตอบคำถามอัจฉริยะขัดข้อง คุณสามารถติดต่อทีม Instrument service ได้ที่:
    📧 Email: ${portfolioData.contact.email}
    📱 Phone: ${portfolioData.contact.phone}

  เรายินดีให้คำปรึกษาและออกแบบบริการตรวจสอบ/ซ่อมบำรุงให้เหมาะกับโรงงานหรือหน่วยงานของคุณ!`;
    }
    // Default fallback
    return `ขอบคุณสำหรับคำถามครับ! ขณะนี้ระบบตอบคำถามอัจฉริยะขัดข้อง หากคุณสนใจเรื่องงานซ่อมบำรุง วาล์ว เซฟตี้วาล์ว แท่นชั่งดิจิทัล ระบบวัดอัตราการไหล หรือ IoT สามารถติดต่อช่องทางดังนี้ได้เลยครับ😀

  📧 Email: ${portfolioData.contact.email}, 
  📱 Phone: ${portfolioData.contact.phone}
  `;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__27598e9c._.js.map