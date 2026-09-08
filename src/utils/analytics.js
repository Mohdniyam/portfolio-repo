const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

export function preserveCampaignParams(search = window.location.search) {
  const params = new URLSearchParams(search);
  const captured = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) captured[key] = value;
  });
  if (Object.keys(captured).length) sessionStorage.setItem("campaign_params", JSON.stringify(captured));
  return getCampaignParams();
}

export function getCampaignParams() {
  try { return JSON.parse(sessionStorage.getItem("campaign_params") || "{}"); }
  catch { return {}; }
}

export function trackEvent(name, details = {}) {
  const payload = { event: name, ...details, ...getCampaignParams() };
  window.dispatchEvent(new CustomEvent("portfolio:analytics", { detail: payload }));
  if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
}
