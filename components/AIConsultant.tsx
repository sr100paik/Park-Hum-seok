
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '안녕하세요. 박흠석 전문가의 AI 상담 어시스턴트입니다. 전략, M&A, 회계감사 등 궁금하신 점을 물어보세요.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    let fullBotResponse = '';
    
    // Add an initial empty bot message for streaming
    setMessages(prev => [...prev, { role: 'bot', text: '' }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const streamResponse = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `당신은 30년 경력의 회계 전문가 '박흠석'의 전문 AI 어시스턴트입니다. 
          주요 전문 분야는 M&A 실사, 사업 전략 수립, 지배구조 개편, 내부회계관리제도 구축입니다.
          공손하고 전문적인 어조(Professional & Formal)를 유지하세요. 
          상담 신청이 필요해 보이면 "전문가와의 직접 상담을 신청해 보세요"라고 안내하세요.`,
        },
      });

      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullBotResponse += textChunk;
        
        // Update the last message (the bot's message) with the accumulated text
        setMessages(prev => {
          const updated = [...prev];
          if (updated.length > 0) {
            updated[updated.length - 1] = { role: 'bot', text: fullBotResponse };
          }
          return updated;
        });
      }
    } catch (error) {
      console.error('AI Consulting Error:', error);
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'bot', text: '죄송합니다. 현재 상담이 불가능합니다. 나중에 다시 시도해 주세요.' };
        return updated;
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[550px] rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#1A365D] p-4 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Bot size={24} className="text-[#C5A059]" />
              </div>
              <div>
                <h4 className="font-bold text-sm">박흠석 AI 어시스턴트</h4>
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-gray-400">실시간 상담 가능</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-300`}>
                <div className={`max-w-[85%] p-3 px-4 rounded-2xl text-[13px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#1A365D] text-white rounded-br-none shadow-md' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                }`}>
                  {msg.text || (msg.role === 'bot' && i === messages.length - 1 && isTyping ? '...' : '')}
                </div>
              </div>
            ))}
            {isTyping && messages[messages.length-1].text === '' && (
              <div className="flex justify-start">
                <div className="bg-white p-3 px-4 rounded-2xl shadow-sm border border-gray-100 flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-1 border border-gray-200 focus-within:ring-2 focus-within:ring-[#1A365D]/20 focus-within:bg-white transition-all">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="상담 내용을 입력하세요..."
                    className="flex-grow text-sm border-none bg-transparent focus:ring-0 py-3"
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="p-2 bg-[#1A365D] text-white rounded-full hover:bg-[#2a4a7d] transition-colors disabled:opacity-50 disabled:grayscale"
                >
                    <Send size={18} />
                </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">AI 기술을 통해 생성된 정보입니다.</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#1A365D] text-white p-4 rounded-full shadow-2xl hover:shadow-[#1A365D]/40 hover:scale-110 transition-all duration-300 flex items-center space-x-3 group relative"
        >
          <div className="relative">
             <MessageSquare size={24} />
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C5A059] border-2 border-[#1A365D] rounded-full"></span>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap">
            전문가 AI 상담
          </span>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
