import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models/index";

// import { name } from "ejs";
// import { where } from "sequelize/lib/sequelize";
// import { raw } from "body-parser";

const salt = bcrypt.genSaltSync(10);

// const connection = mysql.createConnection({
//   host: "localhost", // địa chỉ máy chủ MySQL
//   user: "root", // tên người dùng
//   database: "jwt", // tên cơ sở dữ liệu
// }); // sử dụng mysql2 để kết nối với cơ sở dữ liệu MySQL

//

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (username, email, password) => {
  let hashPass = hashUserPassword(password);
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });

  try {
    await db.User.create({
      name: username,
      email: email,
      password: hashPass,
    });
  } catch (error) {
    console.log("check error", error);
  }
};

const getUserList = async () => {
  let newUser = await db.User.findOne({
    where: { id: 1 },
    attributes: ["id", "name", "email"],
    include: { model: db.Group, attributes: ["name", "description"] },
    raw: true,
    nest: true,
  });

  // let newRole = await db.Group.findOne({
  //   where: { id: 1 },
  //   include: { model: db.Role },
  //   raw: true,
  //   nest: true,
  // });

  let r = await db.Group.findAll({
    where: { id: 1 },
    include: { model: db.Role },
    raw: true,
    nest: true,
  });

  console.log("check new user", newUser);
  console.log("check new user", r);

  let user = [];
  user = await db.User.findAll();
  return user;
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });

  // try {
  //   const [rows, fields] = await connection.execute("SELECT * from user");
  //   return rows;
  // } catch (error) {
  //   console.log(">>>> check error", error);
  // }
};

const deleteUserList = async (userid) => {
  await db.User.destroy({
    where: { id: userid },
  });
  // DELETE FROM user WHERE id='Alfreds Futterkiste';
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });

  // try {
  //   const [rows, fields] = await connection.execute(
  //     "DELETE FROM user WHERE id=?",
  //     [id]
  //   );
  //   return rows;
  // } catch (error) {
  //   console.log(">>>> check error", error);
  // }
};

const getUserbyid = async (id) => {
  let user = {};
  user = await db.User.findOne({
    where: { id: id },
  });
  return user.get({ plain: true });
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "SELECT * FROM user WHERE id=?",
  //     [id]
  //   );
  //   return rows;
  // } catch (error) {
  //   console.log(">>>>check error", error);
  // }
};

// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;

const updateUser = async (username, email, id) => {
  await db.User.update(
    { name: username, email: email },
    {
      where: { id: id },
    }
  );
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "UPDATE user SET name= ?, email= ? WHERE id =?",
  //     [username, email, id]
  //   );
  //   return rows;
  // } catch (error) {
  //   console.log(">>>>check error", error);
  // }
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUserList,
  getUserbyid,
  updateUser,
};
