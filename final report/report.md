##### PS Semantic Web Services - SS2018

#### Team 6: Zahra Jafari and Angela Popa

## Hotel Booking API
### Version 2.0

### Requirements

Design and implement a Hotel Booking RESTful API.

The API should contain minimum 10 different resources and at least one supported operation per resource.
Try serving real data from your API as much as possible.

Take into considerations the HATEOAS guidelines.

### Resources and Endpoints

 |Resource|Endpoint | supported HTTP Request type | Remarks|
 |--- | --- | :--- | :--- |
 |hotels| /api/hotels | GET, POST ||
 || /api/hotels/<hotelId\> | GET, PUT, DELETE ||
 |contacts| /api/hotels/<hotelId\>/contacts | GET||
 || /api/hotels/<hotelId\>/contacts | POST| fields: `email`, `telephone`, `faxNumber`|
 |rooms| /api/hotels/<hotelId\>/rooms | GET||
 || /api/hotels/<hotelId\>/rooms/<room_name\>/prices | GET||
 |images| /api/hotels/<hotelId\>/images | GET ||
 |location| /api/hotels/<hotelId\>/location | GET ||
 |payments| /api/hotels/<hotelId\>/payments | GET ||
 |facilities| /api/hotel/<hotelId\>/facilities | GET ||
 || /api/hotel/<hotelId\>/facilities | POST | fields: `name`|
 |bookings| /api/hotels/<hotelId\>/rooms/<room_name\>/bookings | GET | |
 || /api/hotels/<hotelId\>/rooms/<room_name\>/bookings | POST|  fields: `from`, `to`, `firstname`, `lastname`, `numberOfRooms`|
 |hotels at location| /api/locations/<location\>/hotels | GET| all hotels at the named location|
 |users| /api/users | GET||
 || /api/users | POST| fields: ` "first_name`,`last_name`,`email`,`created_date`|
 || /api/users/<userId\> | GET |||


