export function trackEvent(name: string, payload: Record<string, string>): void {
  if (process.env.FOF_ANALYTICS_OPT_IN !== "true") {
    return;
  }

  console.log("analytics-event", JSON.stringify({ name, payload }));
}
