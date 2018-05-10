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