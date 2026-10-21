export interface ViolationLike {
  id: string;
  impact?: string | null;
}

const BLOCKING_IMPACTS: ReadonlySet<string> = new Set(['serious', 'critical']);

/**
 * Returns only violations with "serious" or "critical" impact, preserving order.
 * A missing or null impact is not blocking.
 */
export function blockingViolations<T extends ViolationLike>(results: {
  violations: readonly T[];
}): T[] {
  return results.violations.filter((v) => v.impact != null && BLOCKING_IMPACTS.has(v.impact));
}