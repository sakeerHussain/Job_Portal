import * as Sentry from '@sentry/node'
import { init } from "@sentry/node";

import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Ensure to call this before requiring any other modules!
init({
  dsn: "https://e0234b528fc5a90846f2597835beaae6@o4508749337460736.ingest.de.sentry.io/4508749341851728",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration(),
  ],

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  // tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
