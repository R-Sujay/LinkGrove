import { api } from "@/convex/_generated/api";
import { getClient } from "@/convex/client";
import { ClientTrackingData, ServerTrackingEvent } from "@/lib/types";
import { geolocation } from "@vercel/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data: ClientTrackingData = await request.json();

    const geo = geolocation(request);

    const convex = getClient();

    const userId = await convex.query(api.lib.usernames.getUserIdBySlug, {
      slug: data.profileUsername,
    });

    if (!userId) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const trackingEvent: ServerTrackingEvent = {
      ...data,
      profileUserId: userId,
      location: { ...geo },
      timestamp: new Date().toISOString(),
      userAgent:
        data.userAgent || request.headers.get("user-agent") || "unknown",
    };

    console.log("Tracking event:", trackingEvent);

    if (process.env.TINYBIRD_TOKEN && process.env.TINYBIRD_HOST) {
      try {
        const eventsForTinybird = {
          ...trackingEvent,
          timestamp: trackingEvent.timestamp,
          profile_username: trackingEvent.profileUsername,
          profile_user_id: trackingEvent.profileUserId,
          link_id: trackingEvent.linkId,
          link_title: trackingEvent.linkTitle,
          link_url: trackingEvent.linkUrl,
          user_agent: trackingEvent.userAgent,
          referrer: trackingEvent.referrer,
          location: {
            country: trackingEvent.location.country || "",
            region: trackingEvent.location.region || "",
            city: trackingEvent.location.city || "",
            latitude: trackingEvent.location.latitude || "",
            longitude: trackingEvent.location.longitude || "",
          },
        };

        console.log("Sending to Tinybird:", eventsForTinybird);

        const tinybirdResponse = await fetch(
          `${process.env.TINYBIRD_HOST}/v0/events?name=link_clicks`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.TINYBIRD_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(eventsForTinybird),
          },
        );

        if (!tinybirdResponse.ok) {
          const errorText = await tinybirdResponse.text();
          console.error("Failed to send to Tinybird:", errorText);
        } else {
          const responseBody = await tinybirdResponse.json();
          console.log("Successfully sent to Tinybird:", responseBody);
          if (responseBody.quarantined_rows > 0) {
            console.warn("Some rows were quarantined:", responseBody);
          }
        }
      } catch (error) {
        console.error("Error sending to Tinybird:", error);
      }
    } else {
      console.log("Tinybird not configured, skipping send.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in track-click API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
