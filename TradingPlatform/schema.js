import { gql } from 'apollo-server'; // Import gql function for defining GraphQL schema
import stocksDatabase from './database.js'; // Import the mock database of stocks

// Define GraphQL schema using type definitions
const typeDefs = gql`
  type Stock {
    id: ID! # Unique identifier for the stock
    name: String! # Name of the company
    category: String! # Industry category
    price: Float! # Current price of the stock
    symbol: String! # Stock market symbol (e.g., 'AAPL')
    marketCap: Float! # Market capitalization (in dollars)
    volume: Int! # Trading volume
    change: Float! # Daily price change in percentage
  }

  type Query {
    stocks: [Stock!]! # Query to get an array of all stocks
    stock(id: ID!): Stock # Query to get a single stock by ID
  }

  type Mutation {
    addStock(
      name: String!,
      category: String!,
      price: Float!,
      symbol: String!,
      marketCap: Float!,
      volume: Int!,
      change: Float!
    ): Stock # Mutation to add a stock
    deleteStock(id: ID!): Stock # Mutation to delete a stock by ID
    updateStock(
      id: ID!,
      name: String,
      category: String,
      price: Float,
      symbol: String,
      marketCap: Float,
      volume: Int,
      change: Float
    ): Stock # Mutation to update a stock
  }
`;

// Define resolvers to implement the logic behind queries and mutations
const resolvers = {
  Query: {
    stocks: () => {
      return stocksDatabase; // Return the array of stocks from the mock database
    },
    stock: (parent, { id }) => {
      return stocksDatabase.find(stock => stock.id === id) || null; // Find and return the stock by ID or null if not found
    },
  },

  Mutation: {
    addStock: (parent, { name, category, price, symbol, marketCap, volume, change }) => {
      const newStock = { 
        id: Math.random().toString(), 
        name, 
        category, 
        price, 
        symbol, 
        marketCap, 
        volume, 
        change 
      }; // Create a new stock object with the provided values
      stocksDatabase.push(newStock); // Add the new stock to the database
      // No longer publishing to PubSub for subscriptions
      return newStock; // Return the newly added stock
    },

    deleteStock: (parent, { id }) => {
      const stockIndex = stocksDatabase.findIndex(stock => stock.id === id); // Find the stock by ID
      if (stockIndex === -1) return null; // If stock not found, return null
      const deletedStock = stocksDatabase.splice(stockIndex, 1)[0]; // Remove the stock from the database
      return deletedStock; // Return the removed stock
    },

    updateStock: (parent, { id, name, category, price, symbol, marketCap, volume, change }) => {
      const stock = stocksDatabase.find(stock => stock.id === id); // Find the stock to update by ID
      if (!stock) return null; // If stock not found, return null
      // Update stock properties only if provided
      if (name !== undefined) stock.name = name;
      if (category !== undefined) stock.category = category;
      if (price !== undefined) stock.price = price;
      if (symbol !== undefined) stock.symbol = symbol;
      if (marketCap !== undefined) stock.marketCap = marketCap;
      if (volume !== undefined) stock.volume = volume;
      if (change !== undefined) stock.change = change;
      // No longer publishing to PubSub for subscriptions
      return stock; // Return the updated stock
    },
  },
};

// Export typeDefs and resolvers for use in the index.js
export { typeDefs, resolvers };