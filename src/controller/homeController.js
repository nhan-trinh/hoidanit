import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
}; //

const handleUser = async (req, res) => {
  let userList = await userService.getUserList();

  return res.render("user.ejs", { userList });
};

const handleCreateUser = (req, res) => {
  let username = req.body.Username;
  let email = req.body.Email;
  let password = req.body.Password;

  // userService.createNewUser(username, email, password);

  return res.send("handleCreateUser");
};

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateUser,
};
