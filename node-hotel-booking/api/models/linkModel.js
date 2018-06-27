import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//mongoose subdocument for HATEOS links
export const LinkSchema = new Schema({ 
    href: {type: String},
    rel: {type: String},
    type: {type: String}
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
LinkSchema.method('toJSON', function() {
    var link = this.toObject();
    
    delete link.__v;
    return link;
  });
  