//NODE MODULES
const pgp = require('pg-promise')({});
    //same as const app = pgp();
const db = pgp('postgres://localhost/blog');


const PublicPostService = {};


PublicPostService.readPost = (post_id) => {
    return db.any('SELECT * FROM posts WHERE id=${post_id}', {post_id})
}

PublicPostService.readAllPostComments = (post_id) => {
    return db.any('SELECT * FROM comments JOIN posts ON posts.id=comments.post_id WHERE post_id=${post_id}', {post_id})
}
//DOES NOT WORK
PublicPostService.readIndividualCommentFromPost = (post_id, comment_id) => {
    return db.any('SELECT * FROM comments JOIN posts ON posts.id=comments.post_id WHERE post_id=${post_id} AND comments.id=${comment_id}', {post_id, comment_id})
}


module.exports = PublicPostService;