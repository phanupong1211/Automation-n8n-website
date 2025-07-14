module.exports = {

"[project]/.next-internal/server/app/api/sse/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8eb31bce._.js.map