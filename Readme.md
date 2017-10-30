# NERP Single page Application Template

## What is this?
Template to get started on a NERP stack Single Page Application (PostgreSQL, Express, React.js, Node.js)

### Technology Used
- [PG-Promise](https://github.com/vitaly-t/pg-promise)
  * To connect our PostgresSQL database
- [Express.js](https://expressjs.com/)
  * Framework used for our API server
- [React.js](https://facebook.github.io/react/)
  * Client side library for our view layer
- [React-Router](https://reacttraining.com/react-router/)
  * Client side routing for our React client
- [WebpackV3](http://webpack.github.io/docs/)
  * Application bundler used for our React client

## Getting Started
**Install Node Modules with**
```
$ npm install
```

**Run Webpack build and tell webpack to continue to watch for changes**
```
$ npm run watch
```
-  The `watch` script is used for development. It "watches" the `src/` directory
for any changes and rebuilds the React Client.

**Open another terminal window and start your server**
```
$ npm start
```

## What's in the box?

### Configuration Files
  - `webpack.config.js` - A Webpack configuration for bundling our client application
  - `.babelrc` - Babel configuration file

### Back End (API)
  - `server.js` - Express server entry point
  - `routes/` - Empty directory to store all of your server's API routes
  - `models/` - Empty directory to store all of your models
  - `db/` - Our database directory containing:
      * `db.js`
        - This is the database connection module that will use our Postgres
        `ENV` variables stored in our `.env` file
      * `schema.sql`
        - Empty SQL file that can be used to setup and edit your applications
        relations
        - You can run this file in your CLI using `psql -d <your_databaase> -f db/schema.sql`
      * `seeds.sql`
        - Empty SQL file that can used to seed your database
        - You can run this file in your CLI using `psql -d <your_databaase> -f db/seeds.sql`

### Front End (React Client)
  - `src/` - Contains all of our React client's files
    * `index.js` - The client application's entry point as defined in our webpack config
    * `components/` - Directory to store all of our React components
      - `App.jsx` - Our React application container component
      - `App.css` - Basic styling for the `Hello World` application (check out the demo link of how to use css modules in the **Technology Used** section above)
      - `normalize.css` - (Necolas's)[https://necolas.github.io/normalize.css/] CSS normalize
