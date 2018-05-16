import mongoose from 'mongoose';
import {UserSchema} from '../models/userListModel';

const User = mongoose.model('User', UserSchema);

export const  create_a_user = (req, res) => {
    let new_user = new User(req.body);

    new_user.save((err, user) => {
        res.status(201).json(user);
    });
};

export const  list_all_users = (req, res) =>{
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};
console.log ('controller works fine too');

export const read_a_user = (req, res) =>{
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}
console.log ('controller works fine read');
