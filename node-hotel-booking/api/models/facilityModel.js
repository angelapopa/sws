import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//mongoose subdocument for bookings
export const FacilitySchema = new Schema({ 
    name: {type: String}
    //maybe add some more properties in the future
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
FacilitySchema.method('toJSON', function() {
    var facility = this.toObject();
    delete facility.__v;
    return facility;
  });