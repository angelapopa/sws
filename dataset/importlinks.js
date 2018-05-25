/*misuse of the get request to import links into the db 
since our dataset is not populated with HATEOAS links, we construct them at a one time GET request*/
/*hotel links */
export const getAllHotels = (req, res) => {
    const root_url = "/api/hotels";
    Hotel.find({})
    //.select(['id', name', 'url', 'description', 'priceRange', 'links'])
    .exec(function (err, hotels){
        var enrichedHotels = [];

        hotels.forEach(function(hotel) {

               let hotelUrlPart = root_url + "/" + hotel.id;

               hotel.links = [];

               var newSelfLink0 = new Link ({
                href: hotelUrlPart,
                rel: "self",
                type: "GET"
                });

                hotel.links.push(newSelfLink0);

               var newSelfLink = new Link ({
                   href: hotelUrlPart +"/images",
                   rel: "images",
                   type: "GET"
               });

               hotel.links.push(newSelfLink);

               var newSelfLink2 = new Link ({
                href: hotelUrlPart +"/payments",
                rel: "payments",
                type: "GET"
                });

                hotel.links.push(newSelfLink2);

                var newSelfLink3 = new Link ({
                    href: hotelUrlPart +"/location",
                    rel: "location",
                    type: "GET"
                });
    
                hotel.links.push(newSelfLink3);

                var newSelfLink4 = new Link ({
                    href: hotelUrlPart +"/rooms",
                    rel: "rooms",
                    type: "GET"
                });
    
                hotel.links.push(newSelfLink4);

                var newSelfLink6 = new Link ({
                    href: hotelUrlPart +"/contacts",
                    rel: "contacts",
                    type: "GET"
                });
    
                hotel.links.push(newSelfLink6);

                var newSelfLink7 = new Link ({
                    href: hotelUrlPart +"/facilities",
                    rel: "facilities",
                    type: "GET"
                 });
            
                hotel.links.push(newSelfLink7);

              hotel.save((err, savedHotel) => {
                 
               });

               enrichedHotels.push(hotel);
               

       });


        res.send(enrichedHotels);
        //res.send(hotels);
    });
};


////links for rooms
/*room links */
export const getHotelRooms = (req, res) => {
    const root_url = "/api/hotels"; 
    Hotel.find({})
    //.select(['id', name', 'url', 'description', 'priceRange', 'links'])
    .exec(function (err, hotels){
        var enrichedHotels = [];

        hotels.forEach(function(hotel) {

            hotel.makesOffer.forEach(function(element) {
                let formattedName0 = element.name.replace(/\s+/g, "%20");
                let formattedName = formattedName0.replace(/\//g, "%2F");

                let hotelUrlPart = root_url + "/" + hotel.id + "/" + "rooms" + "/" + formattedName;

                element.links = [];

                var newSelfLink0 = new Link ({
                    href: hotelUrlPart,
                    rel: "self",
                    type: "GET"
                    });
    
                    element.links.push(newSelfLink0);

                    var newSelfLink = new Link ({
                        href: hotelUrlPart +"/prices",
                        rel: "prices",
                        type: "GET"
                    });
     
                    element.links.push(newSelfLink);
     
                    var newSelfLink2 = new Link ({
                     href: hotelUrlPart +"/bookings",
                     rel: "bookings",
                     type: "GET"
                     });
     
                     element.links.push(newSelfLink2);

            });

                 
             

            hotel.save((err, savedHotel) => {
                 
            });

            enrichedHotels.push(hotel);
       });
res.status(200);
        //res.send(enrichedHotels);
        //res.send(hotels);
    });
};