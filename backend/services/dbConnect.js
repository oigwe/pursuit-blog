//NODE MODULES
const pgp = require('pg-promise')({});
    //same as const app = pgp();
const db = pgp('postgres://localhost/blog');



module.exports = {
    db,
}