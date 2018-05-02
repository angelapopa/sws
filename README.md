# sws
PS Semantic Web Services

Authors: Zahra Jafari and Angela Popa

Team: 6

Topic: Hotel Booking API

### immediate todos

  - [x] find test data

      * http://tour-pedia.org/about/datasets.html

      * https://old.datahub.io/dataset/wikivoyage-listings-as-csv/resource/15f9e529-22e3-4862-9a0a-ff77692c789d

  - [x] install needed tools (see `Preperation` section)

  - [x] browser plugins or SOAP UI or Postman in order to test the REST API

  - [x] set up a local http server

  - [x] set up a database
  - [ ] prepare and import test data into the database

  - [x] implement a minimal prototype to check if all systems work properly together

  - [x] document the above steps

### design the REST API
  - [ ] identify 10 resources
  - [ ] identify at least one action per resource
  - [ ] define fields of the resources that can be queried and fields that will be exposed
  - [ ] define the api syntax for each action on resources (including the http actions and the http error codes)
  - [x] decide upon the data format (xml/json/other): JSON
  - [ ] decide how the HATEOAS can be implemented in this API
  - [ ] define mockup api calls and responses
  - [ ] check if design guideliness were met

### Environment Setup

Preparation:
* install an IDE, e.g. VS Code https://code.visualstudio.com/
* install Postman https://www.getpostman.com/apps

  ** test if postman works by creating a GET request to https://api.github.com/

* install Node.js, the LTS version, https://nodejs.org/en/
 if you don't have node installed already

  ** `npm init` (to generate a package.json) - needed only at project initialisation

  ** `npm install express` - needed only at project initialisation

* install `MongoDB` Community Edition https://www.mongodb.com/
* start mongodb `"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath "\your\path\to\db\data"`. For Unix Systems `sudo service mongod start` (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

* (optional) install mongoose library to help model the db entries
 `npm mongoose`

* install Robo 3T https://robomongo.org/ and follow the setup instructions on the online site (incl. creating a new folder on disk for db data).

* create or import a database schema and configure it's name in `index.js`

* install nodemon (`npm install --save nodemon`), this will update the js files on the servers on change

* install babel (`npm install --save-dev babel-preset-env`). Create a `.babelrc` file with following content `"presets" : ["env"]`.

* install `npm install --save body-parser`

### Project setup:

  * the project folder is `node-hotel-booking`
  * run `npm install` in a terminal window at `/sws/node-hotel-booking/` location every time the package.json changes
  * `npm start` - to start the node server
  * if `nodemon` was configured in the main js file, then no restart of the server is needed after a code change
  * for `POST` requests in Postman, don't forget to select `x-www-form-urlencoded` in the `Body` tab.

### start implementing :)

### implement, test and improve
