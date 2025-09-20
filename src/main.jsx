import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://565a78466d04860e460e166e154c7c1b@o4509707665997824.ingest.de.sentry.io/4510052705763408",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/my-site\.com\//],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  sendDefaultPii: true,
});

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
