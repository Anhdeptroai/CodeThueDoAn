const { Pool } = require("pg");

const pool = new Pool({
    // user: "postgresqlcodingservicedb_user",
    // host: "dpg-d304r3n5r7bs73b1jg6g-a",
    // database: "postgresqlcodingservicedb",
    // password: "sAMfQAct2KgKzZeTnerhwFrmYKBu4m5W",
    // port: 5432

    // user: "postgres",
    // host: "localhost",
    // database: "codingservicedb",
    // password: "phungsu123",
    // port: 5432

    user: "postgres",
    host: "localhost",
    database: "codingservicedb",
    password: "Trunganh123",
    port: 5432
});

module.exports = pool;