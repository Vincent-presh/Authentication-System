var express = require("express");
var router = express.Router();
const connection = require("../services/db");

async function findProfile(email, password) {
  try {
    // Sql Query Builder for finding a profile with email and password
    const response = await new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE email=? AND password=?";
      connection.query(query, [email, password], (err, result) => {
        if (err) reject(new Error(err.message));
        resolve(result);
      });
    });

    return {
      user: response,
      logged_in: true,
    };
  } catch (error) {
    console.log(error);
  }
}

// Router for Post Method
router.post("/", function (req, res) {
  const { email, password } = req.body.user;
  const result = findProfile(email, password);
  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
});

module.exports = router;
