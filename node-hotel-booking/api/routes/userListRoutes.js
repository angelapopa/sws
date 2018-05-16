
     import express from 'express';
     
     const app = express();
     import  { 
                 list_all_users,
                 create_a_user,
                  read_a_user 
          }  from "../controllers/userListController";
   
      
      // const User= require ("./api/models/userListModel");         
      const userRoutes = (app) => {
      const  userList= require('../controllers/userListController'); 

            app.route('/users')

              .get(userList.list_all_users)
              .post(userList.create_a_user);
  
            app.route('users/:userId')
               .get(userList.read_a_user);
   
  
}

export default userRoutes;
console.log ('ok1');