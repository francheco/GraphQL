#### Instructions

# Create the Project Folder and Initialize the Project

mkdir -p /Your/Path/Folder/Name/

cd /Your/Path/Folder/Name/

# Initialize the Project and Install Dependencies

npm init -y  # Initializes a new Node.js project

npm install apollo-server graphql uuid --save  # Installs Apollo Server, GraphQL,  and uuid 


Apollo Server: For building GraphQL APIs.

ESLint: For enforcing coding standards and detecting issues in JavaScript code.

GraphQL: The core library for working with GraphQL schemas and queries.

Nodemon: For automatically restarting your server during development.

UUID: For generating unique identifiers for your data models.


Validates 

npm list 

# Create the Required Files

touch index.js schema.js database.js


# Run the Project

cd /Your/Path/Folder/Name/

node index.js

or 

npm start

Once the server is running, you should see output indicating the server is ready, similar to:

🚀 Server ready at http://localhost:4000/

# Testing

Query

<img width="1192" alt="image" src="https://github.com/user-attachments/assets/42d55d72-0a91-4846-ba7a-6dbd581e6bd0">

Single Query

<img width="1193" alt="image" src="https://github.com/user-attachments/assets/fb7d7f40-f6c3-4e19-9a6e-21c2bdca5827">



Mutation


<img width="1195" alt="image" src="https://github.com/user-attachments/assets/f62a478e-d12c-4d7c-b40f-2454ccb5eb9e">





