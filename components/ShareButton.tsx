"use client";

import { useState } from "react";
import { Link2, Check, Copy } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
        copied 
          ? "bg-green-50 border-green-200 text-green-700" 
          : "bg-white border-zinc-200 text-zinc-600 hover:border-primary hover:text-primary"
      }`}
    >
      {copied ? (
        <>
           <Check size={16} />
           <span className="text-xs font-bold uppercase tracking-wider">Copied</span>
        </>
      ) : (
        <>
           <Link2 size={16} />
           <span className="text-xs font-bold uppercase tracking-wider">Copy Link</span>
        </>
      )}
    </button>
  );
}
