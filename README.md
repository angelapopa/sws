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
  - [x] identify 10 resources (hotels, rooms, location, images, contact, prices, payments, bookings, facilities, users)
  - [x] identify at least one action per resource (`GET`, `POST`, `PUT`)
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
  - [x] how to define facilities for hotel/room? There is no data in the dataset regarding facilities, so we create an endpoint and add facilities exclusively through the api
  - [x] how to define availability for rooms? Currently the db has the schema.org value InStock for all entries. So we ignore this field for now. We should handle availability/booking differently somehow. Ideea: to create an own endpoint for bookings (fields: `from`, `to`, `firstname` and `lastname` of the guest, `numberOfRooms` which the guest booked).
  - [x] how to implement booking of rooms????????? since the assignment is called "Hotel Booking API"!!! See the line above, by creating an own endpoint. Availability and bookings are merged together into one endpoint called 'booking'. The booked periods (`from`,`to`) mark the periods where the rooms are booked and where they are not available for new bookings. There is no check made for colliding booking periods. This is a nice to have feature for the future :)


 ### Error codes

 | HTTP Error Code | Description | HTTP Request Type|
 | :--- | :--- | :--- |
 |200| `OK`| GET|
 |201|`Created`| POST|
 |404| `Entity Not found`| GET|

 ### ASCII encoding

 | Replace value in path | with encoding | Example
 | :--- | :--- | :--- |
 | space|%20|'Landhaus Anger' /api/hotels/Landhaus%20Anger/images|
 | / | %2F|'Appartment/Fewo' /api/hotels/Tuxerhof/rooms/Appartement%2FFewo/prices|
 | | | |


  ### Enpoints/Resources

  |  | HTTP Request type | Endpoint| Resulting HTTP Code| Resulting action  |
  |--- | --- | :--- | :--- | --- |
  |<ul><li>[x] done</li> | GET | api/hotels | `200 OK` | lists all hotels |
  |<ul><li>[ ] TODO</li> | POST | api/hotels | `201 Created` or <TODO\> code in case of error| adds a new hotel |
  |<ul><li>[ ] TODO</li> | PUT | api/hotels | `200 OK` or `500` in case of error| updates an existing hotel data |
  |<ul><li>[x] done</li>| GET | api/hotels/<name\> | `200 OK` or `404 Not Found` | returns one hotel|
  |<ul><li>[ ] TODO</li> | DELETE | api/hotels/<name\> | `201 Created` or `404 Not Found` |deletes the hotel |
  |<ul><li>[ ] TODO</li>| GET | api/hotels/<name\>/<contact\> | `200 OK` or `404 Not Found` | returns the contact data of a hotel|
  |<ul><li>[ ] TODO</li> | POST | api/hotels/<name\>/<contact\> | `201 Created` or `404 Not Found` |adds contact for a hotel |
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/rooms |`200 OK` or `404 Not Found`| all rooms of the specific hotel, or error in case the hotel is not found|
  |<ul><li>[ ] TODO</li>| POST | api/hotels/<name\>/rooms | `201 Created` or <TODO\> code in case of error| adds a new room|
  |<ul><li>[ ] TODO</li>| DELETE | api/hotels/<name\>/rooms/<room_name\> | TODO | delete one room|
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/rooms/<room_name\>/prices | `200` or `404`| all prices for rooms of a specific hotel|
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/images | `200` or `404`| all images of the hotel|
  |<ul><li>[x] done</li>| POST | api/hotels/<name\>/images | `201 Created` or `404 Not Found`| adds one image|
  |<ul><li>[x] done</li>| DELETE | api/hotels/<name\>/images/<url\> | TODO| deletes one image|
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/location | `200 OK` or `404 Not Found`| the postal address and the geo location of the hotel|
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/payments | `200 OK` or `404 Not Found`| the currencies and payment posibilities that the hotel offers|
  |<ul><li>[ ] TODO</li>| GET | api/hotel/<name\>/facilities | `200 OK` or `404 Not Found`|all facilities or emtpy list or error in case the hotel name is not found|
  |<ul><li>[ ] TODO</li>| POST | api/hotel/<name\>/facilities | `201 Created` or `404 Not Found`| new facility|
  |<ul><li>[ ] TODO</li>| DELETE | api/hotel/<name\>/facilities/<name\> | TODO| deletes one facility|
  |<ul><li>[x] done</li>| GET | api/locations/<location\>/hotels | `200` or `404`| all hotels at the named location|
  |<ul><li>[ ] TODO</li>| GET | api/users | `200` or `404`| all users|
  |<ul><li>[ ] TODO</li>| POST | api/users | `201 Created` or <TODO\> code in case of error|adds a new user|
  |<ul><li>[x] done</li>| GET | api/hotels/<name\>/rooms/<room_name\>/bookings |lists the hotel room bookings | |
  |<ul><li>[x] done</li>| POST | api/hotels/<name\>/rooms/<room_name\>/bookings | adds a new booking| POST request body fields: `from`, `to`, `firstname`, `lastname`, `numberOfRooms`|
  |<ul><li>[ ] TODO</li>| DELETE | api/hotels/<name\>/rooms/<room_name\>/bookings/<from\>/<to\> | Think of something how to handle this| TODO|

### Test and improve

|  | HTTP Request type | Endpoint| Response  | Remarks|
| --- | --- | :--- | :--- | --- |
|<ul><li>[x] done</li> | GET |http://localhost:3000/api/hotels| all hotels |||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Heisenhaus |||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Ferienwohnungen%20Bernadette | Hotel name with space inside the name||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Tuxerhof/rooms/ |||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Tuxerhof/rooms/Appartement%2FFewo/prices |||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Landhaus%20Anger/images |||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Alpen%20Appartment%20Relax/location | the postal address and the geo location of the hotel||
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/hotels/Stab-Hütte/payments | the currencies and payment posibilities that the hotel offers| |
|<ul><li>[x] done</li>| GET | http://localhost:3000/api/locations/Ramsau/hotels| the postal address and the geo location of the hotel||
|<ul><li>[x] done</li>| GET |http://localhost:3000/api/hotels/Tuxerhof/rooms/Appartement%2FFewo/bookings | all bookings for room Appartment Fewo||
|<ul><li>[x] done</li>| POST |http://localhost:3000/api/hotels/Tuxerhof/rooms/Appartement%2FFewo/bookings | saves a new booking for Appartment Fewo ||
|TODO||add test path for each endpoint||add more|
