// tests/global-teardown.js
// This function is run once after all tests.
async function globalTeardown(config) {
  console.log('🚀 Starting Playwright global teardown...');
  // You could clean up resources here, like closing a database connection.
  console.log('✅ Global teardown complete.');
}

export default globalTeardown;