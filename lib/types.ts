import { Geo } from "@vercel/functions";

// Client-side data that gets sent from the browser
export interface ClientTrackingData {
  profileUsername: string;
  linkId: string;
  linkTitle: string;
  linkUrl: string;
  userAgent?: string;
  referrer?: string;
}

export interface ServerTrackingEvent extends ClientTrackingData {
  profileUserId: string;
  location: Geo;
  timestamp: string;
}
