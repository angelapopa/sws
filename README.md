# sws
PS Semantic Web Services

Authors: Zahra Jafari and Angela Popa

Team: 6

Topic: Hotel Booking API

### Project setup:

  * the project folder is `node-hotel-booking`
  * run `npm install` in a terminal window at `/sws/node-hotel-booking/` location every time the package.json changes
  * `npm start` - to start the node server
  * if `nodemon` was configured in the main js file, then no restart of the server is needed after each code change
  * for `POST` requests in Postman, don't forget to select `x-www-form-urlencoded` in the `Body` tab.

### immediate todos

  - [x] find test data

      * http://tour-pedia.org/about/datasets.html    - has no room information

      * https://old.datahub.io/dataset/wikivoyage-listings-as-csv/resource/15f9e529-22e3-4862-9a0a-ff77692c789d

      * we stick to the semantify data from Masterseminar, we dropped the annotations, and kept all data fields the same as teh semantify data

  - [x] install needed tools  (see `\notes\environment_setup.md` the `Preperation` section)

  - [x] browser plugins or SOAP UI or Postman in order to test the REST API

  - [x] set up a local http server

  - [x] set up a database

  - [x] prepare and import test data into the database (see `\notes\environment_setup.md` the `Preperation` section)

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

### start implementing :)
  - [ ] create new model classes to fit the data from the new dataset
  - [ ] try out GET, POST requests with the new data models on the new database `swshotels` (don't forget to change the db name in the `sever.js file`)
  - other todos ...

### implement, test and improve
