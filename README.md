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
  - [x] identify at least one action per resource (`GET`, `POST`)
  - [ ] define fields of the resources that can be queried and fields that will be exposed
  - [ ] define the api syntax for each action on resources (including the http actions and the http error codes)
  - [x] decide upon the data format (xml/json/other): JSON
  - [ ] decide how the HATEOAS can be implemented in this API
  - [ ] define mockup api calls and responses
  - [ ] check if design guideliness were met

### start implementing :)
  - [x] create new model classes to fit the data from the new dataset (maybe not all fields from the db need to used in the model)
  - [x] try out GET, POST requests with the new data models on the new database `swshotels` (don't forget to change the db name in the `sever.js file`)
  - [ ] add paging for the get request (`/hotels`)
  - [ ] add navigation (HATEOS)
  - [ ] how to define facilities for hotel/room?
  - [ ] how to define availability for rooms?
  - other todos ...


 ### Error codes

 | HTTP Error Code | Description | HTTP Request Type|
 | :--- | :--- | :--- |
 |200| `OK`| GET|
 |201|`Created`| POST|
 |404| `Entity Not found`| GET|


  ### enpoints

  |  | HTTP Request type | Endpoint| Response  | Remarks|
  |---- | --- | :--- | :--- | --- |
  |<ul><li>[x] done</li> | GET | api/hotels | all hotels ||
  |<ul><li>[x] done</li>| GET | api/hotels/<name\> | one specific hotel| for hotels that have a space inside the name use %20 instead of the space, e.g. Ferienwohnungen%20Bernadette|
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/rooms | all rooms of the specific hotel||
  |<ul><li>[ ] done</li>| GET | api/hotels/<name\>/rooms/prices | all prices for rooms of a specific hotel||
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/images | all images of the hotel||
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/location | the postal address and the geo location of the hotel||
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/payments | the currencies and payment posibilities that the hotel offers||
  |<ul><li>[x] done</li>| GET | api/locations/<location\>/hotels | all hotels at the named location||
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
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Alpen%20Appartment%20Relax/location | the postal address and the geo location of the hotel||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/locations/Ramsau/hotels| the postal address and the geo location of the hotel||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Stab-Hütte/payments | the currencies and payment posibilities that the hotel offers| |
|TODO||add more||add more|
