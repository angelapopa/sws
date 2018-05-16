   
import  { 
    list_all_users,
    create_a_user,
    read_a_user 
}  from "../controllers/userListController";
                
const userRoutes = (app) => {
    
    app.route('/api/users')
      .get((req, res, next) => {
        next();
      }, list_all_users)
      .post((req, res, next) => {
        next();
      }, create_a_user);
    
    app.route('/api/users/:userId')
        .get(read_a_user);
}

export default userRoutes;
console.log ('ok1');