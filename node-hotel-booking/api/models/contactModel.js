import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//mongoose subdocument for a hotel contact
export const ContactSchema = new Schema({ 
    email: {type: String, required: true},
    telephone: {type: String},
    faxNumber: {type: String}
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
ContactSchema.method('toJSON', function() {
    var contact = this.toObject();
    contact["@type"] = "ContactPoint"
    delete contact.__v;
    return contact;
  });