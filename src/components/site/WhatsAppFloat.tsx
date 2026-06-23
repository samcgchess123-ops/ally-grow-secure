import { MessageCircle } from "lucide-react";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/JJX7GBLVS7EBl7tPt7jPDx?mode=gi_t";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
