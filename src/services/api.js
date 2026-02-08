/**
 * API Service Layer
 * 
 * Tries to fetch from the backend API first.
 * If the server is unavailable, falls back to mock data.
 * 
 * This allows development to continue even without the database connected.
 */

import { opportunities, getOpportunityById as getMockOpportunity, generatePathForUser as generateMockPath } from '../data/mockData';

const API_BASE = 'http://localhost:3001/api';

// Track if we've already failed to connect (avoid repeated attempts)
let useMockData = false;

/**
 * Helper to make API calls with fallback
 */
async function fetchWithFallback(endpoint, fallbackFn) {
    // If we already know the server is down, use mock directly
    if (useMockData) {
        console.log(`[API] Using mock data for ${endpoint}`);
        return fallbackFn();
    }

    try {
        const response = await fetch(`${API_BASE}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(`[API] Server unavailable, falling back to mock data:`, error.message);
        useMockData = true;
        return fallbackFn();
    }
}

/**
 * Get all opportunities
 * Used by: ExplorePage
 */
export async function getOpportunities() {
    return fetchWithFallback('/opportunities', () => opportunities);
}

/**
 * Get a single opportunity by ID
 * Used by: OpportunityPage
 */
export async function getOpportunityById(id) {
    return fetchWithFallback(`/opportunities/${id}`, () => getMockOpportunity(id));
}

/**
 * Generate a personalized path for the user
 * Used by: LoadingPage -> PathResultsPage
 */
export async function generatePath(userQuery) {
    if (useMockData) {
        console.log('[API] Using mock path generation');
        return generateMockPath(userQuery);
    }

    try {
        const response = await fetch(`${API_BASE}/generate-path`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: userQuery })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.warn('[API] Path generation failed, using mock:', error.message);
        useMockData = true;
        return generateMockPath(userQuery);
    }
}

/**
 * Create a new opportunity/listing.
 * Tries to post to the backend; if unavailable, falls back to pushing into mock data.
 */
export async function createListing(listing) {
    // Ensure the listing has an id (mock and frontend rely on string ids)
    if (!listing.id) listing.id = Date.now().toString();

    if (useMockData) {
        console.log('[API] Using mock data for createListing');
        opportunities.push(listing);
        return listing;
    }

    try {
        const response = await fetch(`${API_BASE}/opportunities`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listing)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.warn('[API] Create listing failed, falling back to mock:', error.message);
        useMockData = true;
        opportunities.push(listing);
        return listing;
    }
}

/**
 * Reset the mock data flag (useful for testing)
 */
export function resetApiConnection() {
    useMockData = false;
}

/**
 * Check if we're currently using mock data
 */
export function isUsingMockData() {
    return useMockData;
}
