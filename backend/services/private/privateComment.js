//NODE MODULES
const pgp = require('pg-promise')({});
    //same as const app = pgp();
const db = pgp('postgres://localhost/blog');


const PrivateCommentService = {};

//COMMENT
PrivateCommentService.createComment = (author, post_id, title, body) => {
    return db.any('INSERT INTO comments (post_id, author, title, body) VALUES (${post_id}, ${author}, ${title}, ${body})', {author, post_id, title, body})
}

PrivateCommentService.updateComment = (comment_id, author, post_id, title, body) => {
    return db.any('UPDATE comments SET title=${title}, body=${body} WHERE id=${comment_id} AND author=${author} AND post_id=${post_id}', {comment_id, author, post_id, title, body})
}
PrivateCommentService.deleteComment = (comment_id, post_id, author) => {
    return db.any('DELETE FROM comments WHERE author=${author} AND id=${comment_id} AND post_id=${post_id}', {comment_id, post_id, author})
}


module.exports = PrivateCommentService;