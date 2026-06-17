import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappUrl(message: string) {
  return `https://wa.me/5511959031252?text=${encodeURIComponent(message)}`;
}
