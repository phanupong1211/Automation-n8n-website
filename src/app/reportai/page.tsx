"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isLoading?: boolean;
}

//export default
export default function ReportAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI assistant for valve maintenance services. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => {
    if (typeof window !== "undefined") {
      let existing = localStorage.getItem("sessionId");
      if (!existing) {
        existing = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("sessionId", existing);
      }
      return existing;
    }
    return "";
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const es = new EventSource(`/api/sse?sessionId=${sessionId}`);
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "response") {
          setMessages((prev) => {
            const filtered = prev.filter((msg) => !msg.isLoading);
            return [
              ...filtered,
              {
                id: Date.now().toString(),
                content: data.message,
                role: "assistant",
                timestamp: new Date(),
              },
            ];
          });
          setIsLoading(false);
        }
      } catch {}
    };
    es.onerror = () => es.close();
    return () => es.close();
  }, [sessionId]);

  const sendMessage = async (customInput?: string) => {
    const content = customInput || input;
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, {
      id: `loading_${Date.now()}`,
      content: "Thinking...",
      role: "assistant",
      timestamp: new Date(),
      isLoading: true,
    }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chatreport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, history: messages, sessionId }),
      });
      const data = await res.json();
      if (data.message && !data.useSSE) {
        setMessages((prev) => prev.filter((m) => !m.isLoading).concat({
          id: Date.now().toString(),
          content: data.message,
          role: "assistant",
          timestamp: new Date(),
        }));
        setIsLoading(false);
      }
    } catch {
      setMessages((prev) => prev.filter((m) => !m.isLoading).concat({
        id: Date.now().toString(),
        content: "Sorry, there was a problem. Please try again.",
        role: "assistant",
        timestamp: new Date(),
      }));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-12">
      <div className="max-w-2xl w-full text-center mb-10">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-blue-500">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d=""></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold">AI Assistant</h1>
          <p className="text-gray-400">Get instant answers about our valve maintenance services</p>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 max-w-3xl w-full space-y-4 shadow-lg">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`p-3 rounded-lg max-w-[75%] ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"}`}>
              {msg.isLoading ? <Loader2 className="animate-spin w-4 h-4 inline" /> : null}
              <span className="ml-1">{msg.content}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-6 flex w-full max-w-3xl space-x-2">
        <input
          type="text"
          className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your question about valve services..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
          disabled={isLoading}
        />
        <button
          onClick={() => sendMessage()}
          className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          disabled={!input.trim() || isLoading}
        >
          <Send size={20} />
        </button>
      </div>

      <div className="mt-8 w-full max-w-3xl">
        <h3 className="text-lg font-semibold mb-4">Quick Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["ขอรายละเอียดงานซ่อม Tage No.: 463TV561 ", "Tage No.: 463TV561 ใช้เครื่องมืออะไรบ้าง", "Tage No.: 463TV561 ใช้เวลาถอดกี่นาที", "พื้นที่ 412 มีวาล์วอะไรบ้าง"].map(q => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-left"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
