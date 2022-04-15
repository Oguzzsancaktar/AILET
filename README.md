# AILET

## Frontend

### Technologies

- React
- Redux Toolkit
- Antd (deleted)
- Craco (Webpack configuration)
- Styled Components

## Backend

### Structure

(Singelton Patern)
(Flow Control Pattern)

- <b style="color:purple">Route configuration</b> to define the requests our API can handle.
- <b style="color:purple">Services</b> for tasks such as connecting to our database models, doing queries, or connecting to external services that are required by the specific request
- <b style="color:purple">Middleware</b> for running specific request validations before the final controller of a route handles its specifics
  - <b style="color:purple">Models</b> for defining data models matching a given database schema, to facilitate data storage and retrieval
- <b style="color:purple">Controllers</b> for separating the route configuration from the code that finally (after any middleware) processes a route request, calls the above service functions if necessary, and gives a response to the client

- <b style="color:purple">Services</b> that make our code cleaner by encapsulating business logic operations into functions that middleware and controllers can call.
- <b style="color:purple">Middleware</b> that will validate prerequisite conditions before Express.js calls the appropriate controller function.
- <b style="color:purple">Controllers</b> that use services to process the request before finally sending a response to the requester.
- <b style="color:purple">Models</b> that describe our data and aid in compile-time checks.

- Data access objects (DAOs) is responsible for connecting to a defined database and performing CRUD operations
- Data transfer objects (DTOs)is an object that holds the raw data that the DAO will send to—and receive from—the database.

- Middleware => Contrtroller => Service => DAO

- <b style="color:purple">Mongoose</b> to allow us to work with MongoDB and replace our in-memory DAO with a real database.
- <b style="color:purple">Authentication</b> and permissions capabilities so API consumers can use a JSON Web Token (JWT) to access our endpoints securely.
- <b style="color:purple">Automated testing</b> using Mocha (a testing framework), Chai (an assertion library), and SuperTest (an HTTP abstraction module) to help check for regressions as the code base grows and changes.

#### Application

- http (Node.js-native module)
- body-parser is middleware that comes with Express.js. It parses the request (in our case, as JSON) before control goes to our own request handlers

### Technologies

- Express (server)
- Debug (logging)
- Winston (logging)
- Express-winston (logging)
- MongoDB (DB)
- CORS
- argon2 (password hashing)

### Dev Dependencies

- @types/cors
- @types/debug
- @types/express
- @types/node
- Concurrently
- Dotenv (environment variables)
- Nodemon (Hot reload)
- source-map-support
- tslint
- typescript

#### Testing

- chai
- mocha
- supertest
- @types/chai
- @types/express
- @types/mocha
- @types/supertest
- ts-node

## TO DO

- Authentication System
- DB connection With API
- API Client connection
- Page and Components design

## How To

### Authentication vs. Permissions (or “Authorization”) Flow

- Authentication is about who the request is from and authorization is about whether they are allowed to do what they’re requesting.

- We will use JSONWEBTOKEN
- The jsonwebtoken library will sign a new token with our jwtSecret. We’ll also generate a salt and a hash using the Node.js-native crypto module, then use them to create a refreshToken with which API consumers can refresh the current JWT—a setup that’s particularly good to have in place for an app to be able to scale.
- What’s the difference between refreshKey, refreshToken, and accessToken? The \*Tokens are sent to our API consumers with the idea being that the accessToken is used for any request beyond what’s available to the general public, and refreshToken is used to request a replacement for an expired accessToken. The refreshKey, on the other hand, is used to pass the salt variable—encrypted within the refreshToken—back to our refresh middleware.

- The validRefreshNeeded() function also verifies if the refresh token is correct for a specific user ID. If it is, then below we’ll reuse authController.createJWT to generate a new JWT for the user.
- We also have validJWTNeeded(), which validates whether the API consumer sent a valid JWT in the HTTP headers respecting the convention Authorization: Bearer <token>. (Yes, that’s another unfortunate “auth” conflation.)

## Learning Notes

- Object.freeze => use for defining constant object you cant change this object its immutable
- Width and padding overflows the content so use box-sizing border-box!!;
- Typesript abstraction (abstract function)
- express all() method allows us to generic middleware
- Partial (same as Pick) feature from TypeScript, which creates a new type by copying another type and making all its fields optional.
- Likewise, update will mean either overwriting the complete object (as a PUT) or just parts of the object (as a PATCH):
- The only configuration needed is to call the dotenv.config() function as soon as we launch our application. At the very top of app.ts, we’ll add:

- Bitwise AND (&)
- conver decimals to binary and look for same column convert new binary item to decimal

### Diffrence of Interfaces and Types

- Interfaces can include methods
- Interfaces
- Types defines like variables
- Types cant merge but interfaces can merge

### Mongoose Options

- useNewUrlParser: Without this set to true, Mongoose prints a deprecation warning.
- useUnifiedTopology: The Mongoose documentation recommends setting this to true to use a newer connection management engine.
- serverSelectionTimeoutMS: For the purpose of the UX of this demo project, a shorter time than the default of 30 seconds means that any readers who forget to start MongoDB before Node.js will see helpful feedback about it sooner, instead of an apparently unresponsive back end.
- useFindAndModify: Setting this to false also avoids a deprecation warning, but it’s mentioned in the deprecations section of the documentation, rather than among the Mongoose connection options. More specifically, this causes Mongoose to use a newer native MongoDB feature instead of an older Mongoose shim.

### Express - Validator

- It is simple validation
- Firstly we need to middleware, this middlaware takes the request and creates error array when you call the middleware you will see the error or trigger callback (next() )
