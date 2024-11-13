// Import necessary modules from Apollo Server
import { ApolloServer } from 'apollo-server'; // ApolloServer for creating a GraphQL server
import { typeDefs, resolvers } from './schema.js'; // Import type definitions and resolvers from schema.js

// Create an instance of ApolloServer with type definitions and resolvers
const server = new ApolloServer({
  typeDefs, // Set the GraphQL schema specifications
  resolvers, // Set the resolver functions for fields in our schema
  context: ({ req }) => {
    // Provide context data to resolvers, such as authentication details
    return { user: req.user }; // This can be modified based on your authentication requirements
  },
});

// Define the server port
const PORT = process.env.PORT || 4000;

// Start the ApolloServer and listen on the specified port
server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`); // Log the server's URL
});