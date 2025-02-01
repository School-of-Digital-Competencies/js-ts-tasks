type Unit = 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K';

export function converter(value: number | string, from: Unit, to: Unit): number {
  const numericValue = Number(value);
  if (isNaN(numericValue)) {
    throw new Error('Invalid value');
  }
  const conversionRates: { [key in Unit]?: { [key in Unit]?: number | ((v: number) => number) } } = {
    'm': { 'm': 1, 'mi': 0.000621371 },
    'mi': { 'mi': 1, 'm': 1609.34 },
    'gr': { 'gr': 1, 'pound': 0.00220462 },
    'pound': { 'pound': 1, 'gr': 453.592 },
    'C': { 'C': 1, 'K': (v: number) => v + 273.15 },
    'K': { 'K': 1, 'C': (v: number) => v - 273.15 },
  };

  if (!conversionRates[from] || !conversionRates[to]) {
    throw new Error('Unsupported unit');
  }

  let result: number;
  if (typeof conversionRates[from][to] === 'function') {
    result = (conversionRates[from][to] as (v: number) => number)(numericValue);
  } else {
    result = numericValue * (conversionRates[from][to] as number);
  }

  return parseFloat(result.toFixed(2));
}
