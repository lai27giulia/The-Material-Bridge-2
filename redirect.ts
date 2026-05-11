import { LINKEDIN_PROFILE } from "@/lib/content";

/**
 * Ottiene l'URL del profilo LinkedIn
 * Se NEXT_PUBLIC_LINKEDIN_URL non è impostato, usa un valore di default
 */
export function getLinkedInURL(): string {
  return LINKEDIN_PROFILE;
}

/**
 * Apre il profilo LinkedIn in una nuova finestra
 * Usato dai CTA buttons
 */
export function openLinkedInProfile(newTab: boolean = true): void {
  if (typeof window === "undefined") return;

  const url = getLinkedInURL();
  if (newTab) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}

/**
 * Genera un messaggio pre-compilato per LinkedIn
 * Usato come fallback se il redirect fallisce
 */
export function getLinkedInMessage(): string {
  return encodeURIComponent(
    "Ciao Giulia, mi ha interessato il tuo portfolio. Vorrei discutere una possibile collaborazione."
  );
}

/**
 * URL per avviare una conversazione DM su LinkedIn
 */
export function getLinkedInMessageURL(): string {
  const profileURL = getLinkedInURL();
  const message = getLinkedInMessage();
  // LinkedIn non supporta il DM diretto via URL, quindi usiamo il profilo
  return profileURL;
}
