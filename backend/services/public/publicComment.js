//NODE MODULES
const pgp = require('pg-promise')({});
    //same as const app = pgp();
const db = pgp('postgres://localhost/blog');

const PublicCommentService = {};


PublicCommentService.readComment = (comment_id) => {
    return db.any('SELECT * FROM comments WHERE id = ${comment_id}', {comment_id})
}



module.exports = PublicCommentService;