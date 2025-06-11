import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  usernames: defineTable({
    userId: v.string(), // clerk user ID
    username: v.string(), // custom username (unique)
  })
    .index("by_user_id", ["userId"])
    .index("by_username", ["username"]),

  links: defineTable({
    userId: v.string(),
    title: v.string(),
    url: v.string(),
    order: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_and_order", ["userId", "order"]),

  userCustomizations: defineTable({
    userId: v.string(), // clerk user ID
    profilePictureStorageId: v.optional(v.id("_storage")), // Convex storage ID for profile picture
    description: v.optional(v.string()), // URL for the profile picture
    accentColor: v.optional(v.string()), // Hex color code for accent color
  }).index("by_user_id", ["userId"]),
});
