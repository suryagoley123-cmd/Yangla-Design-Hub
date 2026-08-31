import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '9779843736995',
  message = 'Hello Yangla Design & Printing Hub, I would like to inquire about printing services and quotation.'
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us +977 9843736995"
        id="floating-whatsapp-btn"
        className="bg-[#751c8d] hover:bg-[#621478] text-white px-4 py-3 rounded-none shadow-2xl flex items-center gap-2.5 transition-all duration-200 hover:scale-105 active:scale-95 border border-purple-400/30 select-none"
        style={{
          boxShadow: '0 8px 24px rgba(117, 28, 141, 0.45)'
        }}
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current stroke-2 shrink-0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Uppercase Text */}
        <span className="text-xs font-black tracking-wider uppercase font-sans whitespace-nowrap">
          WHATSAPP US
        </span>
      </a>
    </div>
  );
};
