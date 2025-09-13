// tests/global-setup.js
// This function is run once before all tests.
async function globalSetup(config) {
  console.log('🚀 Starting Playwright global setup...');
  // You could set up a database, log in a user, or set environment variables here.
  // For example:
  // process.env.START_TIME = new Date().toISOString();
  console.log('✅ Global setup complete.');
}

export default globalSetup;