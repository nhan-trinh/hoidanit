import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import { name } from "ejs";

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
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [username, email, hashPass]
    );
  } catch (error) {
    console.log("check error", error);
  }
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * from users");
    return rows;
  } catch (error) {
    console.log(">>>> check error", error);
  }
};

const deleteUserList = async (id) => {
  // DELETE FROM users WHERE id='Alfreds Futterkiste';
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM users WHERE id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(">>>> check error", error);
  }
};

const getUserbyid = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM users WHERE id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(">>>>check error", error);
  }
};

// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;

const updateUser = async (username, email, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "UPDATE users SET name= ?, email= ? WHERE id =?",
      [username, email, id]
    );
    return rows;
  } catch (error) {
    console.log(">>>>check error", error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUserList,
  getUserbyid,
  updateUser,
};
