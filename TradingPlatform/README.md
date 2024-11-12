#### Instructions

# Create the Project Folder and Initialize the Project

mkdir -p /Your/Path/Folder/Name/

cd /Your/Path/Folder/Name/

# Initialize the Project and Install Dependencies

npm init -y  # Initializes a new Node.js project
npm install apollo-server graphql uuid --save  # Installs Apollo Server, uuid and GraphQL

Validates 

npm list 

# Create the Required Files

touch index.js schema.js database.js


# Run the Project

cd /Your/Path/Folder/Name/

node index.js

Once the server is running, you should see output indicating the server is ready, similar to:

🚀 Server ready at http://localhost:4000/

