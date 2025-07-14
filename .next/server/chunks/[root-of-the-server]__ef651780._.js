module.exports = {

"[project]/.next-internal/server/app/api/public/n8n/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/public/n8n/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "OPTIONS": (()=>OPTIONS),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$sse$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/sse/route.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        console.log("=== n8n Public Endpoint Called ===");
        console.log("Headers:", Object.fromEntries(request.headers.entries()));
        const body = await request.json();
        console.log("Body received:", body);
        // Extract response from various possible formats
        const response = body.response || body.message || body.reply || body.text || body.content || "ข้อความจาก n8n";
        const sessionId = body.sessionId || body.chatId || body.conversationId;
        console.log("Processed response:", response);
        console.log("Session ID:", sessionId);
        console.log("SSE Connection Info:", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$sse$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getConnectionInfo"])());
        // Send the response via SSE to the chat if we have a session ID
        if (sessionId) {
            const sent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$sse$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendToSession"])(sessionId, {
                type: 'response',
                message: response,
                timestamp: new Date().toISOString()
            });
            console.log(`✅ SSE message sent to session ${sessionId}:`, sent);
            if (sent) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    message: "✅ Response sent to chat via SSE",
                    sessionId: sessionId,
                    processedResponse: response,
                    timestamp: new Date().toISOString()
                }, {
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    }
                });
            } else {
                console.log(`❌ Failed to send SSE message to session ${sessionId}`);
            }
        } else {
            console.log("❌ No session ID found in request");
        }
        // Return success response (fallback)
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "✅ Response received successfully from n8n",
            processedResponse: response,
            timestamp: new Date().toISOString(),
            receivedData: body
        }, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });
    } catch (error) {
        console.error("❌ n8n public endpoint error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to process n8n response",
            details: error instanceof Error ? error.message : "Unknown error",
            timestamp: new Date().toISOString()
        }, {
            status: 500
        });
    }
}
async function OPTIONS() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: "🟢 ACTIVE",
        message: "n8n public endpoint is running - NO AUTHENTICATION REQUIRED",
        timestamp: new Date().toISOString(),
        endpoint: "/api/public/n8n",
        methods: [
            "POST",
            "GET",
            "OPTIONS"
        ],
        example: {
            url: "http://localhost:3000/api/public/n8n",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                response: "Your AI response here",
                sessionId: "optional-session-id"
            }
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ef651780._.js.map