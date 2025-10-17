import React from 'react';
import { useGetMarketsQuery } from '../../services/reutersApi';

const MarketsPage: React.FC = () => {
  const { data: markets, isLoading, error } = useGetMarketsQuery();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-reuters-red p-4">Error loading market data.</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-serif font-bold mb-12 tracking-tight text-reuters-black relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-24 after:h-1 after:bg-reuters-blue">Markets</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-reuters-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-serif font-bold mb-6 tracking-tight text-reuters-black relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-reuters-blue">Stock Indices</h2>
          <div className="space-y-4">
            {markets?.indices?.map((index: any) => (
              <div key={index.symbol} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{index.name}</h3>
                  <p className="text-sm text-reuters-gray-400">{index.symbol}</p>
                </div>
                <div className={`text-right ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="font-mono">{index.price.toFixed(2)}</div>
                  <div className="text-sm">
                    {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-reuters-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-serif font-bold mb-6 tracking-tight text-reuters-black relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-reuters-blue">Commodities</h2>
          <div className="space-y-4">
            {markets?.commodities?.map((commodity: any) => (
              <div key={commodity.symbol} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{commodity.name}</h3>
                  <p className="text-sm text-reuters-gray-400">{commodity.symbol}</p>
                </div>
                <div className={`text-right ${commodity.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="font-mono">{commodity.price.toFixed(2)}</div>
                  <div className="text-sm">
                    {commodity.change >= 0 ? '+' : ''}{commodity.change.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MarketsPage;