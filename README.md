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
  .

## TO DO

- Authentication System
- DB connection With API
- API Client connection
- Page and Components design

## Learning Notes

- Object.freeze => use for defining constant object you cant change this object its immutable
- Width and padding overflows the content so use box-sizing border-box!!;
- Typesript abstraction (abstract function)
- express all() method allows us to generic middleware
- Partial (same as Pick) feature from TypeScript, which creates a new type by copying another type and making all its fields optional.
- Likewise, update will mean either overwriting the complete object (as a PUT) or just parts of the object (as a PATCH):

### Diffrence of Interfaces and Types

- Interfaces can include methods
- Interfaces
- Types defines like variables
- Types cant merge but interfaces can merge