### Project setup:

   * installation of the required tools (MongoDB, node.js, Postman). Installation details can be found under https://github.com/angelapopa/sws/tree/master/notes/environment_setup.md.
   * import of the dataset (https://github.com/angelapopa/sws/tree/master/dataset/hotels_enriched.json)
   * source code checkout: `git clone https://github.com/angelapopa/sws.git`
   * installation of all needed node.js packages: `npm install` in a terminal window at `/sws/node-hotel-booking/`
   * `npm start` - to start the node server
   * for `POST` requests in Postman, don't forget to select `x-www-form-urlencoded` in the `Body` tab.

### Used Dataset

We decided to use the dataset of the Mayrhofen and Seefeld schema.org annotated data. This dataset was provided to us in WS 2017.

From this dataset we filtered out only those entiries that are hotels. For each entity we removed the annotated information (@type). We kept all field names as they were, namely schema.org properties.

This dataset was providing information like `hotel url`, `hotel name`, `hotel description`, `hotel location (geo and postal address)`, `images`, `price range`, `rooms`.

This dataset was not providing information like `contact`, `bookings`, `facilities`, `users`, `navigation links`. The fields of this entities do not conform to the schema.org specification. This entities can be added via the API build during this project.

The `navigation urls` were generated and imported separately. Additionally, for every newly added hotel through the API, new `navigation links` are added automatically for the new hotel.

The resource identification is done by the resource id. Exception is the room endpoint, where the identification is by room name. The reason is that our current db has no ids for rooms (rooms are preexisting data). The second exception is the location resource (/api/locations/<location\>/hotels) where the location represents the name of a location (e.g. Hippach), it has no id, since it is not a standalone resource. Rooms and location names are assumed to be unique.

### Restful API Pagination, Sorting, Filtering

This requirements were implemented inside the API logic and in this current version of the project they are not configurable outside the API.

Pagination: defaults to 10 enteties per page

Sorting: by hotel name, ascending

Filtering: case dependent


## Examples

##### Hotel Details
```
GET /api/hotels/5aeb56f1eb089a6227c8fcdb
```

```
{
    "links": [
        {
            "_id": "5afcbcb1182d6018a87bf991",
            "href": "/api/hotels/5aeb56f1eb089a6227c8fcdb",
            "rel": "self",
            "type": "GET"
        },
        {
            "_id": "5afcbcb1182d6018a87bf993",
            "href": "/api/hotels/5aeb56f1eb089a6227c8fcdb/images",
            "rel": "images",
            "type": "GET"
        },
        {
            "_id": "5afcbcb1182d6018a87bf995",
            "href": "/api/hotels/5aeb56f1eb089a6227c8fcdb/payments",
            "rel": "payments",
            "type": "GET"
        },
        {
            "_id": "5afcbcb1182d6018a87bf997",
            "href": "/api/hotels/5aeb56f1eb089a6227c8fcdb/location",
            "rel": "location",
            "type": "GET"
        },
        {
            "_id": "5afcbcb1182d6018a87bf999",
            "href": "/api/hotels/5aeb56f1eb089a6227c8fcdb/rooms",
            "rel": "rooms",
            "type": "GET"
        },
        {
            "_id": "5afcbcb1182d6018a87bf99b",
            "href": "/api/hotels/5aeb56f1eb089a6227c8fcdb/contacts",
            "rel": "contacts",
            "type": "GET"
        },
        {
            "_id": "5afcbcb1182d6018a87bf99d",
            "href": "/api/hotels/5aeb56f1eb089a6227c8fcdb/facilities",
            "rel": "facilities",
            "type": "GET"
        }
    ],
    "_id": "5aeb56f1eb089a6227c8fcdb",
    "url": "http://www.rauchenwalderhof.at,http://maps.mayrhofen.at/?foreignResource=71BBA2D7-2023-4353-9A23-C1B69BADEC06",
    "name": "Rauchenwalderhof",
    "description": "Das 2012 umgebaute und modern renovierte Landhotel Rauchenwalderhof liegt in sonniger, ruhiger TOP-Lage von Mayrhofen, nur wenige Meter von der Penkenbahn und Ahornbahn, abseits der Hektik der Hauptstraße, umgeben von Wiesen und Gärten.\n\nDie großteils neuen, auf 4-Sterne Niveau ausgestatteten Zimmer & Apartments bieten das ideale Ambiente für Ihren Sommer- und Winterurlaub. Das Ganzjahresskigebiet am Hintertuxer Gletscher ist in ca. 25 Minuten bequem mit dem Auto oder mit öffentlichen Verkehrsmitteln erreichbar.\n\nInmitten der Zillertaler Bergwelt verwöhnen wir Sie mit einem reichhaltigen Frühstücksbuffet, das Sie im neu gestalteten Frühstücksraum oder auf der sonnigen Terrasse einnehmen können.\n\nOb als Treffpunkt zum Aperitif oder als Ort des gemütlichen Beisammenseins bietet unsere neue Hotelbar mit Kaminecke das richtige Ambiente.\n\nWir hoffen Sie schon bald persönlich begrüßen zu dürfen!,Achtung: nur Barzahlung möglich!\n\nInklusiv: Heizung, Strom; Exklusiv: Endreinigung, zusätzliches Frühstück,Check-In: 15:00 Uhr, Check-Out: 10:00 Uhr. \n\nAnreise: \nRichtung Mayrhofen, nach dem Kreisverkehr geradeaus weiter, nach dem Bahnhof auf der Umfahrungsstrasse, nach dem Roten Kreuz die zweite Einfahrt links einbiegen in die Rauchenwaldgasse.",
    "priceRange": "EUR 20.0 - 9999.0"
}
```

##### Hotel Images
```
GET /api/hotels/5aeb56f1eb089a6227c8fcdb/images
```

```
[
    {
        "url": "http://resc.deskline.net/images/ZIL/1/0f2c4d9a-1bac-4828-88e5-bb717f09503b/99/image.jpg",
        "caption": "Aussenansicht Sommer"
    },
    {
        "url": "http://resc.deskline.net/images/ZIL/1/a4ea4d5c-360e-4718-af1e-2dc57bbfaa33/99/image.jpg",
        "caption": "Aussenansicht Winter"
    },
    {
        "url": "http://resc.deskline.net/images/ZIL/1/423d8bf3-3514-4412-b9a0-bcbeb1aecdde/99/image.jpg",
        "caption": "Rauchenwalderhof - Sommer"
    },
    {
        "url": "http://resc.deskline.net/images/ZIL/1/8674ce49-eddb-47ae-8df4-e733ee65039b/99/image.jpg",
        "caption": "Landhotel Rauchenwalderhof  Mayrhofen"
    },
    {
        "url": "http://resc.deskline.net/images/ZIL/1/c76b1212-44cb-4eba-8228-4e1f20327c1b/99/image.png",
        "caption": "Rauchenwalderhof Logo"
    },
    {
        "url": "http://resc.deskline.net/images/ZIL/1/58efb8e9-48ff-49d3-abe6-c6dbbbe82449/99/image.jpg",
        "caption": "Rauchenwalderhof Terrasse"
    },
    [...]
]
```

##### Hotel Location
```
GET /api/hotels/5aeb56f1eb089a6227c8fcdb/location
```

```
{
    "address": {
        "name": "Rauchenwalderhof",
        "streetAddress": "Rauchenwald 658",
        "addressLocality": "Mayrhofen",
        "postalCode": "6290",
        "addressCountry": "AT"
    },
    "geo": {
        "latitude": "47.1627288061039",
        "longitude": "11.8571770191193"
    }
}
```

##### Hotel Payment Methods
```
GET /api/hotels/5aeb56f1eb089a6227c8fd0d/payments
```

```
{
    "paymentAccepted": [
        "MasterCard",
        "VISA"
    ],
    "currenciesAccepted": "EUR"
}
```

##### Hotel Facilities
```
GET /api/hotels/5aeb56f1eb089a6227c8fcec/facilities
```

```
[
    {
        "name": "Spa"
    },
    {
        "name": "Restaurant"
    }
]
```

##### Hotel Rooms
```
GET /api/hotels/5aeb56f1eb089a6227c8fd9c/rooms
```

```
[
    {
        "bookings": [
            {
                "_id": "5af5fa2de7bcc42760efce78",
                "from": "2018.12.29",
                "to": "2018.12.31",
                "firstname": " Mathias",
                "lastname": "Mustermann"
            },
            {
                "_id": "5af5fa6885202f3a8859adc1",
                "from": "2018.12.24",
                "to": "2018.12.25",
                "firstname": " Martha",
                "lastname": "Mustermann"
            }
        ],
        "links": [
            {
                "_id": "5af9dd794910eb2bf4c64366",
                "href": "/api/hotels/5aeb56f1eb089a6227c8fd9c/rooms/Appartement%2FFewo",
                "rel": "self",
                "type": "GET"
            },
            {
                "_id": "5af9dd794910eb2bf4c64368",
                "href": "/api/hotels/5aeb56f1eb089a6227c8fd9c/rooms/Appartement%2FFewo/prices",
                "rel": "prices",
                "type": "GET"
            },
            {
                "_id": "5af9dd794910eb2bf4c6436a",
                "href": "/api/hotels/5aeb56f1eb089a6227c8fd9c/rooms/Appartement%2FFewo/bookings",
                "rel": "bookings",
                "type": "GET"
            }
        ],
        "name": "Appartement/Fewo",
        "description": "Unsere  Ferienwohnung ist ca. 80 m² groß und bietet Platz für 2-7 Pers.!\nDie Wohnung besteht aus einer geräumigen Wohnküche, einem Vorraum, Dusche/WC und zwei sehr großen Schlafzimmern.\nUnsere geräumige Wohnküche ist ausgestattet mit Sat/Tv, Radio einem E-Herd mit Backofen, Geschirrspülmaschine, Kaffeemaschine und Geschirr.\nAuch Handtücher, Küchentücher und Bettwäsche sind vorhanden.",
        "itemOffered": {
            "name": "Appartement/Fewo",
            "numberOfRooms": "5.0",
            "occupancy": {
                "maxValue": "9",
                "minValue": "2"
            }
        }
    }
]
```

##### Hotel Room Prices
```
GET /api/hotels/5aeb56f1eb089a6227c8fd9c/rooms/Appartement%2FFewo/prices
```

```
[
    {
        "description": "Pax 2",
        "minPrice": 45,
        "maxPrice": 60,
        "priceCurrency": "EUR"
    },
    {
        "description": "Pax 3",
        "minPrice": 60,
        "maxPrice": 70,
        "priceCurrency": "EUR"
    },
    [...]
]
```

##### All Hotels at Location Hippach, page 9

```
GET /api/locations/Hippach/hotels/9
```

```
{
       "links": [
           {
               "_id": "5afcbcb1182d6018a87bfa0f",
               "href": "/api/hotels/5aeb56f1eb089a6227c8fcf0,
               "rel": "self",
               "type": "GET"
           },
           {
               "_id": "5afcbcb1182d6018a87bfa11",
               "href": "/api/hotels/5aeb56f1eb089a6227c8fcf0/images",
               "rel": "images",
               "type": "GET"
           },
           {
               "_id": "5afcbcb1182d6018a87bfa13",
               "href": "/api/hotels/5aeb56f1eb089a6227c8fcf0/payments",
               "rel": "payments",
               "type": "GET"
           },
           {
               "_id": "5afcbcb1182d6018a87bfa15",
               "href": "/api/hotels/5aeb56f1eb089a6227c8fcf0/location",
               "rel": "location",
               "type": "GET"
           },
           {
               "_id": "5afcbcb1182d6018a87bfa17",
               "href": "/api/hotels/5aeb56f1eb089a6227c8fcf0/rooms",
               "rel": "rooms",
               "type": "GET"
           },
           {
               "_id": "5afcbcb1182d6018a87bfa19",
               "href": "/api/hotels/5aeb56f1eb089a6227c8fcf0/contacts",
               "rel": "contacts",
               "type": "GET"
           },
           {
               "_id": "5afcbcb1182d6018a87bfa1b",
               "href": "/api/hotels/5aeb56f1eb089a6227c8fcf0/facilities",
               "rel": "facilities",
               "type": "GET"
           }
       ],
       "_id": "5aeb56f1eb089a6227c8fcf0",
       "url": "http://",
       "address": {
           "streetAddress": "Schwendberg 365",
           "addressLocality": "Hippach",
           "postalCode": "6283",
           "addressCountry": "AT",
           "telephone": "(0043) 664 1616583",
           "email": "patriciakirchler93@gmx.at"
       },
       "name": "Haus Kirchler",
       "description": "1 Schlafzimmer (1 Doppelbett und einem Einzelbett) 1 Bad mit Dusche, Inklusive: Heizung, 1 Stellplatz für PKW, TV-Sat, Wlan, Handtücher, Klopapier, Geschirrtücher, Wasserkocher, Kaffeemaschine, Herd+Backrohr, Kühl- Gefrierschrank, Bettwäsche,Richtung Schwendberg (Zillertaler Höhenstraße)\nca. 5min bergauf\nauf rechter Straßenseite\n\nCheck out: 10.00 Uhr\nCheck in: 14.00 Uhr,Vom Haus haben Sie eine wunderschöne Aussicht in die Bergwelt des Zillertals.\nEs liegt direkt an der Zillertaler Höhenstraße ca. 5 Autominuten vom Ortzentrum Hippach entfernt. Die ebenerdige Wohnung wurde 2016 renoviert und ist ausgestattet mit: 1 Schlaffzimmer (1 Doppelbett und 1 Einzelbett inkl. Bettwäsche), Bad und ein seperates WC (mit Hand/Badetücher), Wohnküche mit Ausziehcouch( für 2 Personen inkl. Bettwäsche).\nDie Küche verfügt über ein Waschbecken, E-Herd mit Kochfeld, Kühlschrank mit Gefriermöglichkeiten, Spühlmaschiene, Kaffeemaschiene, mini Backofen(Microwelle), Wasserkocher, Geschirr, Gläser, Besteck, Geschirrtücher,  TV-SAT, Radio,und einer gemütliche Sitzecke. Im Sommer hat man auch die Möglichkeit es sich vorm Haus gemütlich zu machen. \n\nBilder vom Innenraum kommen noch sind zurzeit noch beim renovieren. \nSind ende November online.\n\nFür weiter Fragen:\npatriciakirchler93@gmx.at",
       "priceRange": "EUR 27.0 - 27.0"
   },
   [...]
 }
```
##### Hotel Bookings
```
GET /api/hotels/5aeb56f1eb089a6227c8fd9c/rooms/Appartement%2FFewo/bookings
```

```
[
    {
        "from": "2018.12.29",
        "to": "2018.12.31",
        "firstname": " Mathias",
        "lastname": "Mustermann"
    },
    {
        "from": "2018.12.24",
        "to": "2018.12.25",
        "firstname": " Martha",
        "lastname": "Mustermann"
    },
    {
        "from": "2018.12.24",
        "to": "2018.12.25",
        "firstname": " Martha",
        "lastname": "Mustermann",
        "numberOfRooms": 2
    },
    [...]
]
```

##### Hotel Contact Data
```
GET /api/hotels/5aeb56f1eb089a6227c90117/contacts
```

```
[
    {
        "telephone": "555-888-222",
        "faxNumber": "55-12121-9977",
        "email": "knechtelhof@test.com"
    }
]
```

##### Hotel API Users
```
GET /users/
```

```
[
    {
        "created_date": "2018-05-16T19:37:47.516Z",
        "first_name": "User12",
        "last_name": "Lastname2",
        "email": "test2@test.com"
    },
    {
        "created_date": "2018-05-17T00:53:44.225Z",
        "first_name": "Matthias",
        "last_name": "Mustermann",
        "email": "test_mm@test.com"
    }
]
```

##### Hotel API Users
```
GET /api/users/5afc888bed29471e54bce756
```

Results in
```
{
    "created_date": "2018-05-16T19:37:47.516Z",
    "first_name": "User12",
    "last_name": "Lastname2",
    "email": "test2@test.com"
}
```

### Current work
 * hydra annotations

### Future work
  * the dataset contains contact data inside the postal address element. Merge this into the current `/contact` endpoint data.
  * implement the remaining operations for the endpoints
  * make pagination and sorting configurable from outside
