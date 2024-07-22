import {
  AccountDetailsResponse,
  CurrentPricesResponse,
  MetricsResponse,
  OpenPositionResponse,
} from "./types";

const API_URL = "http://13.41.72.245";

export async function fetchAccountDetails() {
  const res = await fetch(API_URL + "/account_details");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as AccountDetailsResponse;
}

export async function fetchCurrentPrices() {
  const res = await fetch(API_URL + "/current_prices");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as CurrentPricesResponse;
}

export async function fetchMetrics() {
  const res = await fetch(API_URL + "/fetch_metrics");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as MetricsResponse;
}

export async function getPositions() {
  const res = await fetch(API_URL + "/open_positions");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as OpenPositionResponse;
}
