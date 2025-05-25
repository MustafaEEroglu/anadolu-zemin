"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/905312151617"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:bg-[#128C7E] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:bg-[#128C7E] dark:hover:bg-[#075E54] dark:focus:ring-[#128C7E]"
        aria-label="WhatsApp ile iletişim"
      >
        <FaWhatsapp className="h-8 w-8" />
      </Link>
    </div>
  );
};

export default WhatsAppFloat;