### Lessons learned

##### Why is mongoose helpful?
Answer: Mongoose lets you define a model object. This model object is defined by the user with all fields that should be populated at a POST resquest. Mongoose then takes this model object and maps it to a db object. The db ibject is saved to the database. At save time the object gets automatically an id and a version number.

##### How to hide mongodb fields `_id` and `_v` in the json GET response?
Solution: Overwrite the toJSON method like this:

```
HotelSchema.method('toJSON', function() {
    var hotel = this.toObject();
    delete hotel._id;
    delete hotel.__v;
    return hotel;
  });
```
Note: The above does not work for subdocuments.

An alternative solution would be to exclude it in all mongodb queries:

```
Hotel.find({})
 .select{'name': 1, 'description':1, _id: 0, _v:0 }
```

##### How to restrict the display of some normal fields in the json GET response?

Solution: Just like in SQL, add the fields that you want to have in teh result to the select statement.

```
Hotel.find({})
    .select(['name', 'url', 'description', 'priceRange', 'currenciesAccepted'])
    ....
```


##### How to query for nested elements?
Solution:

MongoDB: ``` {"address.addressLocality":'Hippach'} ```

NodeJs:  ```Hotel.find({"address.addressLocality":locationName})```

##### How to define subdocuments/subelements of a json data item from the db

definition inside the parent subdocument

```
export const HotelSchema = new Schema({

    //some fields
    //some other fields

    //subdocument
    makesOffer: [roomSchema] //mongoose child subdocument
});
```

definition of the subdocument:
```
//mongoose subdocument for rooms
export const roomSchema = new Schema({
    name : {type: String},
    description: {type: String}
 });
```
http://mongoosejs.com/docs/subdocs.html

#### What is HATEOS navigation?

https://restfulapi.net/hateoas/

http://www.baeldung.com/spring-hateoas-tutorial

In this project the HATEOS links were added to the dataset for hotel and room objects. Only GET links were added.

There are some useful npm packages (https://www.npmjs.com/package/express-hateoas-links, https://www.npmjs.com/package/hateoas). This were not used in this project. Maybe in a future stage of the prject.
