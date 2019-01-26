//NODE MODULES
const pgp = require('pg-promise')({});
    //same as const app = pgp();
const db = pgp('postgres://localhost/blog');


const PrivateUserService = {};

//USER
PrivateUserService.putUser = (user_id, username, email, password) => {
    return db.any('UPDATE users SET username=${username}, email=${email}, password=${password} WHERE id=${user_id}', {username, email, password, user_id});
}

PrivateUserService.deleteUser = (user_id) => {
    return db.any('DELETE FROM users WHERE id=${user_id}', {user_id});
}




module.exports = PrivateUserService;