# Specification

## Summary
**Goal:** Make WhatsApp booking CTAs open a configured WhatsApp chat to 9226121208 and add a clickable call phone number in the Contact section.

**Planned changes:**
- Update the site-wide WhatsApp configuration to use target number `919226121208` so all existing WhatsApp CTAs open a `wa.me` link in a new tab without showing any “not configured” alert.
- Add the phone number `9226121208` to the Contact section as English UI text and make it a clickable `tel:` link (`tel:+919226121208`) for calling on supported devices.

**User-visible outcome:** Visitors can click existing WhatsApp buttons (e.g., in Hero and Contact) to chat/book on WhatsApp with 9226121208, and can click the phone number in the Contact section to place a call.
