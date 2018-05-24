# sws
PS Semantic Web Services

Authors: Zahra Jafari and Angela Popa

Team: 6

Topic: Hotel Booking API

Version: 1.1

### Project setup:

  * the project folder is `node-hotel-booking`
  * run `npm install` in a terminal window at `/sws/node-hotel-booking/` location every time the package.json changes
  * `npm start` - to start the node server
  * if `nodemon` was configured in the main js file, then no restart of the server is needed after each code change
  * for `POST` requests in Postman, don't forget to select `x-www-form-urlencoded` in the `Body` tab.

## TODOs
### design the REST API
  - [x] identify 10 resources (`hotels`, `rooms`, `location`, `images`, `contacts`, `prices`, `payments`, `bookings`, `facilities`, `users`)
  - [x] identify at least one action per resource (`GET`, `POST`, `PUT`)
  - [x] define fields of the resources that can be queried and fields that will be exposed
  - [x] define the api syntax for each action on resources (including the http actions and the http error codes)
  - [x] decide upon the data format (xml/json/other): JSON
  - [x] decide how the HATEOAS can be implemented in this API (`HATEOS navigation`, `pagination`, `sorting`, `content-type in headers`)
  - [x] define mockup api calls and responses
  - [x] check if design guideliness were met (feedback teacher: use id's, instead of names). Only exception is for rooms, where no id field is provided in the db. Assumption: no two rooms have the same name. Query remains as originally by name. The same goes for location endpoint. All other endpoints are using ids to identify resources.

### create a Report of this Project
  - [x] include a list of all identified resources
  - [x] include a list of all endpoints
  - [x] explain why we have chosen the semantify dataset
  - [x] explain which information is included in this dataset and which is not included
  - [x] add for each endpoint an example, with a request path and a json result object
  - [x] update examples with the corrected resource identification

### start implementing :)
  - [x] create new model classes to fit the data from the new dataset (maybe not all fields from the db need to used in the model)
  - [x] try out GET, POST requests with the new data models on the new database `swshotels` (don't forget to change the db name in the `sever.js file`)
  - [x] add paging for the get request (`/hotels`)
  - [x] add navigation (HATEOS) (https://restfulapi.net/hateoas/, https://spring.io/understanding/HATEOAS;). In this project the HATEOS links were added to the dataset for hotel and room objects. Only GET links were added. Please import the dataset hotels_enriched.json which has the needed links.
  - [x] how to define facilities for hotel/room? There is no data in the dataset regarding facilities, so we create an endpoint and add facilities exclusively through the api. Currently a facility has only one field - the name of the facility.
  - [x] how to define availability for rooms? Currently the db has the schema.org value InStock for all entries. So we ignore this field for now. We should handle availability/booking differently somehow. Ideea: to create an own endpoint for bookings (fields: `from`, `to`, `firstname` and `lastname` of the guest, `numberOfRooms` which the guest booked).
  - [x] how to implement booking of rooms????????? since the assignment is called "Hotel Booking API"!!! See the line above, by creating an own endpoint. Availability and bookings are merged together into one endpoint called 'booking'. The booked periods (`from`,`to`) mark the periods where the rooms are booked and where they are not available for new bookings. There is no check made for colliding booking periods. This is a nice to have feature for the future :)
  - [x] implement a `PUT` and a `DELETE` request for at least one endpoint (`hotels`, `facilities`)

 ### Error codes

 | HTTP Error Code | Description | HTTP Request Type|
 | :--- | :--- | :--- |
 |200| `OK`| GET, PUT|
 |201|`Created`| POST|
 |204| `No Content`|DELETE|
 |404| `Entity Not found`| GET|
 |500| `Internal Server Error`| GET, POST, PUT, DELETE|

 ### ASCII encoding

 | Replace value in path | with encoding | Example
 | :--- | :--- | :--- |
 | space|%20|'Landhaus Anger'|
 | / | %2F|'Appartment/Fewo' /api/hotels/5aeb56f1eb089a6227c8fd01/rooms/Appartement%2FFewo/prices|


  ### Enpoints/Resources

  |  | HTTP Request type | Endpoint| Resulting HTTP Code| Resulting action  |
  |--- | --- | :--- | :--- | --- |
  |<ul><li>[x] </li> | GET | /api/hotels | `200 OK` | lists all hotels |
  |<ul><li>[x] </li> | POST | /api/hotels | `201 Created` or <TODO\> code in case of error| adds a new hotel |
  |<ul><li>[x] </li> | PUT | /api/hotels | `200 OK` or `500` in case of error| updates an existing hotel data |
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\> | `200 OK` or `404 Not Found` | returns one hotel|
  |<ul><li>[x] </li> | DELETE | /api/hotels/<hotelId\> | `201 Created` or `404 Not Found` |deletes the hotel |
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/contacts | `200 OK` or `404 Not Found` | returns the contact data of a hotel|
  |<ul><li>[x] </li> | POST | /api/hotels/<hotelId\>/contacts | `201 Created` or `404 Not Found` |adds contact details for a hotel |
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/rooms |`200 OK` or `404 Not Found`| all rooms of the specific hotel, or error in case the hotel is not found|
  |<ul><li>[ ] TODO</li>| POST | /api/hotels/<hotelId\>/rooms | `201 Created` or <TODO\> code in case of error| adds a new room|
  |<ul><li>[ ] TODO</li>| DELETE | /api/hotels/<hotelId\>/rooms/<room_name\> | TODO | delete one room|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/rooms/<room_name\>/prices | `200` or `404`| all prices for rooms of a specific hotel|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/images | `200` or `404`| all images of the hotel|
  |<ul><li>[ ] TODO </li>| POST | /api/hotels/<hotelId\>/images | `201 Created` or `404 Not Found`| adds one image|
  |<ul><li>[ ] TODO </li>| DELETE | /api/hotels/<hotelId\>/images/<url\> | TODO| deletes one image|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/location | `200 OK` or `404 Not Found`| the postal address and the geo location of the hotel|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/payments | `200 OK` or `404 Not Found`| the currencies and payment posibilities that the hotel offers|
  |<ul><li>[x] </li>| GET | /api/hotel/<hotelId\>/facilities | `200 OK` or `404 Not Found`|all facilities or emtpy list or error in case the hotel name is not found|
  |<ul><li>[x] </li>| POST | /api/hotel/<hotelIdid\>/facilities | `201 Created` or `404 Not Found`| new facility|
  |<ul><li>[ ] TODO</li>| DELETE | /api/hotel/<hotelId\>/facilities/<facility_id\> | TODO| deletes one facility|
  |<ul><li>[x] </li>| GET | /api/locations/<location\>/hotels | `200` or `404`| all hotels at the named location|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/rooms/<room_name\>/bookings |lists the hotel room bookings | |
  |<ul><li>[x] </li>| POST | /api/hotels/<hotelId\>/rooms/<room_name\>/bookings | adds a new booking| POST request body fields: `from`, `to`, `firstname`, `lastname`, `numberOfRooms`|
  |<ul><li>[ ] TODO</li>| DELETE | /api/hotels/<hotelId\>/rooms/<room_name\>/bookings/<from\>/<to\> | Think of something how to handle this| TODO|
  |<ul><li>[x] </li>| GET | /api/users | `200` or `404`| all users|
  |<ul><li>[x] </li>| GET | /api/users/<userId\> | `200` or `404`| one user by id|
  |<ul><li>[x] </li>| POST | /api/users | `201 Created` or <TODO\> code in case of error|adds a new user|

### Test and improve

|  | HTTP Request type | Endpoint| Response  | Remarks|
| --- | --- | :--- | :--- | --- |
|<ul><li>[x] </li> | GET |http://localhost:3000/api/hotels| all hotels |||
|<ul><li>[x] </li>| GET | http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01| ||
|<ul><li>[x] </li>| GET | http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/rooms/ |||
|<ul><li>[x] </li>| GET | http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/rooms/Appartement%2FFewo/prices |||
|<ul><li>[x] </li>| GET | http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/images |||
|<ul><li>[x] </li>| GET | http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/location | the postal address and the geo location of the hotel||
|<ul><li>[x] </li>| GET | http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/payments | the currencies and payment posibilities that the hotel offers| |
|<ul><li>[x] </li>| GET | http://localhost:3000/api/locations/Ramsau/hotels| the postal address and the geo location of the hotel||
|<ul><li>[x] </li>| GET |http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/rooms/Appartement%2FFewo/bookings | all bookings for room Appartment Fewo||
|<ul><li>[x] </li>| POST |http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/rooms/Appartement%2FFewo/bookings | saves a new booking for Appartment Fewo ||
|<ul><li>[x] </li>| GET| http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/contacts |returns email, telephone and faxNumber for the given hotel||
|<ul><li>[x] </li>| POST| http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/contacts |saves email, telephone and faxNumber for the given hotel||
|<ul><li>[x] </li>| GET| http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/facilities |returns the facilities of the given hotel||
|<ul><li>[x] </li>| POST| http://localhost:3000/api/hotels/5aeb56f1eb089a6227c8fd01/facilities |saves a facility for the given hotel||
|<ul><li>[x] </li>| POST| http://localhost:3000/api/users |returns all users||
|<ul><li>[x] </li>| POST| http://localhost:3000/api/users/5aeb56f1eb089a6227c8fd01 |returns one user||
|<ul><li>[x] </li>| POST| http://localhost:3000/api/users |saves one user||
|TODO||add test path for each endpoint||add more|
