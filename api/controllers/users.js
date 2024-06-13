const User = require("../models/user");

const createUser = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({username, email, password});
  user.save()
    .then(() => {
      res.status(201).json({ message: "OK" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Something went wrong" });
    });
};

const UsersController = {
  createUser: createUser
};

module.exports = UsersController;
