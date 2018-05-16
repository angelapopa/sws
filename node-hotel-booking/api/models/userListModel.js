

 import mongoose from 'mongoose';

 const Schema = mongoose.Schema;
export  const UserSchema = new Schema({
   first_name: {
       type: String,
       Required: 'Please enter your first name'
   },
   last_name: {
       type: String,
       Required: 'Please enter your last name'
   },
  
       email: {
       type: String,
       Required: 'Please enter your email'
   },
   Created_date:{
       type: Date,
       default :Date.now

   }

});

console.log ('we are in model');
//one o instead of 2
export const User = mongoose.model('Users', UserSchema);