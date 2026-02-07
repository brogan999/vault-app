/**
 * Pearson correlation between two arrays. Returns NaN if insufficient data or zero variance.
 */
export function pearsonCorrelation(x: number[], y: number[]): number {
  const n = Math.min(x.length, y.length);
  if (n < 2) return NaN;
  const xSlice = x.slice(0, n);
  const ySlice = y.slice(0, n);
  const sumX = xSlice.reduce((a, b) => a + b, 0);
  const sumY = ySlice.reduce((a, b) => a + b, 0);
  const meanX = sumX / n;
  const meanY = sumY / n;
  let num = 0;
  let denX = 0;
  let denY = 0;
  for (let i = 0; i < n; i++) {
    const dx = (xSlice[i] ?? 0) - meanX;
    const dy = (ySlice[i] ?? 0) - meanY;
    num += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  }
  if (denX === 0 || denY === 0) return NaN;
  const r = num / Math.sqrt(denX * denY);
  return Math.round(r * 1000) / 1000;
}
