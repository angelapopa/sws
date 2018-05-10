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

## TODOs
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
  - [ ] create new model classes to fit the data from the new dataset (maybe not all fields from the db need to used in the model)
  - [ ] try out GET, POST requests with the new data models on the new database `swshotels` (don't forget to change the db name in the `sever.js file`)
  - [ ] add paging for the get request (`/hotels`)
  - other todos ...


  ### enpoints

  |  | HTTP Request type | Endpoint| Response  | Remarks|
  |---- | --- | :--- | :--- | --- |
  |<ul><li>[x] done</li> | GET | api/hotels | all hotels ||
  |<ul><li>[x] done</li>| GET | api/hotels/name | one specific hotel| for hotels that have a space inside the name use %20 instead of the space, e.g. Ferienwohnungen%20Bernadette|
  |<ul><li>[ ] done</li>| GET | api/hotels/name/rooms | all rooms of the specific hotel||
  |<ul><li>[x] done</li>| GET | api/hotels/name/images | all images of the hotel||
  |<ul><li>[ ] done</li>| GET | api/hotels/name/address | the address of the hotel||
  |<ul><li>[ ] done</li>| POST| api/hotels/TODO | create a new hotel||
  |TODO||add more||add more|


### test and improve

|  | HTTP Request type | Endpoint| Response  | Remarks|
| --- | --- | :--- | :--- | --- |
|<ul><li>[x] done</li> | GET |http://localhost:3000/api/hotels| all hotels |||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Heisenhaus |||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Ferienwohnungen%20Bernadette | Hotel name with space inside the name||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Haus%20Emilie%20&%20Apart%20Papilio%20im%20Naturpark | Hotel name with space and '&' inside the name|'&' is treated normal|
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Landhaus%20Anger/images |||
