server - This is your backend server/project folder and will hold all server-related files
config - will handle the database configuration and connection
mongoose.config.js - inside the config folder, will connect us to Atlas
controllers - will hold all logic for each model (i.e creating, updating, etc...)
models - will hold all the schemas
node_modules - will hold everything we installed through npm
routes - will handle all of our routes for each model
.env - will store our secret keys
package.json - will store our metadata and dependencies
package.lock.json - will store further information for the package install order
server.js - will handle all the server logic with express