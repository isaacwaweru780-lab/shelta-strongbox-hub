import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/company";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl("Hello Shelta Packaging, I'd like more information.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
