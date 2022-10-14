// Database connectionn Configuration object

const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "",
    database: "auth_system",
  },
  listPerPage: 10,
};
module.exports = config;
