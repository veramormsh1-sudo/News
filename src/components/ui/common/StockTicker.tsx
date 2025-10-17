import React, { useState, useEffect } from 'react';

interface StockTickerItemProps {
  symbol: string;
  value: number;
  change: number;
}

const StockTickerItem: React.FC<StockTickerItemProps> = ({ symbol, value, change }) => {
  const isPositive = change >= 0;
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-3 h-3 flex items-center ${isPositive ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
        <svg fill="currentColor" viewBox="0 0 12 12" className="w-3 h-3">
          <path d={isPositive ? "M6 2l4 4H8v4H4V6H0z" : "M6 10L2 6h2V2h4v4h2z"} />
        </svg>
      </div>
      <span className="font-medium text-sm text-gray-900">{symbol}</span>
      <span className="text-sm text-gray-700">{value.toLocaleString()}</span>
      <span
        className={`text-sm ${
          isPositive ? 'text-[#16A34A]' : 'text-[#DC2626]'
        }`}
      >
        {isPositive ? '+' : ''}{change.toFixed(2)}%
      </span>
    </div>
  );
};

const generateRandomStockData = () => [
  { 
    symbol: 'SPX', 
    value: 6666.60 + (Math.random() - 0.5) * 200, 
    change: (Math.random() - 0.5) * 4 
  },
  { 
    symbol: 'IXIC', 
    value: 22643.03 + (Math.random() - 0.5) * 1000, 
    change: (Math.random() - 0.5) * 3 
  },
  { 
    symbol: 'DJI', 
    value: 46343.37 + (Math.random() - 0.5) * 800, 
    change: (Math.random() - 0.5) * 2.5 
  },
  { 
    symbol: 'STOXX', 
    value: 568.46 + (Math.random() - 0.5) * 50, 
    change: (Math.random() - 0.5) * 3 
  },
  { 
    symbol: 'FTSE', 
    value: 9424.75 + (Math.random() - 0.5) * 300, 
    change: (Math.random() - 0.5) * 2 
  },
];

const StockTicker: React.FC = () => {
  const [stockData, setStockData] = useState(generateRandomStockData);

  useEffect(() => {
    const interval = setInterval(() => {
      setStockData(generateRandomStockData());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white border-b border-[#E5E7EB]">
      <div className="w-full px-24 sm:px-28 lg:px-32">
        <div className="flex items-center space-x-6 h-8 text-[#121212]">
          {stockData.map((stock) => (
            <StockTickerItem
              key={stock.symbol}
              symbol={stock.symbol}
              value={stock.value}
              change={stock.change}
            />
          ))}
          <a 
            href="https://www.lseg.com/en/data-analytics" 
            className="flex items-center text-sm text-blue-600 hover:underline cursor-pointer whitespace-nowrap ml-auto transition-colors"
          >
            <span className="mr-2">▶</span>
            <span>Get real-time market data from LSEG</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StockTicker;