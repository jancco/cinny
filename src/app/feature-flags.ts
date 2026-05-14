/**
 * Global feature flags for Cinny.
 * 
 * Toggle features here — all pages import from this single source.
 * Set to false to permanently hide the corresponding UI element.
 */

export const FEATURE_ENCRYPTION = false;         // E2E encryption toggle in CreateRoom
export const FEATURE_FEDERATION = false;          // Federation toggle in CreateRoom/CreateSpace
export const FEATURE_EXPLORE_COMMUNITY = false;   // Explore Community tab
export const FEATURE_DIRECT_MESSAGES = false;     // Direct Messages tab in sidebar
export const FEATURE_ROOM_ENCRYPTION = false;     // Room Encryption card in room settings
