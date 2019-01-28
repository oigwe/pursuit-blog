//NODE MODULES
const pgp = require('pg-promise')({});

    //same as const app = pgp();
const db = pgp('postgres://localhost/blog');


const PublicUserService = {};

PublicUserService.createUser = (username, email, password) => {
    return db.none('INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})', {username, email, password})
}
//COME BACK
PublicUserService.loginUser = (id) => {
    return db.one('SELECT username, password FROM users WHERE id=${id}', {id})
}

//INSERT TOKEN ON USER -  BASED ON UUIDV TOKEN
PublicUserService.insertToken = (token, id) => {
    return db.none('UPDATE users SET token = ${token} WHERE id=${id}', {token, id})
}
 PublicUserService.readUser = (user_id) => {
    return db.any('SELECT * FROM users WHERE id=${user_id}', {user_id})
}

PublicUserService.readUserAllPosts = (user_id) => {
    return db.any('SELECT * FROM posts JOIN users ON posts.author=users.id WHERE users.id=${user_id}', {user_id})
}
PublicUserService.readUserIndividualPost = (user_id, post_id) => {
    return db.any('SELECT * FROM posts JOIN users ON posts.author=users.id WHERE users.id=${user_id} AND posts.id=${post_id}', {user_id, post_id})
}

PublicUserService.readUserAllComments = (user_id) => {
    return db.any('SELECT * FROM comments JOIN users ON comments.author=users.id WHERE users.id=${user_id}', {user_id})
}
PublicUserService.readUserIndividualComment = (comment_id, user_id) => {
    return db.any('SELECT * FROM comments JOIN users ON comments.author=users.id WHERE users.id=${user_id} AND comment.id=${comment_id}', {comment_id, user_id})
}


module.exports = PublicUserService;