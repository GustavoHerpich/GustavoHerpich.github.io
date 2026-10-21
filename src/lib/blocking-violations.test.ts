import { describe, it, expect } from 'vitest';
import { blockingViolations } from './blocking-violations';

describe('Blocking violation found', () => {
  it('returns empty array for empty violations list', () => {
    const result = blockingViolations({ violations: [] });
    expect(result).toHaveLength(0);
  });

  it('excludes minor and moderate violations', () => {
    const result = blockingViolations({
      violations: [
        { id: 'v1', impact: 'minor' },
        { id: 'v2', impact: 'moderate' },
      ],
    });
    expect(result).toHaveLength(0);
  });

  it('includes one serious violation', () => {
    const result = blockingViolations({
      violations: [
        { id: 'v1', impact: 'serious' },
      ],
    });
    expect(result).toHaveLength(1);
    expect(result[0]?.impact).toBe('serious');
  });

  it('includes one critical violation', () => {
    const result = blockingViolations({
      violations: [
        { id: 'v1', impact: 'critical' },
      ],
    });
    expect(result).toHaveLength(1);
    expect(result[0]?.impact).toBe('critical');
  });

  it('preserves order in mixed list', () => {
    const result = blockingViolations({
      violations: [
        { id: 'v1', impact: 'minor' },
        { id: 'v2', impact: 'serious' },
        { id: 'v3', impact: 'moderate' },
        { id: 'v4', impact: 'critical' },
      ],
    });
    expect(result).toHaveLength(2);
    expect(result[0]?.id).toBe('v2');
    expect(result[1]?.id).toBe('v4');
  });

  it('excludes violations with null impact', () => {
    const result = blockingViolations({
      violations: [
        { id: 'v1', impact: null },
      ],
    });
    expect(result).toHaveLength(0);
  });

  it('excludes violations with undefined impact', () => {
    const result = blockingViolations({
      violations: [
        { id: 'v1', impact: undefined },
      ],
    });
    expect(result).toHaveLength(0);
  });
});