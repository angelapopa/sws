# sws
PS Semantic Web Services

Authors: Zahra Jafari and Angela Popa

Team: 6

Topic: Hotel Booking API

Version: 2.0

### hydra
use `http://38add60d.ngrok.io/api/hotels/5aeb56f1eb089a6227c8fcf0` in the hydra console.
It should work as long as my laptop is turned on.

### Project setup:

  * the project folder is `node-hotel-booking`
  * run `npm install` in a terminal window at `/sws/node-hotel-booking/` location every time the package.json changes
  * `npm start` - to start the node server

## TODOs
### design the REST API
  - [x] identify 10 resources (`hotels`, `rooms`, `location`, `images`, `contacts`, `prices`, `payments`, `bookings`, `facilities`, `users`)
  - [x] check if design guideliness were met (feedback teacher: use id's, instead of names). Only exception is for rooms, where no id field is provided in the db. Assumption: no two rooms have the same name. Query remains as originally by name. The same goes for location endpoint. All other endpoints are using ids to identify resources.

### create a Report of this Project
  - [x] update examples with the corrected resource identification
  - [ ] update examples with hydra annotations
  - [ ] add information about hydra design decisions
  - [ ] add information about hydra client implementation/usage

### start implementing :)
  - [ ] Convert the Web API you developed to a lightweight semantic web sevice with Hydra.
  - [ ] Implement a generic client that understands the services annotated with your assigned vocabulary
(and/or test against the hydra demo app online)

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
