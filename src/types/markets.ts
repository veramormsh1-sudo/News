export interface MarketIndex {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export interface Commodity {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export interface MarketsData {
  indices: MarketIndex[];
  commodities: Commodity[];
}

// Re-export for convenience
export type * from './markets';