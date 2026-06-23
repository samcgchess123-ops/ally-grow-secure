// Central contact + lead config for G3STION SAS
export const WHATSAPP_NUMBER = "573216989013";
export const EMAIL = "info@g3stion.com";
export const PHONE_DISPLAY = "+57 321 698 9013";
export const INSTAGRAM = "g3stionsas";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hola G3STION SAS, quiero agendar mi diagnóstico gratuito para mi empresa.";
