import {
  AccountDetailsResponse,
  CurrentPricesResponse,
  MetricsResponse,
  OpenPositionResponse,
} from "./types";

export async function fetchAccountDetails() {
  const res = await fetch("http://13.41.72.245/account_details");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as AccountDetailsResponse;
}

export async function fetchCurrentPrices() {
  const res = await fetch("http://13.41.72.245/current_prices");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as CurrentPricesResponse;
}

export async function fetchMetrics() {
  const res = await fetch("http://13.41.72.245/fetch_metrics");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as MetricsResponse;
}

export async function getPositions() {
  const res = await fetch("http://13.41.72.245/open_positions");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as OpenPositionResponse;
}
