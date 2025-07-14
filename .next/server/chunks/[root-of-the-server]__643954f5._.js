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
"[project]/src/app/api/sse/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//sse
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST),
    "broadcast": (()=>broadcast),
    "getConnectionInfo": (()=>getConnectionInfo),
    "sendToSession": (()=>sendToSession)
});
// Store for SSE connections
const connections = new Map();
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const sessionId = searchParams.get('sessionId') || Date.now().toString();
        console.log(`SSE connection established for session: ${sessionId}`);
        const stream = new ReadableStream({
            start (controller) {
                try {
                    // Store the connection
                    connections.set(sessionId, controller);
                    // Send initial connection message
                    controller.enqueue(`data: ${JSON.stringify({
                        type: 'connected',
                        sessionId,
                        message: 'เชื่อมต่อ AI สำเร็จ'
                    })}\n\n`);
                    console.log(`SSE initial message sent for session: ${sessionId}`);
                    // Clean up on close
                    request.signal.addEventListener('abort', ()=>{
                        console.log(`SSE connection closed for session: ${sessionId}`);
                        connections.delete(sessionId);
                        try {
                            controller.close();
                        } catch (e) {
                        // Connection already closed
                        }
                    });
                } catch (error) {
                    console.error('Error in SSE stream start:', error);
                    connections.delete(sessionId);
                }
            }
        });
        return new Response(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Cache-Control',
                'X-Accel-Buffering': 'no'
            }
        });
    } catch (error) {
        console.error('Error in SSE GET handler:', error);
        return new Response('SSE Error', {
            status: 500
        });
    }
}
function sendToSession(sessionId, data) {
    console.log(`[SSE] Attempting to send to session: ${sessionId}`);
    console.log(`[SSE] Available connections:`, Array.from(connections.keys()));
    console.log(`[SSE] Total connections: ${connections.size}`);
    const controller = connections.get(sessionId);
    if (controller) {
        try {
            controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
            console.log(`[SSE] Successfully sent message to session: ${sessionId}`);
            return true;
        } catch (error) {
            console.error(`[SSE] Error sending to session ${sessionId}:`, error);
            connections.delete(sessionId);
            return false;
        }
    } else {
        console.log(`[SSE] No connection found for session: ${sessionId}`);
        console.log(`[SSE] Searching for partial matches...`);
        // Try to find partial matches in case of session ID mismatch
        for (const [connId, controller] of connections.entries()){
            if (connId.includes(sessionId) || sessionId.includes(connId)) {
                console.log(`[SSE] Found partial match: ${connId} for ${sessionId}`);
                try {
                    controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
                    console.log(`[SSE] Successfully sent message to partial match: ${connId}`);
                    return true;
                } catch (error) {
                    console.error(`[SSE] Error sending to partial match ${connId}:`, error);
                    connections.delete(connId);
                }
            }
        }
    }
    return false;
}
function broadcast(data) {
    let sent = 0;
    for (const [sessionId, controller] of connections.entries()){
        try {
            controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
            sent++;
        } catch (error) {
            console.error('Error broadcasting to session:', sessionId, error);
            connections.delete(sessionId);
        }
    }
    return sent;
}
function getConnectionInfo() {
    return {
        totalConnections: connections.size,
        sessionIds: Array.from(connections.keys())
    };
}
async function POST(request) {
    try {
        const body = await request.json();
        const { action, sessionId, testData } = body;
        if (action === 'debug') {
            const info = getConnectionInfo();
            console.log(`[SSE Debug] Connection info:`, info);
            return new Response(JSON.stringify({
                success: true,
                connectionInfo: info,
                timestamp: new Date().toISOString()
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        if (action === 'test' && sessionId) {
            const testMessage = testData || {
                type: 'test',
                message: 'Test message from debug endpoint'
            };
            const sent = sendToSession(sessionId, testMessage);
            return new Response(JSON.stringify({
                success: sent,
                message: sent ? 'Test message sent successfully' : 'Failed to send test message',
                sessionId,
                connectionInfo: getConnectionInfo()
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        return new Response(JSON.stringify({
            error: 'Invalid action. Use "debug" or "test"'
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('SSE POST error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to process request'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$sse$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/sse/route.ts [app-route] (ecmascript)");
;
;
;
const portfolioData = {
    name: "NIS Automation Service (Instrument)",
    title: "ผู้เชี่ยวชาญที่ให้บริการตรวจสอบ ซ่อมบำรุง และปรับปรุงอุปกรณ์อุตสาหกรรม",
    contact: {
        phone: "(+66) 85-835-1266",
        email: "Phanupong_C@npp.co.th",
        address: "1 tatoom, Srimahapot, Prachin buri 25140, Thailand"
    },
    summary: "เราคือทีมผู้เชี่ยวชาญที่ให้บริการตรวจสอบ ซ่อมบำรุง และปรับปรุงอุปกรณ์อุตสาหกรรม เช่น วาล์ว (Control Valve), เซฟตี้วาล์ว (Safety Valve), แท่นชั่งดิจิทัล (Weight Scale) และระบบวัดอัตราการไหล (Flow Measurement System) ด้วยประสบการณ์และมาตรฐานคุณภาพสูง เรามุ่งเน้นเพิ่มประสิทธิภาพ และยืดอายุการใช้งานของเครื่องจักร"
};
async function POST(req) {
    let userMessage = "";
    let sessionId = "";
    try {
        const { message, history, sessionId: clientSessionId } = await req.json();
        userMessage = message || "";
        sessionId = clientSessionId || `session_${Date.now()}`;
        if (!userMessage) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Message is required"
            }, {
                status: 400
            });
        }
        console.log(`[Chatreport API] Session: ${sessionId}, Message: ${userMessage.substring(0, 50)}...`);
        // 🔥 เรียก webhook n8n
        try {
            const payload = JSON.stringify({
                message: userMessage,
                history,
                portfolioData,
                sessionId,
                sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webhook$2d$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSessionToken"])(sessionId),
                timestamp: new Date().toISOString()
            });
            const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webhook$2d$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSignatureHeader"])(payload);
            const webhookResponse = await fetch("http://localhost:5678/webhook-test/8bdc9363-b386-44cb-a05c-cd168d0f8608", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-session-id": sessionId,
                    "x-webhook-source": "portfolio-chat",
                    "x-signature": signature
                },
                body: payload,
                signal: AbortSignal.timeout(15000)
            });
            if (webhookResponse.ok) {
                const webhookData = await webhookResponse.json();
                console.log(`[Chatreport API] Webhook success:`, webhookData);
                // 🔥 ถ้า workflow จะตอบผ่าน SSE
                if (webhookData.useSSE || webhookData.async || webhookData.status === 'processing' || webhookData.message && webhookData.message.includes('Workflow was started')) {
                    console.log(`[Chatreport API] Waiting SSE mode for session: ${sessionId}`);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        useSSE: true,
                        sessionId,
                        message: "Response will be sent via SSE"
                    });
                }
                // 🔥 immediate response mode
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
                    console.log(`[Chatreport API] Unexpected format:`, webhookData);
                    throw new Error("Unexpected webhook response format");
                }
                // 🔥 พยายามส่งผ่าน SSE ถ้าไม่ได้ fallback HTTP
                const success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$sse$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendToSession"])(sessionId, {
                    type: "response",
                    message: responseMessage
                });
                if (!success) {
                    console.log(`[Fallback] SSE not found, send via HTTP`);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        message: responseMessage,
                        useSSE: false
                    });
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    message: responseMessage,
                    useSSE: false
                });
            } else {
                const errorText = await webhookResponse.text();
                console.log(`[Chatreport API] Webhook error ${webhookResponse.status}:`, errorText);
                throw new Error(`Webhook returned status: ${webhookResponse.status}`);
            }
        } catch (webhookError) {
            console.log(`[Chatreport API] Webhook failed:`, webhookError);
            const response = generateResponse(userMessage.toLowerCase());
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: response,
                useSSE: false,
                fallback: true
            });
        }
    } catch (error) {
        console.error(`[Chatreport API] Fatal error:`, error);
        const response = generateResponse(userMessage.toLowerCase() || "");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: response,
            useSSE: false,
            fallback: true,
            error: "System temporarily unavailable"
        });
    }
}
// 🔥 function สำหรับ fallback message
function generateResponse(message) {
    if (message.includes("skill") || message.includes("ทักษะ") || message.includes("บริการ")) {
        return `ทีม Instrument service มีทักษะในงาน Maintenance เช่น:
    🔧 โทร: ${portfolioData.contact.phone},
    💧 อีเมล: ${portfolioData.contact.email},
    ⚖️ ที่อยู่: ${portfolioData.contact.address}`;
    }
    return `ขอบคุณสำหรับคำถามครับ! หากสนใจซ่อมบำรุง วาล์ว แท่นชั่ง IoT ติดต่อเราได้เลย:
    📧 ${portfolioData.contact.email} 📱 ${portfolioData.contact.phone}`;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__643954f5._.js.map