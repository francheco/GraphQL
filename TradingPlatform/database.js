

// Creating a mock database for stocks
const stocksDatabase = [
    {
      id: '1',
      name: 'Apple Inc.',
      category: 'Technology',
      price: 150.0,
      symbol: 'AAPL', // Stock market symbol for Apple
      marketCap: 2500e12, // Market capitalization (in dollars)
      volume: 100000000, // Trading volume
      change: 1.25, // Daily price change in percentage
    },
    {
      id: '2',
      name: 'Amazon.com Inc.',
      category: 'Retail',
      price: 100.0,
      symbol: 'AMZN',
      marketCap: 1600e12,
      volume: 30000000,
      change: -0.65,
    },
    {
      id: '3',
      name: 'Alphabet Inc.',
      category: 'Technology',
      price: 2800.0,
      symbol: 'GOOGL',
      marketCap: 1800e12,
      volume: 1500000,
      change: 0.45,
    },
    {
      id: '4',
      name: 'Microsoft Corporation',
      category: 'Technology',
      price: 300.0,
      symbol: 'MSFT',
      marketCap: 2200e12,
      volume: 50000000,
      change: 0.80,
    },
    {
      id: '5',
      name: 'Tesla Inc.',
      category: 'Automotive',
      price: 800.0,
      symbol: 'TSLA',
      marketCap: 900e12,
      volume: 35000000,
      change: 2.10,
    },
    {
      id: '6',
      name: 'Meta Platforms Inc.',
      category: 'Technology',
      price: 350.0,
      symbol: 'FB',
      marketCap: 900e12,
      volume: 25000000,
      change: -1.15,
    },
    {
      id: '7',
      name: 'Walmart Inc.',
      category: 'Retail',
      price: 140.0,
      symbol: 'WMT',
      marketCap: 400e12,
      volume: 50000000,
      change: 0.25,
    },
    {
      id: '8',
      name: 'Costco Wholesale Corporation',
      category: 'Retail',
      price: 410.0,
      symbol: 'COST',
      marketCap: 2000e12,
      volume: 20000000,
      change: -0.50,
    },
    {
      id: '9',
      name: 'Prologis Inc.',
      category: 'Real Estate',
      price: 120.0,
      symbol: 'PLD',
      marketCap: 600e12,
      volume: 1700000,
      change: 0.90,
    },
    {
      id: '10',
      name: 'UnitedHealth Group Incorporated',
      category: 'Health',
      price: 450.0,
      symbol: 'UNH',
      marketCap: 450e12,
      volume: 12000000,
      change: 1.50,
    },
  ];
  
  // Export the mock database array for use in other files
  export default stocksDatabase;