import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUser = async (req, res) => {
  let userList = await userService.getUserList();
  await userService.deleteUserList(9);
  return res.render("user.ejs", { userList });
};

const handleCreateUser = (req, res) => {
  let username = req.body.Username;
  let email = req.body.Email;
  let password = req.body.Password;

  userService.createNewUser(username, email, password);

  return res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  await userService.deleteUserList(req.params.id);
  return res.redirect("/user");
};

const handleEditUser = async (req, res) => {
  let id = req.params.id;
  let user = await userService.getUserbyid(id);

  let userData = {};
  userData = user;
  // if (user && user.length > 0) {
  //   userData = user[0];
  // }
  return res.render("update-user.ejs", { userData });
};

const handleUpdateUser = async (req, res) => {
  let username = req.body.Username;
  let email = req.body.Email;
  let id = req.body.id;
  await userService.updateUser(username, email, id);
  return res.redirect("/user");
};

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateUser,
  handleDeleteUser,
  handleEditUser,
  handleUpdateUser,
};
