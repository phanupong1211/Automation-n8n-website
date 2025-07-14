const connections = new Map<string, ReadableStreamDefaultController>();

// Function to send message to specific session (ต้อง export เพื่อให้ไฟล์อื่นใช้ได้)
export function sendToSession(sessionId: string, data: unknown) { // เพิ่มคอมเมนต์
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
    for (const [connId, controller] of connections.entries()) {
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

// Function to broadcast to all connections (ต้อง export เพื่อให้ไฟล์อื่นใช้ได้ หากมีการใช้)
export  function broadcast(data: unknown) { // เพิ่มคอมเมนต์
  let sent = 0;
  for (const [sessionId, controller] of connections.entries()) {
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

// Function to get connection info for debugging (ต้อง export เพื่อให้ไฟล์อื่นใช้ได้ หากมีการใช้)
export  function getConnectionInfo() {
  return {
    totalConnections: connections.size,
    sessionIds: Array.from(connections.keys())
  };
}