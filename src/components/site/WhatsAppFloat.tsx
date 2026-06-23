import { MessageCircle } from "lucide-react";
import { whatsappUrl, DEFAULT_WA_MESSAGE } from "./config";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
