import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0800ba6eb7da45442ca1c97623c8a335@o4507344129228800.ingest.us.sentry.io/4507344134209536",

  // We recommend adjusting this value in production, or using `tracesSampler`
  // for finer control
  tracesSampleRate: 1.0,
});
